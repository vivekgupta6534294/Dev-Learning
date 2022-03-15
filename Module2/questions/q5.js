//move a file
let path=require('path');
let fs=require('fs');
let sourcePath=path.join(__dirname,"file.txt")
let destinationPath=path.join(__dirname,"NewFolder","file1.txt");
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);
fs.unlinkSync(sourcePath);