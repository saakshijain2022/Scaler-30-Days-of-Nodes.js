const fs = require('fs');

function readFileContent(filePath)
{
    fs.readFile(filePath, 'utf8', (error, data)=> {
        if(err)
        {
            console.log("Error reading file : $ {err.message}");
        }
        else
        {
            console.log("File COntent : \n ${data}");
        }
    });
}
// test case
readFileContent('file1.txt');
readFileContent('empty-file.txt');
readFileContent('nonexistent-file.txt');
