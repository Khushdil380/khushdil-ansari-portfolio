const page2 = {
  page: 2,
  title: "Array Initialization",
  sections: [
    {
      type: "heading",
      content: "Initializing Arrays",
    },
    {
      type: "text",
      content:
        "You can initialize arrays at the time of declaration with values:",
    },
    {
      type: "code",
      language: "c",
      content: `int numbers[5] = {10, 20, 30, 40, 50};
float grades[3] = {85.5, 92.0, 78.5};`,
    },
    {
      type: "heading",
      content: "Accessing Array Elements",
    },
    {
      type: "text",
      content: "Access elements using their index (starting from 0):",
    },
    {
      type: "code",
      language: "c",
      content: `int first = numbers[0];  // Gets 10
int third = numbers[2];  // Gets 30
numbers[4] = 55;         // Changes last element`,
    },
  ],
};

export default page2;
