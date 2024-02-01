const fs = require('fs');

function readFileContent(filePath)
{
    fs.readFile(filePath, 'utf8', (err, data)=> {
        if(err)
        {
            console.error(`Error reading file : ${err.message}`);
        }
        else
        {
            console.log("File content :");
            console.log(data);
        }
    });
}
// test case
readFileContent('file1.txt');
// readFileContent('empty-file.txt');
// readFileContent('nonexistent-file.txt');
