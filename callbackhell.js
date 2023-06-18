// #4
// Callback hell is a situation in programming where we have a lot of functions that depend on each other, 
// and we need to use callback functions to handle the results of those functions. It can make the code look like a "pyramid of doom" with many nested callbacks, 
// and it becomes difficult to understand and work with.

// Imagine you have a task to do, but before you can complete it, you need to wait for another task to finish. 
// And that task also depends on another task, which in turn depends on another task, and so on. So you end up with a long chain of tasks that need to be 
// completed one after the other.

// To handle this situation, we use callback functions. When one task finishes, it calls a callback function to let us know that it's done. 
// Then we can move on to the next task in the chain. But when we have many tasks and each one requires a callback function, the code becomes hard to read and follow. 
// It's like going deeper and deeper into a maze of functions.

console.log("Start");
function start(item,callback) {
    setTimeout(() => {
        console.log("Start Function");
        callback ({ item: "returning item"});
    },4000);
}

function start2(item2,callback) {
    setTimeout(() => {
        console.log("Start2 Function");
        callback ({ item2: "returning price"});
    },4000);
}

function start3(item3,callback) {
    setTimeout(() => {
        console.log("Start3 Function");
        callback ({ item3: "returning qty"});
    },4000);
}
const item = start(1,(item) => {
    console.log(item);
    const item2 = start2(2,(item2) => {
        console.log(item2);
        const item3 = start3(3,(item3) => {
            console.log(item3);
        });
    });
});

// ans: Start,start function, {item: "returning item"}, start2 function, {item2: "returning item2"}, start3 function, {item3: "returning item3"
// this is callback hell, to avoid this we use promises and async await
// promises: follow the promises.js file