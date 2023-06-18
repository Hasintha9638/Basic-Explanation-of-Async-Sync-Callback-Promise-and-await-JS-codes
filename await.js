// #7
// In JavaScript, the await keyword is used in an async function to pause the execution of the function until a promise is resolved or rejected. 
// It allows you to write asynchronous code that looks and behaves more like synchronous code, making it easier to work with promises.

// Here are a few reasons why we use await:

//     Simplified Asynchronous Code: By using await, you can write asynchronous code in a more sequential and readable manner. 
//     It eliminates the need for chaining .then() methods or using callbacks, which can result in deeply nested and complex code structures.

//     Handling Promises: When await is used with a promise, it waits for the promise to settle (either resolve or reject) and then returns the resolved value or 
//     throws an error if the promise is rejected. This allows you to work with the result of the promise directly, as if it were a synchronous operation.

//     Error Handling: When an await expression is used within a try...catch block, any error thrown by the promise is caught, allowing you to handle errors in a 
//     structured and consistent manner. This makes it easier to handle and propagate errors within your asynchronous code.

//     Synchronization: The await keyword ensures that the code following it is not executed until the awaited promise is settled. 
//     This can be useful in scenarios where you need to perform multiple asynchronous operations sequentially or when you depend on the result of a previous asynchronous operation before proceeding.

// It's important to note that the use of await is only valid inside an async function. When encountering an await expression, the function is temporarily paused, 
// allowing other code to run in the meantime. Once the awaited promise is settled, the function resumes execution.

// Overall, the await keyword enhances the readability, error handling, and synchronization of asynchronous code, making it easier to work with promises and write 
// more maintainable JavaScript applications.


console.log("Start");
function getId(id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Get Id");
            resolve({ id: 10 });
        },3000);
    });
}

function getAll(item_id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Get All Prcies");
            resolve({ prices: [150,250,200] });
        },3000);
    });
}

async function display()  {
    const id = await getId(1);
    const all = await getAll(id.id);
    console.log(all);
}
display();
console.log("End");

// ans: Start, End, Get Id, Get All Prices, {prices: [150,250,200]}