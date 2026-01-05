const page1 = {
  page: 1,
  title: "C++ Templates",
  sections: [
    {
      type: "heading",
      content: "Generic Programming with Templates",
    },
    {
      type: "text",
      content:
        "Templates allow you to write code that works with any data type.",
    },
    {
      type: "code",
      language: "cpp",
      content: `template <typename T>
T getMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << getMax(5, 10);        // Works with int
    cout << getMax(3.5, 2.1);     // Works with double
    return 0;
}`,
    },
  ],
};

export default page1;
