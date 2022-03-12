// "D:\ForPlacement\Development\DevLearning\Module 2\node\path.js"
let path=require("path");
// console.log(path);
let extentionName=path.extname("D:\ForPlacement\Development\DevLearning\Module 2\node\path.js");
console.log(extentionName);

// let baseName=path.basename("D:\ForPlacement\Development\DevLearning\Module 2\node\path.js");
// console.log(baseName);
console.log(__dirname);//Directory ka Path dedia
console.log(__filename);

let baseName=path.basename(__filename);
console.log(baseName);

let dirPath=__dirname;
console.log(dirPath);

let newFilePath=path.join(dirPath,"test.js");
console.log(newFilePath);

console.log(__dirname,"abc.js")
