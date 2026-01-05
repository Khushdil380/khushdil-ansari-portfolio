const page1 = {
  page: 1,
  title: "Control Flow in Python",
  sections: [
    {
      type: "heading",
      content: "Conditional Statements",
    },
    {
      type: "text",
      content:
        "Control flow allows your program to make decisions and execute different code based on conditions.",
    },
    {
      type: "code",
      language: "python",
      content: `if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")`,
    },
    {
      type: "heading",
      content: "Loops",
    },
    {
      type: "text",
      content: "Loops let you repeat code multiple times.",
    },
    {
      type: "code",
      language: "python",
      content: `for i in range(5):
    print(i)

while count < 10:
    count += 1`,
    },
  ],
};

export default page1;
