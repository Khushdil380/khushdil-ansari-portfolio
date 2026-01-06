export default `
# Asynchronous Programming in JavaScript

Asynchronous programming allows JavaScript to perform long-running operations without blocking the execution of other code.

## Promises

Promises represent the eventual completion (or failure) of an asynchronous operation.

\`\`\`javascript
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data loaded');
        }, 1000);
    });
};

fetchData().then(data => console.log(data));
\`\`\`

## Async/Await

Async/await provides a cleaner syntax for working with promises.

\`\`\`javascript
async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

## Key Concepts

- Callbacks
- Promises
- Async/Await
- Event Loop

> Note: Content for async-programming will be expanded here.
`;
