let fs=require("fs");
// console.log(fs);

let path=require("path");
let filePath=path.join(__dirname,"file.txt");
console.log(filePath);

// It create file it doesn't exist else overide
// C-Create
fs.writeFileSync(filePath,"Again writing on existing file ");
// R-REad
let content =fs.readFileSync(filePath,'utf-8');
console.log(content);
// U-update 
fs.appendFileSync(filePath,"append file");
console.log(fs.readFileSync(filePath,"utf-8"));


// D-Delete 
fs.unlinkSync(filePath);