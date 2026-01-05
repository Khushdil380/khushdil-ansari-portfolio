const page1 = {
  page: 1,
  title: "Python Data Types",
  sections: [
    {
      type: "heading",
      content: "Understanding Data Types",
    },
    {
      type: "text",
      content:
        "Python has several built-in data types that help you store and manipulate different kinds of information.",
    },
    {
      type: "list",
      items: [
        "int - Integer numbers",
        "float - Decimal numbers",
        "str - Text strings",
        "bool - True/False values",
      ],
    },
    {
      type: "code",
      language: "python",
      content: `age = 25          # int
price = 19.99     # float
name = "Alice"    # str
is_active = True  # bool`,
    },
  ],
};

export default page1;
