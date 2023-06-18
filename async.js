// #2
// Asynchronous Programming:
// In asynchronous programming, tasks can start and run independently of each other. It follows a non-blocking approach, allowing multiple tasks to execute concurrently.
// It enables a program to initiate a task and move on to the next one without waiting for the completion of the previous task.

// Example:
// Let's consider the same example of reading data from a file, performing calculations, and displaying the result. In asynchronous programming,
// the program can initiate the file reading task and continue with other tasks without waiting for the reading to complete. Once the file reading is finished,
// the program can move on to perform calculations and display the result. 
// Asynchronous programming allows for efficient utilization of resources and can improve the overall performance of the program.

console.log("Start");

function start() {
    // this async function will be executed after 4 seconds
    setTimeout(() => {
        console.log("Start Function");
    }, 4000);
}

start();
console.log("End");

// ans: Start, End, Start Function
// In the above example, the program starts by printing Start. Then, the start() function is called, which initiates the setTimeout() function. The setTimeout() function
// is a built-in JavaScript function that executes a callback function after a specified delay. In this case, the callback function is executed after 4 seconds.

// Example of asynchronous function:
// setTimeout() function , setInterval() function, fetch() function, XMLHttpRequest() function, readFile() function, writeFile() function, etc.
// Example of synchronous function:
// alert() function, prompt() function, confirm() function, etc.
