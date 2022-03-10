let cp=require('child_process');
// console.log(cp);

//To Open Calculator 

// cp.execFileSync("calc")

//To open vs code 

// cp.execSync("code")

let content=cp.execSync("node test.js");
console.log(" "+content);//string mai convert krdeta h
