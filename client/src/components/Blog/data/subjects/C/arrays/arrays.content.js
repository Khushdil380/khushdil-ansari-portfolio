export default `
# Arrays in C - Introduction

## What are Arrays?

Arrays store multiple values of the same type in contiguous memory locations. They provide a way to organize and access related data efficiently.

## Declaring Arrays

\`\`\`c
int numbers[5];
float prices[10];
char name[20];
\`\`\`

- Specify the data type
- Give the array a name
- Define the size in square brackets

[PAGE_BREAK]

# Array Initialization

## Initializing Arrays

You can initialize arrays at the time of declaration with values:

\`\`\`c
int numbers[5] = {10, 20, 30, 40, 50};
float grades[3] = {85.5, 92.0, 78.5};
\`\`\`

## Accessing Array Elements

Access elements using their index (starting from 0):

\`\`\`c
int first = numbers[0];  // Gets 10
int third = numbers[2];  // Gets 30
numbers[4] = 55;         // Changes last element
\`\`\`
`;
