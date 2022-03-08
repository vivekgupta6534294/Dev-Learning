let obj={};
console.log(obj);

let objVivek={
    Name:"Vivek",
    Age:21,
    "Phone no": "9477423XXX",
    lastName:'Gupta'
}

console.log(objVivek);
let capAmerica={
    Name:'Steve',
    Age:9999,
    Friends:['Natasha','Thor','Tony','Bucky','Bruce'],
    address:{
        city:"Queens",
        state:"Harayana"
    },
    sayHi:function(){
        // address:{
        //     city:"Queens"
        //     state:"Harayana"
        // }

        console.log("Captain America says Hiii");
    }
}
console.log(capAmerica);
console.log(capAmerica.Name);
console.log(capAmerica.address);
console.log(capAmerica.Friends[4]);
console.log(capAmerica.sayHi());
capAmerica.sayHi();

// Add a new key to object
capAmerica.Movies=['Avengers','Civil War','Endgame'];
console.log(capAmerica)


//deleting a key
delete capAmerica.Movies;
console.log(capAmerica)