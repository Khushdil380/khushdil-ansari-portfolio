export const classesContent = `# Classes and Objects in C++

## Object-Oriented Programming

C++ is an object-oriented language. Classes are blueprints for creating objects.

\`\`\`cpp
class Car {
public:
    string brand;
    int year;
    
    void honk() {
        cout << "Beep beep!" << endl;
    }
};

Car myCar;
myCar.brand = "Toyota";
myCar.honk();
\`\`\`
`;

export default classesContent;
