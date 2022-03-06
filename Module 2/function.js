function sayHello(){
    console.log("Hello Vivek ");
}
sayHello();

// function with parameter
function sum(num1,num2){
    let addition =num1+num2;
    console.log("Addition of given numbers "+addition);

}
 sum(3,5);

 // function with return type 

 function multiply(num1,num2){
     return num1*num2;
 }
 let ans=multiply(3,5);
 console.log(ans);


//  function are first class citizen 
 let a=function sub(num1,num2){
            return num1-num2;
        }
console.log(a(10,5));

// IIFE -Immediatly Invoke functin expressin 
(function(){
    console.log("Hello from IIFE")
})();

//With Parameter 

(function(n1,n2){
    console.log(n1/n2);
})(10,5);

(function (n1,n2){
    console.log(n1+n2);
})(10,5);

