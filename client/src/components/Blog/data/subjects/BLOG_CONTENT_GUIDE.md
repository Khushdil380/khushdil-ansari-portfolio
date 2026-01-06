# 📚 Complete Guide: Adding Blog Content

This guide will walk you through adding subjects, topics, and content to your blog system. Follow these steps carefully to ensure your content displays correctly on the UI.

---

## 🎯 Quick Overview

Your blog has a 3-level structure:

```
Subject (e.g., "Python", "JavaScript")
  └── Topic (e.g., "Functions", "Arrays")
      └── Content (Multiple pages with [PAGE_BREAK])
```

---

## 📁 Step 1: Add a New Subject

### 1.1 Create Subject Folder

Create a new folder in: `client/src/components/Blog/data/subjects/`

Example: `client/src/components/Blog/data/subjects/YourSubject/`

### 1.2 Create Subject Index File

Create `index.js` inside your subject folder:

**File:** `client/src/components/Blog/data/subjects/YourSubject/index.js`

```javascript
// YourSubject subject - topics with lazy loading for better performance
import { createLazyTopic } from "../contentParser";

const YourSubject = {
  id: "your-subject", // Must be unique and lowercase
  name: "Your Subject", // Display name (can have spaces/capitals)
  topics: [
    // Add topics here (see Step 2)
  ],
};

export default YourSubject;
```

### 1.3 Register Subject in blogData.js

**File:** `client/src/components/Blog/data/blogData.js`

1. Import your subject at the top:

```javascript
import YourSubject from "./subjects/YourSubject";
```

2. Add it to the `blogData` object:

```javascript
export const blogData = {
  C: C,
  "C++": CPP,
  Java: Java,
  Python: Python,
  DBMS: DBMS,
  OS: OS,
  JavaScript: JavaScript,
  "tech Tutorial": techTutorial,
  "Your Subject": YourSubject, // Add this line
};
```

**✅ Your subject will now appear in the UI subject navigation!**

---

## 📝 Step 2: Add a New Topic to a Subject

### 2.1 Create Topic Folder

Inside your subject folder, create a topic folder:

`client/src/components/Blog/data/subjects/YourSubject/your-topic-name/`

### 2.2 Create Content File

**File:** `client/src/components/Blog/data/subjects/YourSubject/your-topic-name/your-topic-name.content.js`

```javascript
export default `
# Your Topic Title

Write your introduction here. This is the first page.

## Subheading

Your content goes here. You can use markdown-like syntax.

- Bullet point 1
- Bullet point 2
- Bullet point 3

> Note: Add helpful tips using the > symbol

[PAGE_BREAK]

# Second Page Title

This is page 2. Use [PAGE_BREAK] to separate pages.

\`\`\`javascript
// Add code examples
const example = "Your code here";
console.log(example);
\`\`\`

## More Sections

Continue adding content as needed.

[PAGE_BREAK]

# Third Page

And so on...
`;
```

### 2.3 Register Topic in Subject Index

**File:** `client/src/components/Blog/data/subjects/YourSubject/index.js`

Add your topic using `createLazyTopic`:

```javascript
import { createLazyTopic } from "../contentParser";

const YourSubject = {
  id: "your-subject",
  name: "Your Subject",
  topics: [
    createLazyTopic(
      "your-topic-id", // Unique ID (lowercase, use hyphens)
      "Your Topic Display Name", // What users see
      () => import("./your-topic-name/your-topic-name.content")
    ),
    // Add more topics below...
  ],
};
```

**✅ Your topic will now appear in the sidebar and be lazy loaded!**

---

## ✍️ Step 3: Writing Content

### 3.1 Content File Format

Always use this structure:

```javascript
export default `
Content goes here in a template literal (backticks)
`;
```

**⚠️ IMPORTANT:**

- Use **backticks** `` ` `` (not quotes)
- Use `export default` (not `export const`)
- Content must be a **string**, not an array

### 3.2 Markdown Syntax Support

#### Headings

```markdown
# Main Heading (Page Title)

## Subheading

### Smaller Heading
```

#### Text Paragraphs

Just write normal text. Each paragraph is separated by blank lines.

#### Lists

```markdown
- Unordered item 1
- Unordered item 2
- Unordered item 3
```

#### Code Blocks

````markdown
```javascript
const code = "Your code here";
console.log(code);
```

```python
def hello():
    print("Hello World")
```
````

#### Quotes/Notes

```markdown
> Tip: This creates a highlighted note box
> Use this for important information
```

#### Images

```markdown
![Alt text](image-url)
```

#### Page Breaks

```markdown
[PAGE_BREAK]
```

Use this to split content into multiple pages.

### 3.3 Content Examples

**Simple Topic (1 Page):**

```javascript
export default `
# Introduction to Variables

Variables are containers for storing data values. In programming, you use variables to store information that your program needs to work with.

## Declaring Variables

Different languages have different syntax:

\`\`\`javascript
let name = "John";
const age = 25;
\`\`\`

\`\`\`python
name = "John"
age = 25
\`\`\`

> Note: Use meaningful variable names for better code readability.
`;
```

**Multi-Page Topic:**

```javascript
export default `
# Functions - Introduction

Functions are reusable blocks of code that perform specific tasks.

## Why Use Functions?

- Code reusability
- Better organization
- Easier debugging
- Modularity

[PAGE_BREAK]

# Creating Functions

Let's learn how to create functions in different languages.

## JavaScript Functions

\`\`\`javascript
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("World"));
\`\`\`

## Python Functions

\`\`\`python
def greet(name):
    return f"Hello, {name}"

print(greet("World"))
\`\`\`

[PAGE_BREAK]

# Function Parameters

Functions can accept parameters to make them more flexible.

## Multiple Parameters

\`\`\`javascript
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Output: 8
\`\`\`

> Tip: Use descriptive parameter names to make your functions self-documenting.
`;
```

---

## 🔄 Complete Workflow Example

Let's add a complete "React" subject with a "Hooks" topic:

### Step 1: Create Folder Structure

```
subjects/
  └── React/
      ├── index.js
      └── hooks/
          └── hooks.content.js
```

### Step 2: Create hooks.content.js

**File:** `subjects/React/hooks/hooks.content.js`

```javascript
export default `
# React Hooks

Hooks are functions that let you use state and other React features in functional components.

## useState Hook

The most commonly used hook for managing state.

\`\`\`javascript
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}
\`\`\`

> Note: Hooks must be called at the top level of your component.

[PAGE_BREAK]

# useEffect Hook

Used for side effects like data fetching, subscriptions, or DOM manipulation.

\`\`\`javascript
import { useEffect, useState } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/data')
            .then(res => res.json())
            .then(data => setData(data));
    }, []); // Empty array means run once on mount

    return <div>{data}</div>;
}
\`\`\`

## Dependency Array

- `[]` - Run once on mount
- `[value]` - Run when value changes
- No array - Run on every render
`;
```

### Step 3: Create React index.js

**File:** `subjects/React/index.js`

```javascript
import { createLazyTopic } from "../contentParser";

const React = {
  id: "react",
  name: "React",
  topics: [
    createLazyTopic("react-hooks", "React Hooks", () =>
      import("./hooks/hooks.content")
    ),
  ],
};

export default React;
```

### Step 4: Register in blogData.js

**File:** `data/blogData.js`

```javascript
import React from "./subjects/React";

export const blogData = {
  // ... existing subjects
  React: React, // Add this
};
```

**🎉 Done! Your React subject with Hooks topic is now live!**

---

## 🐛 Troubleshooting

### Content Not Showing

**Problem:** "Select a topic to view content" appears

**Solutions:**

1. Check file path in `createLazyTopic` matches actual file location
2. Ensure content file uses `export default` (not `export const`)
3. Verify content is wrapped in backticks `` ` ``
4. Check browser console for import errors

### Topic Not Appearing in Sidebar

**Solutions:**

1. Verify topic is added to subject's `topics` array
2. Check that topic ID is unique
3. Ensure subject is registered in `blogData.js`

### Page Breaks Not Working

**Solution:**

- Use exact syntax: `[PAGE_BREAK]` (all caps, no spaces)
- Must be on its own line

### Code Blocks Not Formatting

**Solution:**

- Use triple backticks with language: ````javascript`
- Escape backticks in content: `\`\`\``

---

## ✅ Checklist for Adding New Content

- [ ] Created subject folder (if new subject)
- [ ] Created `index.js` for subject
- [ ] Registered subject in `blogData.js`
- [ ] Created topic folder
- [ ] Created `.content.js` file with proper format
- [ ] Added topic using `createLazyTopic` in subject index
- [ ] Content uses `export default`
- [ ] Content wrapped in backticks
- [ ] Tested in browser

---

## 📌 Important Rules

1. **Always use lazy loading** with `createLazyTopic`
2. **File naming:** Use `topic-name.content.js` format
3. **Content format:** Must be `export default \`...\``
4. **IDs:** Must be unique, lowercase, use hyphens
5. **Page breaks:** Use `[PAGE_BREAK]` to separate pages

---

## 💡 Tips for Better Content

1. **Structure:** Start with overview, then dive into details
2. **Code examples:** Include practical, working code
3. **Notes:** Use `>` for important tips and warnings
4. **Length:** Keep pages focused - 1-2 concepts per page
5. **Consistency:** Follow the same pattern across topics

---

## 🚀 Performance Benefits

Using `createLazyTopic`:

- ✅ Faster initial page load
- ✅ Content loads only when viewed
- ✅ Cached after first load
- ✅ Can handle thousands of blog posts
- ✅ No manual optimization needed

---

## 📞 Need Help?

If you encounter issues:

1. Check browser console (F12)
2. Verify file paths are correct
3. Ensure all imports/exports are correct
4. Review this guide carefully

Happy blogging! 🎉
