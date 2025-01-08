const fs = require('fs');
let command = process.argv[2];
let task = process.argv.slice(3).join(' ');

switch (command){
    case "add":
        addTask(task);
        break;
    case "remove":
        removeTask(parseInt(task));
        break;
    case "list":
        listTasks();
        break;
    default:
        console.log("Unknown command");
}

function addTask(task){
    fs.appendFileSync("to_do.txt", ` ${task}\n`);
    console.log(`Task ${task} added.`);
}
function listTasks(){
    let list = fs.readFileSync("to_do.txt","utf-8").trim().split("\n");
    let tasks = list;
    tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
    });
}

function removeTask(task){
    let data = fs.readFileSync("to_do.txt", "utf-8").trim().split("\n");
    data.splice(task - 1, 1); 
    fs.writeFileSync("to_do.txt", data.join("\n"));
    console.log(`Task ${task} removed.`);
}