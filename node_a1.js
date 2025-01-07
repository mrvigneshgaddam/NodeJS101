const fs = require("fs");

//------------Synchronous--------------------

//Q1 Create a folder space_project

// fs.mkdirSync("space_project");


// Q2 Inside the folder, create a file log.txt and add the line "ISRO is planning Gaganyaan mission, 
// ie an Indian crewed orbital spacecraft."

// fs.writeFileSync("./space_project/log.txt","ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.")


// Q3 Now, replace the line in the log.txt file with "ISRO has started working on Gaganyaan."

// fs.writeFileSync("./space_project/log.txt","ISRO has started working on Gaganyaan.")


// Q4 Append another line to the log.txt file " The current Aditya-L1 team of scientists is mentoring new 
// talent for working on the Gaganyaan mission."

// fs.appendFileSync("./space_project/log.txt","\nThe current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission")


// Q5 Rename the log.txt file to update.txt

// fs.renameSync("./space_project/log.txt","./space_project/update.txt")


// Q6 Read the update.txt file and display the data. Additionally print a line "We are excited" using console.log() after the read operation

// let data = fs.readFileSync("./space_project/update.txt","utf-8")
// console.log(`${data}\nWe are excited`)



// Q7 Delete the file update.txt

// fs.unlinkSync("./space_project/update.txt")


// Q8 Delete the folder space_project

// fs.rmdirSync("space_project")




// ------------------------------------- Asynchronous-------------------------------------

// Q1 Create a folder space_project

// fs.mkdir("space_project", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Folder space_project created!");
// });


// Q2 Inside the folder, create a file log.txt and add the line "ISRO is planning Gaganyaan mission, 
// ie an Indian crewed orbital spacecraft."

// fs.writeFile("./space_project/log.txt","ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.",(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log(`Successfully wrote data to log.txt`)
// })

// Q3  Now, replace the line in the log.txt file with "ISRO has started working on Gaganyaan."

// fs.writeFile("./space_project/log.txt","ISRO has started working on Gaganyaan.",(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log(`Successfully overwrite the data in log.txt`)
// })

// Q4 Append another line to the log.txt file " The current Aditya-L1 team of scientists is mentoring new 
// talent for working on the Gaganyaan mission."

// fs.appendFile("./space_project/log.txt","\nThe current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.",(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log(`Successfully appended data to log.txt`)
// })


// Q5 Rename the log.txt file to update.txt

// fs.rename("./space_project/log.txt","./space_project/update.txt",(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log(`Successfully renamed the file from log.txt to update.txt`)
// });


// Q6 Read the update.txt file and display the data. Additionally print a line "We are excited" using console.log() after the read operation

// const folderPath = './space_project'
// const fileName = 'update.txt';
// const filePath = `${folderPath}/${fileName}`;

// fs.readFile(filePath,(err, data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(`${data.toString()}`);
// });
// console.log("We are excited")



// Q7 Delete the file update.txt

// fs.unlink("./space_project/update.txt",(err)=>{
//     if(err){
//         throw err
//     }
//     console.log(`Successfully removed file from disk`)
// })



// Q8 Delete the folder space_project

// fs.rmdir("space_project",(err)=>{
//     if(err){
//         throw err
//     }
//     console.log(`Successfully removed directory from disk`)
// })