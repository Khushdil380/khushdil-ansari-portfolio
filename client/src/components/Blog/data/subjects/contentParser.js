/**
 * Content Parser for Blog Topics
 * Converts markdown-like content files into structured page data
 *
 * Supported markers:
 * [PAGE_BREAK] - Splits content into multiple pages
 * # Heading - Creates a heading section
 * ## Subheading - Creates a subheading section
 * ### Sub-subheading - Creates a sub-subheading section
 * **text** - Bold text (inline formatting)
 * ![alt](url) - Creates an image section
 * - List item - Creates list items (consecutive items become one list)
 * ``` code ``` - Creates code blocks
 * > Quote - Creates quote/note sections
 * Regular text - Creates text paragraphs
 */

/**
 * Parse inline bold markdown (**text**) and return an array of text segments
 * Each segment is either { type: 'text', content: '...' } or { type: 'bold', content: '...' }
 */
export const parseInlineBold = (text) => {
  const segments = [];
  const boldPattern = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = boldPattern.exec(text)) !== null) {
    // Add text before the bold part
    if (match.index > lastIndex) {
      segments.push({
        type: "text",
        content: text.slice(lastIndex, match.index),
      });
    }

    // Add the bold part
    segments.push({
      type: "bold",
      content: match[1],
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after last bold
  if (lastIndex < text.length) {
    segments.push({
      type: "text",
      content: text.slice(lastIndex),
    });
  }

  // If no bold text found, return the original text
  if (segments.length === 0) {
    segments.push({ type: "text", content: text });
  }

  return segments;
};

export const parseContent = (contentString) => {
  const pages = contentString
    .split("[PAGE_BREAK]")
    .map((pageContent, index) => {
      const sections = [];
      const lines = pageContent.trim().split("\n");

      let currentList = null;
      let currentCode = null;
      let isInCodeBlock = false;

      lines.forEach((line, lineIndex) => {
        const trimmedLine = line.trim();

        // Skip empty lines unless in code block
        if (!trimmedLine && !isInCodeBlock) {
          // Flush current list if exists
          if (currentList) {
            sections.push(currentList);
            currentList = null;
          }
          return;
        }

        // Code block toggle
        if (trimmedLine.startsWith("```")) {
          if (!isInCodeBlock) {
            // Start code block
            const language = trimmedLine.slice(3).trim() || "javascript";
            currentCode = { type: "code", language, content: "" };
            isInCodeBlock = true;
          } else {
            // End code block
            sections.push(currentCode);
            currentCode = null;
            isInCodeBlock = false;
          }
          return;
        }

        // Inside code block - just collect lines
        if (isInCodeBlock) {
          currentCode.content += (currentCode.content ? "\n" : "") + line;
          return;
        }

        // Heading (# Heading)
        if (trimmedLine.startsWith("# ")) {
          if (currentList) {
            sections.push(currentList);
            currentList = null;
          }
          const headingText = trimmedLine.slice(2).trim();
          sections.push({
            type: "heading",
            content: headingText,
            segments: parseInlineBold(headingText),
          });
          return;
        }

        // Subheading (## Subheading)
        if (trimmedLine.startsWith("## ")) {
          if (currentList) {
            sections.push(currentList);
            currentList = null;
          }
          const subheadingText = trimmedLine.slice(3).trim();
          sections.push({
            type: "subheading",
            content: subheadingText,
            segments: parseInlineBold(subheadingText),
          });
          return;
        }

        // Sub-subheading (### Sub-subheading)
        if (trimmedLine.startsWith("### ")) {
          if (currentList) {
            sections.push(currentList);
            currentList = null;
          }
          const subsubheadingText = trimmedLine.slice(4).trim();
          sections.push({
            type: "subsubheading",
            content: subsubheadingText,
            segments: parseInlineBold(subsubheadingText),
          });
          return;
        }

        // Image (![alt](url))
        const imageMatch = trimmedLine.match(/^!\[(.*?)\]\((.*?)\)$/);
        if (imageMatch) {
          if (currentList) {
            sections.push(currentList);
            currentList = null;
          }
          sections.push({
            type: "image",
            alt: imageMatch[1],
            src: imageMatch[2],
          });
          return;
        }

        // List item (- Item or * Item)
        if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
          const item = trimmedLine.slice(2).trim();
          if (!currentList) {
            currentList = { type: "list", items: [] };
          }
          currentList.items.push({
            text: item,
            segments: parseInlineBold(item), // Add parsed segments for bold support in lists
          });
          return;
        }

        // Quote/Note (> Text)
        if (trimmedLine.startsWith("> ")) {
          if (currentList) {
            sections.push(currentList);
            currentList = null;
          }
          const noteText = trimmedLine.slice(2).trim();
          sections.push({
            type: "note",
            content: noteText,
            segments: parseInlineBold(noteText),
          });
          return;
        }

        // Regular text paragraph
        if (currentList) {
          sections.push(currentList);
          currentList = null;
        }

        // Always create a new text paragraph for separate lines
        sections.push({
          type: "text",
          content: trimmedLine,
          segments: parseInlineBold(trimmedLine), // Add parsed segments for bold support
        });
      });

      // Flush any remaining list
      if (currentList) {
        sections.push(currentList);
      }

      // Flush any unclosed code block
      if (currentCode) {
        sections.push(currentCode);
      }

      return {
        page: index + 1,
        sections,
      };
    });

  return pages;
};

/**
 * Creates a topic from content string
 * @param {string} id - Topic ID (e.g., 'intro-to-c')
 * @param {string} title - Topic title (e.g., 'Introduction to C')
 * @param {string} contentString - Markdown-like content with [PAGE_BREAK] markers
 * @returns {object} Topic object with parsed pages
 */
export const createTopic = (id, title, contentString) => {
  const pages = parseContent(contentString);

  return {
    id,
    title,
    content: pages,
  };
};

/**
 * Creates a lazy-loaded topic metadata without parsing content
 * Content will be loaded only when accessed
 * @param {string} id - Topic ID
 * @param {string} title - Topic title
 * @param {Function} contentLoader - Function that returns the content module
 * @returns {object} Topic metadata with lazy content loader
 */
export const createLazyTopic = (id, title, contentLoader) => {
  return {
    id,
    title,
    _isLazy: true,
    _contentLoader: contentLoader,
    _cachedContent: null,
  };
};

/**
 * Loads content for a lazy topic if not already loaded
 * @param {object} topic - Topic object (may be lazy or eager)
 * @returns {Promise<object>} Resolved topic with content
 */
export const loadTopicContent = async (topic) => {
  // If not a lazy topic, return as is
  if (!topic._isLazy) {
    return topic;
  }

  // If already cached, return cached version
  if (topic._cachedContent) {
    return {
      id: topic.id,
      title: topic.title,
      content: topic._cachedContent,
    };
  }

  // Load content dynamically
  const contentModule = await topic._contentLoader();
  const contentString = contentModule.default;
  const pages = parseContent(contentString);

  // Cache the parsed content
  topic._cachedContent = pages;

  return {
    id: topic.id,
    title: topic.title,
    content: pages,
  };
};

export default { parseContent, createTopic, createLazyTopic, loadTopicContent };
