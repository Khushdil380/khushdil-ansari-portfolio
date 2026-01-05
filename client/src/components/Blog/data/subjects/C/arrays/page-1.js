const page1 = {
  page: 1,
  title: "Arrays in C - Introduction",
  sections: [
    {
      type: "heading",
      content: "What are Arrays?",
    },
    {
      type: "text",
      content:
        "Arrays store multiple values of the same type in contiguous memory locations. They provide a way to organize and access related data efficiently.",
    },
    {
      type: "heading",
      content: "Declaring Arrays",
    },
    {
      type: "code",
      language: "c",
      content: `int numbers[5];
float prices[10];
char name[20];`,
    },
    {
      type: "list",
      items: [
        "Specify the data type",
        "Give the array a name",
        "Define the size in square brackets",
      ],
    },
  ],
};

export default page1;
