// #3

console.log("Start");
function start() {
    setTimeout(() => {
        console.log("Start Function");
        return { item: "returning item"}
    },4000);
}
const item = start();
console.log(item);
console.log("End");

// ans: Start, undefined, End, Start Function
// In the above example, the program starts by printing Start. Then, the start() function is called, which initiates the setTimeout() function. The setTimeout() function
// is a built-in JavaScript function that executes a callback function after a specified delay. In this case, the callback function is executed after 4 seconds.
// The start() function returns undefined because the setTimeout() function is an asynchronous function. The program then prints End. Finally, the callback function
// is executed, which prints Start Function.

// Callbacks:
// A callback is a function that is passed as an argument to another function. The callback function is executed inside the function it was passed into.
// Callbacks are used to make sure that a function is not executed before another function has finished its execution. It helps in asynchronous programming.
// Callbacks are also known as higher-order functions because they take another function as an argument.
// solution:
console.log("Solution");
console.log("Start");
function start2(callback) {
    setTimeout(() => {
        console.log("Start2 Function");
        callback({ item: "returning item"});
    },4000);
}
start2((item) => {
    console.log(item);
});
console.log("End");

// ans: Start, End, Start Function, { item: "returning item"}
// In the above example, the program starts by printing Start. Then, the start() function is called, which initiates the setTimeout() function. The setTimeout() function
// is a built-in JavaScript function that executes a callback function after a specified delay. In this case, the callback function is executed after 4 seconds.
