# Blog Data Structure - How to Add Content

This blog system uses a **modular file structure** to make it easy to add unlimited subjects, topics, and content pages.

## 📁 Folder Structure

```
data/
└── subjects/
    ├── C/
    │   ├── index.js               (Subject aggregator)
    │   ├── intro-to-c.js          (Topic file)
    │   ├── intro-to-c-page1.js    (Page content)
    │   ├── intro-to-c-page2.js    (Page content)
    │   ├── variables-in-c.js      (Another topic)
    │   └── variables-in-c-page1.js
    ├── CPP/
    │   └── index.js
    ├── Java/
    │   └── index.js
    └── Python/
        └── index.js
```

## 🚀 How to Add New Content

### 1️⃣ Adding a New Subject

1. Create a new folder in `subjects/` with your subject name:

   ```
   subjects/YourSubject/
   ```

2. Create an `index.js` file in that folder:

   ```javascript
   // subjects/YourSubject/index.js
   import topic1 from "./topic1";
   import topic2 from "./topic2";

   const YourSubject = {
     id: "your-subject",
     name: "Your Subject",
     topics: [topic1, topic2],
   };

   export default YourSubject;
   ```

3. Import and add to `blogData.js`:

   ```javascript
   import YourSubject from "./subjects/YourSubject";

   export const blogData = {
     C: C,
     "Your Subject": YourSubject, // Add here
     // ...
   };
   ```

### 2️⃣ Adding a New Topic

1. Create page files for your topic:

   ```javascript
   // subjects/YourSubject/my-topic-page1.js
   const page1 = {
     page: 1,
     title: "Page 1 Title",
     sections: [
       {
         type: "heading",
         content: "Main Heading",
       },
       {
         type: "text",
         content: "Your text content here...",
       },
     ],
   };

   export default page1;
   ```

2. Create a topic file that imports all pages:

   ```javascript
   // subjects/YourSubject/my-topic.js
   import page1 from "./my-topic-page1";
   import page2 from "./my-topic-page2";

   const myTopic = {
     id: "my-topic",
     title: "My Topic Title",
     content: [page1, page2],
   };

   export default myTopic;
   ```

3. Import the topic in `index.js`:

   ```javascript
   import myTopic from "./my-topic";

   const YourSubject = {
     id: "your-subject",
     name: "Your Subject",
     topics: [
       myTopic, // Add here
     ],
   };
   ```

### 3️⃣ Adding a New Page to Existing Topic

1. Create a new page file:

   ```javascript
   // subjects/C/intro-to-c-page3.js
   const page3 = {
     page: 3,
     title: "Page 3 Title",
     sections: [
       // Your sections here
     ],
   };

   export default page3;
   ```

2. Import it in the topic file:

   ```javascript
   // subjects/C/intro-to-c.js
   import page1 from "./intro-to-c-page1";
   import page2 from "./intro-to-c-page2";
   import page3 from "./intro-to-c-page3"; // Add import

   const introToC = {
     id: "intro-to-c",
     title: "Introduction to C",
     content: [page1, page2, page3], // Add to array
   };
   ```

## 📝 Section Types

You can use these section types in your content:

### 1. Text

```javascript
{
  type: "text",
  content: "Your paragraph text here..."
}
```

### 2. Heading

```javascript
{
  type: "heading",
  content: "Your Heading Text"
}
```

### 3. List

```javascript
{
  type: "list",
  items: [
    "First item",
    "Second item",
    "Third item"
  ]
}
```

### 4. Code

```javascript
{
  type: "code",
  language: "c",  // or "cpp", "java", "python", etc.
  content: `#include <stdio.h>
int main() {
    printf("Hello World");
    return 0;
}`
}
```

## ✅ Complete Example

Here's a complete example of adding a new "Data Structures" subject:

**Step 1:** Create `subjects/DataStructures/arrays-page1.js`

```javascript
const page1 = {
  page: 1,
  title: "Introduction to Arrays",
  sections: [
    {
      type: "heading",
      content: "What is an Array?",
    },
    {
      type: "text",
      content:
        "An array is a collection of elements stored at contiguous memory locations.",
    },
    {
      type: "code",
      language: "c",
      content: `int arr[5] = {1, 2, 3, 4, 5};`,
    },
  ],
};

export default page1;
```

**Step 2:** Create `subjects/DataStructures/arrays.js`

```javascript
import page1 from "./arrays-page1";

const arrays = {
  id: "arrays",
  title: "Arrays",
  content: [page1],
};

export default arrays;
```

**Step 3:** Create `subjects/DataStructures/index.js`

```javascript
import arrays from "./arrays";

const DataStructures = {
  id: "data-structures",
  name: "Data Structures",
  topics: [arrays],
};

export default DataStructures;
```

**Step 4:** Update `blogData.js`

```javascript
import DataStructures from "./subjects/DataStructures";

export const blogData = {
  C: C,
  "Data Structures": DataStructures,
  // ...
};
```

## 🎯 Benefits of This Structure

✅ **Easy to Scale**: Add unlimited subjects, topics, and pages  
✅ **Organized**: Each file has a single responsibility  
✅ **Maintainable**: Easy to find and update specific content  
✅ **Modular**: Import only what you need  
✅ **Version Control**: Small, focused files are easier to track in git

## 💡 Tips

- Keep page files focused on a single concept
- Use meaningful file names (e.g., `variables-in-c-page1.js`)
- Maintain consistent naming: `topic-name-page1.js`, `topic-name-page2.js`
- Test your content after adding it
- Page numbers should start from 1 and be sequential
