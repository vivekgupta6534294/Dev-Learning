//Printing in Java Script 
console.log("Welcome")
console.log("Vivek Gupta")


//variable in js and data types
let num=10;//Number 
console.log(num);

let char='a';//Character
console.log(char);

let str= 'I am String '//String
console.log(str);

let bool =true;//boolean 
console.log(bool);

// loops 
// console.log(1);
// console.log(2)
// console.log(3)

for(let i=0;i<5;i++){
    console.log(i);
}
let count=6;
while(count>0){
    console.log(count);
    count--;
}

//prime check function!!
let numm=19;
let flag=false;
for(let i=2;i*i<=numm;i++){
    if(numm%i==0){
        console.log("not prime");
        flag=true;
        break;
    }
}
if(flag==false){
    console.log("is prime");
}




 