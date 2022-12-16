//I can spread Arrays and Objects
//...
//Create an object 
//Shallow Copy of obj Object


const obj2={
    name:"Vanshu",
    city:"Patiala",
    state:"Punjab"
}

const obj3={
    name:"Rajat",
    age:22,
    state:"Uttar Pradesh",
    subject:"Mathematics"
}

const combinedObj={...obj3,...obj2};
console.log("Combined Object",combinedObj);

const arr=[1,2,3,4,[5,6],{name: "Rajat"}]
const arr2=[5,6,7,8,9]
const combinedArray=[...arr,...arr2];
console.log("Combined Array is",combinedArray);

console.log([..."Vanshu"]);

