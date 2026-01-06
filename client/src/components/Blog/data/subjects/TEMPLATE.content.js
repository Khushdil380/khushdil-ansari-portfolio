/**
 * TEMPLATE: Content File for Blog Topics
 *
 * HOW TO USE THIS TEMPLATE:
 * 1. Copy this file
 * 2. Rename to: your-topic-name.content.js
 * 3. Replace the content between the backticks with your actual content
 * 4. Use [PAGE_BREAK] to split content into multiple pages
 *
 * IMPORTANT RULES:
 * - Always use 'export default' followed by backticks
 * - Content must be a string (template literal with backticks)
 * - Use [PAGE_BREAK] on its own line to create new pages
 * - DO NOT use 'export const' or array format
 *
 * SUPPORTED MARKDOWN SYNTAX:
 * # Main Heading (H1)
 * ## Subheading (H2)
 * ### Smaller Heading (H3)
 *
 * Regular text paragraphs (just write normally)
 *
 * - Bullet point 1
 * - Bullet point 2
 * - Bullet point 3
 *
 * ```language
 * code here
 * ```
 *
 * > Note: This creates a highlighted note/tip box
 *
 * ![Alt text](image-url)
 *
 * [PAGE_BREAK] - Use this to create a new page
 */

export default `
# Your Topic Title

Write your introduction here. This is the first page of your topic.

You can write multiple paragraphs by simply adding text. The system will automatically format it with proper spacing and styling based on your theme.

## Why Learn This?

Explain the importance and benefits of this topic:

- Reason one - explain why it matters
- Reason two - show practical benefits  
- Reason three - connect to real-world usage

> Tip: Use the > symbol at the start of a line to create helpful notes and tips!

## Getting Started

Provide an overview or introduction to the main concepts:

\`\`\`javascript
// Add code examples to illustrate concepts
const example = "Keep examples short and focused";
console.log(example);
\`\`\`

Code blocks support syntax highlighting. Specify the language after the opening triple backticks (javascript, python, java, etc.).

[PAGE_BREAK]

# Section 2: Main Concepts

Introduce the next major concept or section here. Each [PAGE_BREAK] creates a new page that users can navigate through.

## Core Concept 1

Explain the concept in detail. Use clear, simple language that beginners can understand.

\`\`\`python
# Python example
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
\`\`\`

## Core Concept 2

Continue explaining key concepts. Break complex topics into digestible chunks.

### Sub-concept

You can use multiple heading levels to organize your content hierarchically.

> Note: Important information or warnings can be highlighted using blockquotes.

[PAGE_BREAK]

# Section 3: Practical Examples

Show real-world applications and practical examples.

## Example 1: Basic Usage

\`\`\`javascript
// Demonstrate basic usage
function calculateTotal(price, quantity) {
    const total = price * quantity;
    return total;
}

const result = calculateTotal(10, 5);
console.log("Total:", result); // Output: Total: 50
\`\`\`

## Example 2: Advanced Usage

\`\`\`javascript
// Show more advanced patterns
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(item) {
        this.items.push(item);
    }
    
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Book", price: 15 });
console.log("Cart Total:", cart.getTotal());
\`\`\`

> Tip: Provide context for each example so learners understand when and why to use it.

[PAGE_BREAK]

# Section 4: Best Practices

Share best practices and common patterns.

## Do's and Don'ts

**Do:**
- Follow naming conventions
- Write clear, self-documenting code
- Add comments for complex logic
- Test your code thoroughly

**Don't:**
- Use unclear variable names
- Write overly complex code
- Ignore error handling
- Skip documentation

## Common Patterns

\`\`\`javascript
// Pattern 1: Clean and readable
const users = getUsers();
const activeUsers = users.filter(user => user.isActive);

// Pattern 2: Error handling
try {
    const data = await fetchData();
    processData(data);
} catch (error) {
    console.error("Error:", error);
    handleError(error);
}
\`\`\`

[PAGE_BREAK]

# Summary and Next Steps

Wrap up the topic with key takeaways and guidance.

## Key Takeaways

- Main point 1 - reinforce critical concepts
- Main point 2 - highlight what they've learned
- Main point 3 - connect to bigger picture

## Practice Exercises

Suggest exercises for learners to practice:

1. Exercise 1: [Task description]
2. Exercise 2: [Task description]
3. Exercise 3: [Task description]

## Further Learning

Point to additional resources or related topics:

- Related Topic 1
- Related Topic 2
- External resources (books, documentation, tutorials)

> Final Note: Encourage learners and provide motivation for continued learning!
`;
