//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made
let fs=require('fs');
let path = require('path');
if(!fs.existsSync("NewFolder")){
    fs.mkdirSync("NewFolder");
}
let fileKaPath=path.join(__dirname,"NewFolder","newFile.txt");
console.log(fileKaPath);
fs.writeFileSync(fileKaPath,"New File has been made ")
