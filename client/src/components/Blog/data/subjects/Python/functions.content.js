export default `
# Python Functions

A function is a block of code that only runs when it is called. You can pass data, known as parameters, into a function. A function can return data as a result.

## Creating a Function

In Python, a function is defined using the def keyword:

\`\`\`python
def greet():
    print("Hello, World!")
\`\`\`

## Calling a Function

To call a function, use the function name followed by parentheses:

\`\`\`python
def greet():
    print("Hello, World!")

greet()  # Output: Hello, World!
\`\`\`

> Tip: Function names should be descriptive and follow Python naming conventions (lowercase with underscores).

[PAGE_BREAK]

# Function Parameters

Information can be passed into functions as parameters. Parameters are specified inside the parentheses, after the function name.

## Single Parameter

\`\`\`python
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")  # Output: Hello, Alice!
greet_person("Bob")    # Output: Hello, Bob!
\`\`\`

## Multiple Parameters

You can add as many parameters as you want, separated by commas:

\`\`\`python
def introduce(name, age, city):
    print(f"My name is {name}")
    print(f"I am {age} years old")
    print(f"I live in {city}")

introduce("Alice", 25, "New York")
\`\`\`

> Note: The number of arguments must match the number of parameters!

[PAGE_BREAK]

# Return Values

To let a function return a value, use the return statement:

\`\`\`python
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(result)  # Output: 8
\`\`\`

## Multiple Return Values

Python functions can return multiple values using tuples:

\`\`\`python
def calculate(a, b):
    sum_result = a + b
    difference = a - b
    product = a * b
    return sum_result, difference, product

sum_val, diff_val, prod_val = calculate(10, 5)
print(f"Sum: {sum_val}")        # Sum: 15
print(f"Difference: {diff_val}") # Difference: 5
print(f"Product: {prod_val}")    # Product: 50
\`\`\`

[PAGE_BREAK]

# Default Parameters

You can provide default values for parameters. If the caller doesn't provide a value, the default is used:

\`\`\`python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")              # Output: Hello, Alice!
greet("Bob", "Hi")          # Output: Hi, Bob!
greet("Charlie", "Hey")     # Output: Hey, Charlie!
\`\`\`

## Keyword Arguments

You can specify arguments by parameter name, allowing you to skip or reorder parameters:

\`\`\`python
def introduce(name, age, city):
    print(f"{name}, {age}, {city}")

# Normal order
introduce("Alice", 25, "NYC")

# Using keyword arguments
introduce(city="Boston", name="Bob", age=30)

# Mix of both
introduce("Charlie", city="LA", age=28)
\`\`\`

> Tip: Use keyword arguments for better code readability!

[PAGE_BREAK]

# Advanced Function Concepts

## *args - Variable Number of Arguments

Use *args to accept any number of positional arguments:

\`\`\`python
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))        # Output: 6
print(sum_all(1, 2, 3, 4, 5))  # Output: 15
\`\`\`

## **kwargs - Keyword Arguments

Use **kwargs to accept any number of keyword arguments:

\`\`\`python
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="NYC")
# Output:
# name: Alice
# age: 25
# city: NYC
\`\`\`

[PAGE_BREAK]

# Lambda Functions

Lambda functions are small anonymous functions defined with the lambda keyword:

\`\`\`python
# Regular function
def square(x):
    return x ** 2

# Lambda equivalent
square = lambda x: x ** 2

print(square(5))  # Output: 25
\`\`\`

## Common Use Cases

Lambda functions are often used with map(), filter(), and sorted():

\`\`\`python
# Using with map()
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Using with filter()
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 4]

# Using with sorted()
pairs = [(1, 'one'), (3, 'three'), (2, 'two')]
sorted_pairs = sorted(pairs, key=lambda x: x[0])
print(sorted_pairs)  # [(1, 'one'), (2, 'two'), (3, 'three')]
\`\`\`

> Note: Use lambda for simple operations; use regular functions for complex logic!

[PAGE_BREAK]

# Best Practices

## Function Guidelines

- Keep functions small and focused (do one thing well)
- Use descriptive function names
- Add docstrings to document your functions
- Avoid side effects when possible
- Return values instead of printing

## Example with Docstring

\`\`\`python
def calculate_area(length, width):
    """
    Calculate the area of a rectangle.
    
    Args:
        length (float): The length of the rectangle
        width (float): The width of the rectangle
    
    Returns:
        float: The area of the rectangle
    """
    return length * width

# Access docstring
print(calculate_area.__doc__)
\`\`\`

## Common Mistakes to Avoid

- Don't use mutable default arguments (like lists or dictionaries)
- Don't modify global variables inside functions
- Don't return different types from the same function
- Don't write functions that are too long or complex

> Tip: Follow the Single Responsibility Principle - each function should do one thing!
`;
