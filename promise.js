// #5
// A promise is a programming construct in JavaScript that helps us handle asynchronous operations in a more organized and readable way. 
// It represents the eventual completion or failure of an asynchronous task and allows us to attach callbacks to handle the result.

// Imagine you have a task that takes some time to complete, such as fetching data from a server or reading a file. 
// Instead of waiting for the task to finish before moving on to the next line of code, a promise allows you to continue executing other code 
// while waiting for the task to complete. It provides a way to handle the result of the task once it's done.

// A promise can have three states: pending, fulfilled, or rejected. When a promise is pending, it means that the asynchronous task is still running. 
// When the task is completed successfully, the promise becomes fulfilled, and if there's an error during the task, the promise becomes rejected.

// To use a promise, you typically create a new promise object and pass a function that contains the asynchronous task. This function is called the executor function. 
// Inside the executor function, you perform the asynchronous operation, and when it's done, you either call the resolve function to fulfill the promise or 
// the reject function to reject it.

console.log("Start");
const promise = new Promise((resolve, reject) => {
    console.log("Start Function");
    setTimeout(() => {
        resolve({ item: "returning item"});
        // reject(new Error("Error message"));
    },4000);
});
promise.then((item) => {
    console.log(item);
}).catch((err) => {
    console.log(err);
});
console.log("End");

// ans: Start, End, Start Function, {item: "returning item"}