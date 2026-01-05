const page1 = {
  page: 1,
  title: "Python Modules",
  sections: [
    {
      type: "heading",
      content: "What are Modules?",
    },
    {
      type: "text",
      content:
        "Modules are files containing Python code that you can import and use in your programs.",
    },
    {
      type: "code",
      language: "python",
      content: `import math

result = math.sqrt(16)
print(result)  # Output: 4.0`,
    },
    {
      type: "heading",
      content: "Creating Your Own Module",
    },
    {
      type: "code",
      language: "python",
      content: `# mymodule.py
def greet(name):
    return f"Hello, {name}!"

# main.py
import mymodule
print(mymodule.greet("Alice"))`,
    },
  ],
};

export default page1;
