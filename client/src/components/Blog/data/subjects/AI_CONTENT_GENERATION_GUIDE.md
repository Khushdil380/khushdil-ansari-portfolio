# Blog Content Generation Rules

Generate blog content following these rules exactly:

## File Format

```javascript
export default `
// Content goes here
`;
```

- Use `export default` (NOT `export const`)
- Wrap content in backticks (template literals), NOT quotes
- Content is a string, NOT an array

## Content Elements

**Headings:**

```markdown
# Main Page Title

## Section Heading

### Subsection Heading
```

**Paragraphs:**

- Add ONE blank line between paragraphs for separation

```markdown
First paragraph.

Second paragraph.
```

**Lists:**

```markdown
- Item 1
- Item 2
- Item 3
```

**Code Blocks:**

````markdown
```javascript
const example = "code";
```
````

Languages: javascript, python, java, c, cpp, html, css, sql, bash

**Notes/Tips:**

```markdown
> Tip: Important information
> Note: Warnings and hints
```

**Images:**

```markdown
![Alt text](image-url)
```

**Page Breaks:**

```markdown
[PAGE_BREAK]
```

Must be EXACTLY `[PAGE_BREAK]` (all caps, on its own line)

## Template Structure

```javascript
export default `
# [Topic Title]

[Introduction paragraph]

[Context paragraph]

## [Section Heading]

[Concept explanation]

[Details paragraph]

- Key point 1
- Key point 2
- Key point 3

\`\`\`[language]
// Code example
\`\`\`

> Note: [Tip or warning]

[PAGE_BREAK]

# [Second Page Title]

[Continue content]

## [Section Heading]

[More content and examples]
`;
```

## Output Requirements

- Must start with `export default \``
- Must end with `\`;`
- Use `[PAGE_BREAK]` exactly (all caps) to separate pages
- Add blank lines between paragraphs
- Use triple backticks with language for code blocks
- NO quotes around content, only backticks

---

## User Requirements

**Topic:**

**Subject:**

**Target Audience:**

## **Key Points:**

-
- **Pages:**

  **Additional Notes:**
