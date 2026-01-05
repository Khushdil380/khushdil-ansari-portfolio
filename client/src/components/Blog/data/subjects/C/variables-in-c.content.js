export default `
# Variables in C

Variables are containers for storing data values. In C, each variable must be declared with a specific data type.

## Declaring Variables

To create a variable, you must specify the type and assign it a value:

\`\`\`c
int myNum = 15;
float myFloat = 5.99;
char myLetter = 'D';
\`\`\`

> Note: In C, you must declare the variable type before you can use it!

## Variable Types

C has several basic data types for variables:

- int - Stores integers (whole numbers), without decimals
- float - Stores floating point numbers, with decimals
- char - Stores single characters
- double - Stores large floating point numbers

[PAGE_BREAK]

# Variable Naming Rules

## Valid Names

A variable name can contain letters, digits, and underscores:

\`\`\`c
int myAge = 25;
int my_age = 25;
int myAge2 = 25;
\`\`\`

## Important Rules

- Names are case-sensitive (age and Age are different variables)
- Names must begin with a letter or underscore
- Names cannot contain spaces or special characters
- Reserved words (like int, float, return) cannot be used as names

> Tip: Use descriptive names to make your code more readable!

[PAGE_BREAK]

# Multiple Variables

## Declaring Multiple Variables

You can declare multiple variables of the same type in one line:

\`\`\`c
int x = 5, y = 10, z = 15;
\`\`\`

## Assigning Same Value

You can also assign the same value to multiple variables:

\`\`\`c
int x, y, z;
x = y = z = 50;
\`\`\`

[PAGE_BREAK]

# Constants

If you don't want others (or yourself) to change variable values, use the const keyword:

\`\`\`c
const int minutesPerHour = 60;
const float PI = 3.14;
\`\`\`

> Warning: When you declare a constant variable, it must be assigned a value at declaration!

## Why Use Constants?

- Prevents accidental modification of values
- Makes code more readable and maintainable
- Helps prevent bugs in your program

## Example

\`\`\`c
const int daysInWeek = 7;
// daysInWeek = 8;  // This will cause an error!
\`\`\`
`;
