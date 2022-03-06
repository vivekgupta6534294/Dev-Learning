//empty array
let arr=[];
console.log(arr);

// array with Element
let eleArr=[1,2,3,4,5,"Hello I am String ", false, 'c',4.5];
console.log(eleArr);

console.log("Element at 4th index"+eleArr[4]);

eleArr[3]="Nothing ";
console.log(eleArr)
console.log("####################");
//Arrays method


//Push
console.log("Array before push"+eleArr);
eleArr.push("new item");
console.log("Array after Push"+eleArr);
//Pop
eleArr.pop()
console.log("Array after pop "+eleArr);

// Shift 
console.log("Array Before shift "+ eleArr);
eleArr.shift();
console.log("Array after Shift "+eleArr);


//Unshift
console.log("Array Before Unshift "+ eleArr);
eleArr.unshift("Newly added Item ");
console.log("Array after Unshift "+eleArr);

//Length
let len=eleArr.length;
console.log(len);
