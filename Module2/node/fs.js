let fs=require("fs");
// console.log(fs);

let path=require("path");
// let filePath=path.join(__dirname,"file.txt");
// console.log(filePath);

// It create file it doesn't exist else overide
// C-Create
// fs.writeFileSync(filePath,"Again writing on existing file ");
// // R-REad
// let content =fs.readFileSync(filePath,'utf-8');
// // console.log(content);
// // U-update 
// fs.appendFileSync(filePath,"append file");
// // console.log(fs.readFileSync(filePath,"utf-8"));


// // D-Delete 
// fs.unlinkSync(filePath);


//Homework : Create Directory and REad Delete and copy a File in the directory
// fs.mkdirSync("lets")
// fs.writeFileSync(path.join(__dirname, path.join("xyz", "abc.txt")), "");

// let children = fs.readdirSync("xyz")
// console.log(children);

//fs.copyFileSync("test.js", path.join(__dirname, path.join("xyz", "test.js")));
// fs.rmdirSync("newfolder", {recursive:true});
// fs.rmdirSync("xyz", {recursive:true});

// Self 
// Create a Directory 
// fs.mkdirSync("NewFolder");
// make a file inside directory
// fs.writeFileSync(path.join(__dirname,path.join("NewFolder","abc.txt"))," ");
// read the directory

// let children =fs.readdirSync("NewFolder");
// console.log(children);

// // copy a file 
// // fs.copyFileSync("test.js",path.join(__dirname, path.join("xyz", "test.js")))

// fs.rmdirSync("NewFolder",{recursive:true});

//CW: Same as Hw
// Create a directory 
if(!fs.existsSync("HamariDirectory"))
fs.mkdirSync("HamariDirectory");

// Read a directory 
// console.log(__dirname);
let folderPath="D:/ForPlacement/Development/DevLearning/Module1";
let contentOfFolder=fs.readdirSync(folderPath);
console.log(contentOfFolder);


// fs.rmdirSync("HamariDirectory");
// fs.rmdirSync("HamariDirectory",{recursive:true});
// fs.copyFileSync("test.js",path.join(__dirname, path.join("HamariDirectory", "test.js")))
let sourcePath=path.join(__dirname,"test.js");
let destinationPath=path.join(__dirname,"HamariDirectory","test.js");
fs.copyFileSync(sourcePath,destinationPath);