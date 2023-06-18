// #6 
// Promise.all is a method in JavaScript that takes an iterable (such as an array) of promises and returns a new promise. 
// This new promise resolves when all the input promises in the iterable have resolved, or rejects if any of the input promises reject.

// The Promise.all method is useful when you need to perform multiple asynchronous operations in parallel and wait for all of them to complete before proceeding. 
// It allows you to handle multiple promises as a single unit.

console.log("Start");
const promise_item = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Start Function");
        resolve({ item: "returning item"});
    },4000);
});

const promise_price = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Start Function");
        resolve({ price: "returning price"});
    },4000);
});

Promise.all([promise_item,promise_price]).then((result) => {
    console.log(result);
}).catch((err) => { console.log(err)});

console.log("End");

// ans: Start, End, Start Function, [{item: "returning item"}, Start Function, {price: "returning price"}]
