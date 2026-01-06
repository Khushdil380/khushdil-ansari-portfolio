export const templatesContent = `# C++ Templates

## Generic Programming with Templates

Templates allow you to write code that works with any data type.

\`\`\`cpp
template <typename T>
T getMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << getMax(5, 10);        // Works with int
    cout << getMax(3.5, 2.1);     // Works with double
    return 0;
}
\`\`\`
`;

export default templatesContent;
