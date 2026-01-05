/**
 * Content Parser for Blog Topics
 * Converts markdown-like content files into structured page data
 *
 * Supported markers:
 * [PAGE_BREAK] - Splits content into multiple pages
 * # Heading - Creates a heading section
 * ## Subheading - Creates a subheading section
 * ![alt](url) - Creates an image section
 * - List item - Creates list items (consecutive items become one list)
 * ``` code ``` - Creates code blocks
 * > Quote - Creates quote/note sections
 * Regular text - Creates text paragraphs
 */

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
          sections.push({
            type: "heading",
            content: trimmedLine.slice(2).trim(),
          });
          return;
        }

        // Subheading (## Subheading)
        if (trimmedLine.startsWith("## ")) {
          if (currentList) {
            sections.push(currentList);
            currentList = null;
          }
          sections.push({
            type: "subheading",
            content: trimmedLine.slice(3).trim(),
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
          currentList.items.push(item);
          return;
        }

        // Quote/Note (> Text)
        if (trimmedLine.startsWith("> ")) {
          if (currentList) {
            sections.push(currentList);
            currentList = null;
          }
          sections.push({
            type: "note",
            content: trimmedLine.slice(2).trim(),
          });
          return;
        }

        // Regular text paragraph
        if (currentList) {
          sections.push(currentList);
          currentList = null;
        }

        // Check if previous section is text and append to it
        const lastSection = sections[sections.length - 1];
        if (lastSection && lastSection.type === "text") {
          lastSection.content += " " + trimmedLine;
        } else {
          sections.push({
            type: "text",
            content: trimmedLine,
          });
        }
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

export default { parseContent, createTopic };
