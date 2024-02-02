const fs = require('fs');
const path = require('path');

function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing to file: ${err.message}`);
        } else {
            console.log(`Data written to ${path.basename(filePath)}`);
        }
    });
}

// Test Cases
writeToFile('NODEJS_SCALER_CHALLANGE/DAY2/output1.txt', 'Sample content.');
// Expected Output: Data written to output1.txt

writeToFile('DAY2/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...





// const fs = require("fs");

// function writeToFile(filePath,content)
// {
//     try{
//         fs.writeFile(filePath,content);
//         console.log('Data written to output folder');   
//     }
//     catch(Error)
//     {
//         console.log('Error writing to output folder');
//     }
//     // fs.writeFile(filePath,content,(err)=> {
//     //     if(err)
//     //     {
//     //         console.log(`Error writing to file: ${err.message}`);
//     //     }
//     //     else
//     //     {
//     //         console.log(`Data written to ${filePath}`);
//     //     }
//     // });
// }

// writeToFile("DAY2/output.txt", "This is Day 2 of 30 Days Node.js");
