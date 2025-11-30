// Import prompt-sync for user input
const prompt = require("prompt-sync")({ sigint: true });


let tasks = [];


function addTask() {
    let task = prompt("Enter a new task: ");
    if (task.trim() === "") {
        console.log("❌ Task cannot be empty.");
        return;
    }
    tasks.push(task);
    console.log("✔ Task added.");
}

function removeTask() {
    if (tasks.length === 0) {
        console.log("📭 No tasks available.");
        return;
    }

    displayTasks();
    let index = parseInt(prompt("Enter task number to remove: "), 10);

    if (isNaN(index) || index < 1 || index > tasks.length) {
        console.log("❌ Invalid index.");
        return;
    }

    tasks.splice(index - 1, 1); 
    console.log("✔ Task removed.");
}


function displayTasks() {
    if (tasks.length === 0) {
        console.log("📭 No tasks available.");
        return;
    }

    console.log("\n--- Your Tasks ---");
    tasks.forEach((task, i) => {
        console.log(`${i + 1}. ${task}`);
    });
    console.log("------------------\n");
}

// Function to clear all tasks
function clearTasks() {
    tasks = [];
    console.log("🗑 All tasks cleared.");
}


while (true) {
    console.log("\nCommands: add | remove | view | clear | exit");
    let command = prompt("Enter command: ").toLowerCase();

    switch (command) {
        case "add":
            addTask();
            break;

        case "remove":
            removeTask();
            break;

        case "view":
            displayTasks();
            break;

        case "clear":
            clearTasks();
            break;

        case "exit":
            console.log("👋 Exiting program...");
            process.exit();

        default:
            console.log("❌ Invalid command. Try again.");
    }
}
