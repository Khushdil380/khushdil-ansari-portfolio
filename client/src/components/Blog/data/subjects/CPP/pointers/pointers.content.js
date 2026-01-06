export const pointersContent = `# Pointers in C++

## Understanding Pointers

Pointers store memory addresses of variables. They provide powerful ways to work with memory.

\`\`\`cpp
int num = 10;
int* ptr = &num;  // Store address of num

cout << *ptr;     // Output: 10 (dereference)
cout << ptr;      // Output: memory address
\`\`\`
`;

export default pointersContent;
