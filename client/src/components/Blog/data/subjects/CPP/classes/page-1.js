const page1 = {
  page: 1,
  title: "Classes and Objects in C++",
  sections: [
    {
      type: "heading",
      content: "Object-Oriented Programming",
    },
    {
      type: "text",
      content:
        "C++ is an object-oriented language. Classes are blueprints for creating objects.",
    },
    {
      type: "code",
      language: "cpp",
      content: `class Car {
public:
    string brand;
    int year;
    
    void honk() {
        cout << "Beep beep!" << endl;
    }
};

Car myCar;
myCar.brand = "Toyota";
myCar.honk();`,
    },
  ],
};

export default page1;
