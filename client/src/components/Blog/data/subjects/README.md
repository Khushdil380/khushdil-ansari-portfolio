# Blog Content System - Quick Start Guide

## 🎯 Overview

This blog system uses **markdown-like syntax** with automatic styling. Write content naturally - all formatting, theming, and responsiveness is handled automatically!

---

## 📁 File Structure

```
Blog/data/subjects/
├── contentParser.js          # Parser engine (don't modify)
├── TEMPLATE.content.js       # Copy this for new topics
│
├── Python/
│   ├── index.js                    # Subject index
│   ├── functions.content.js        # Content file
│   └── functions.js                # Topic wrapper
│
├── DBMS/
│   ├── index.js
│   ├── intro-to-databases.content.js
│   └── intro-to-databases.js
│
└── [YourSubject]/
    ├── index.js
    ├── [topic].content.js          # Your content here
    └── [topic].js                  # Topic wrapper
```

---

## ⚡ Quick Start (3 Steps)

### Step 1: Create Content File

Copy `TEMPLATE.content.js` and write your content:

**File**: `subjects/YourSubject/my-topic.content.js`

```javascript
export default `
# Introduction to My Topic

Write your content naturally here. This is a regular paragraph.

## First Section

- Bullet point one
- Bullet point two
- Bullet point three

## Code Example

\`\`\`javascript
function example() {
  console.log("Hello World");
}
\`\`\`

> Tip: Use notes for important information!

[PAGE_BREAK]

# Page 2 Heading

Use [PAGE_BREAK] to split content into multiple pages.

## More Content

Continue writing...
`;
```

**IMPORTANT**: Code blocks must use escaped backticks `\`\`\`` (with backslashes) inside the template literal!

### Step 2: Create Topic Wrapper

**File**: `subjects/YourSubject/my-topic.js`

```javascript
import { createTopic } from "../contentParser";
import content from "./my-topic.content";

export default createTopic(
  "my-topic", // Unique ID
  "My Topic Title", // Display name
  content // Your content
);
```

### Step 3: Register in Subject Index

**File**: `subjects/YourSubject/index.js`

```javascript
import myTopic from "./my-topic";

export default {
  id: "your-subject",
  name: "Your Subject",
  topics: [myTopic], // Add your topic here
};
```

**Done!** 🎉 Your content is now live.

---

## 📝 Content Syntax Cheat Sheet

| Element          | Syntax                     | Example                             |
| ---------------- | -------------------------- | ----------------------------------- |
| **Main Heading** | `# Text`                   | `# Introduction`                    |
| **Subheading**   | `## Text`                  | `## Getting Started`                |
| **Paragraph**    | Plain text                 | `This is a paragraph.`              |
| **List**         | `- Item` or `* Item`       | `- First point`                     |
| **Code Block**   | `\`\`\`lang\ncode\n\`\`\`` | `\`\`\`python\nprint("Hi")\n\`\`\`` |
| **Image**        | `![alt](url)`              | `![Logo](logo.png)`                 |
| **Note/Tip**     | `> Text`                   | `> Tip: Remember this!`             |
| **Page Break**   | `[PAGE_BREAK]`             | `[PAGE_BREAK]`                      |

---

## 🎨 Auto-Styled Components

Everything is automatically styled - you just write content!

✅ **Headings** - Theme-colored, properly sized, great hierarchy  
✅ **Text** - Perfect readability, line height, spacing  
✅ **Lists** - Clean bullets, proper indentation  
✅ **Code** - Monospace, scrollable, background color  
✅ **Images** - Responsive, rounded, shadow effects  
✅ **Notes** - Highlighted boxes with accent borders

**Light & Dark Mode** - All components adapt automatically!  
**Mobile Responsive** - Perfect on all screen sizes!

---

## ⚠️ Critical: Escaping Backticks

Since `.content.js` files use JavaScript template literals (wrapped in backticks), **code blocks must use escaped backticks**:

### ✅ Correct:

```javascript
export default `
# Code Example

\`\`\`javascript
const x = 5;
\`\`\`
`;
```

### ❌ Wrong:

````javascript
export default `
# Code Example

```javascript  ← This will cause syntax errors!
const x = 5;
````

`;

````

**Always use** `\`\`\`` (with backslash) for code blocks inside your content!

---

## 📚 Supported Code Languages

- `javascript` - JavaScript
- `python` - Python
- `java` - Java
- `c` - C
- `cpp` - C++
- `html` - HTML
- `css` - CSS
- `bash` - Shell/Bash
- `sql` - SQL
- `json` - JSON

---

## 💡 Best Practices

### Content Writing
1. **One Concept Per Page** - Use `[PAGE_BREAK]` to split long content
2. **Clear Headings** - Start each page with `#`, organize with `##`
3. **Short Examples** - Keep code snippets focused and concise
4. **Use Lists** - Great for steps, features, key points
5. **Highlight Important Info** - Use `>` for tips, warnings, notes

### File Organization
1. **Descriptive Names** - `intro-to-python.content.js`, not `topic1.content.js`
2. **One Topic Per File** - Don't combine multiple topics
3. **Consistent Structure** - Follow the same pattern for all topics
4. **Test Content** - Preview in both light and dark themes

### Code Examples
1. **Always Specify Language** - `\`\`\`javascript` not just `\`\`\``
2. **Add Comments** - Explain what the code does
3. **Keep It Simple** - Focus on teaching one thing at a time
4. **Use Real Examples** - Practical, working code

---

## 🔧 Troubleshooting

### Problem: Content Not Showing
- ✓ Check `.content.js` file has `export default \`...\``
- ✓ Verify topic imported in subject's `index.js`
- ✓ Check console for JavaScript syntax errors

### Problem: Syntax Errors in Browser Console
- ✓ Code blocks must use `\`\`\`` not ``` inside template literals
- ✓ Ensure closing backtick and semicolon at end: `\`;`

### Problem: Pages Not Splitting
- ✓ `[PAGE_BREAK]` must be on its own line
- ✓ No extra spaces: exactly `[PAGE_BREAK]`

### Problem: Code Block Not Formatting
- ✓ Triple backticks: `\`\`\`language`
- ✓ Specify language after opening backticks
- ✓ Close with `\`\`\`` on new line

---

## 🚀 Example: Complete Topic

Here's a complete working example:

**File**: `subjects/JavaScript/arrays.content.js`

```javascript
export default `
# JavaScript Arrays

Arrays store multiple values in a single variable.

## Creating Arrays

\`\`\`javascript
const fruits = ["Apple", "Banana", "Orange"];
const numbers = [1, 2, 3, 4, 5];
\`\`\`

## Array Properties

- Zero-based indexing (first element is [0])
- Dynamic sizing (can grow or shrink)
- Can store mixed data types

> Tip: Use array literal notation [] instead of new Array()

[PAGE_BREAK]

# Array Methods

JavaScript provides powerful methods for working with arrays.

## Adding/Removing Elements

- push() - Add to end
- pop() - Remove from end
- shift() - Remove from start
- unshift() - Add to start

\`\`\`javascript
const fruits = ["Apple"];

fruits.push("Banana");     // ["Apple", "Banana"]
fruits.pop();              // ["Apple"]
\`\`\`

[PAGE_BREAK]

# Iterating Arrays

## Using forEach()

\`\`\`javascript
const numbers = [1, 2, 3];

numbers.forEach(num => {
  console.log(num);
});
\`\`\`

## Using map()

Creates a new array by transforming each element:

\`\`\`javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);
// Result: [2, 4, 6]
\`\`\`

> Note: map() doesn't modify the original array!
`;
````

**File**: `subjects/JavaScript/arrays.js`

```javascript
import { createTopic } from "../contentParser";
import content from "./arrays.content";

export default createTopic("arrays", "JavaScript Arrays", content);
```

**File**: `subjects/JavaScript/index.js`

```javascript
import arrays from "./arrays";

export default {
  id: "javascript",
  name: "JavaScript",
  topics: [arrays],
};
```

---

## 📦 System Benefits

### For Content Creators:

✅ Write content faster - no JSX or component code  
✅ Focus on teaching - styling is automatic  
✅ Easy organization - one file per topic  
✅ Simple updates - just edit the content string  
✅ Page management - split with one marker

### For Users:

✅ Consistent design across all topics  
✅ Optimized readability and typography  
✅ Perfect dark/light mode support  
✅ Mobile-friendly on all devices  
✅ Fast loading and rendering

---

## 📘 Additional Resources

- **TEMPLATE.content.js** - Pre-formatted template to copy for new topics
- **contentParser.js** - The parser source code (for advanced customization)

---

**Ready to add content? Copy TEMPLATE.content.js and start writing!** 🎉
