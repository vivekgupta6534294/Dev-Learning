//copy index.html file from module1 to a new folder inside module2 having name html.
let fs=require('fs');
const { dirname } = require('path');
let path=require('path');
let sourcePath=path.join(__dirname,"..","..","Module1","Day1","index.html");
console.log(sourcePath)
let destinationPath=path.join(__dirname,"..","index.html");
console.log(destinationPath);
fs.copyFileSync(sourcePath,destinationPath);