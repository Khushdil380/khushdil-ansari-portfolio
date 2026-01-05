const page1 = {
  page: 1,
  title: "Pointers in C++",
  sections: [
    {
      type: "heading",
      content: "Understanding Pointers",
    },
    {
      type: "text",
      content:
        "Pointers store memory addresses of variables. They provide powerful ways to work with memory.",
    },
    {
      type: "code",
      language: "cpp",
      content: `int num = 10;
int* ptr = &num;  // Store address of num

cout << *ptr;     // Output: 10 (dereference)
cout << ptr;      // Output: memory address`,
    },
  ],
};

export default page1;
