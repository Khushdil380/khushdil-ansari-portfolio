// Variables in C - Page 1
export default {
  page: 1,
  title: "What are Variables?",
  sections: [
    {
      type: "text",
      content:
        "Variables are containers for storing data values. In C, there are different types of variables defined with different keywords.",
    },
    {
      type: "heading",
      content: "Variable Types",
    },
    {
      type: "list",
      items: [
        "int - stores integers (whole numbers)",
        "float - stores floating point numbers",
        "char - stores single characters",
        "double - stores double precision floating point numbers",
      ],
    },
    {
      type: "code",
      language: "c",
      content: `int myNum = 5;\nfloat myFloatNum = 5.99;\nchar myLetter = 'D';`,
    },
  ],
};
