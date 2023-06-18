// #1
// Synchronous Programming:
// In synchronous programming, tasks are executed one after another in a sequential manner. It follows a blocking approach, meaning that each task must wait
// for the previous task to complete before it can start. Imagine a queue where each task has to wait for its turn. The next task can only proceed once the
// previous task finishes.

// Example:
// Suppose you have a program that needs to read data from a file, perform some calculations on the data, and then display the result. In synchronous programming,
// the program will read the file, wait for the reading to finish, perform the calculations, and finally display the result. Each step must complete before moving 
// on to the next.


console.log("Start");
function start() {
    console.log("Start Function");
}
start();
console.log("End");


// ans: Start, Start Function, End
// In the above example, the program starts by printing Start. Then, the start() function is called, which prints Start Function. Finally, the program prints End.