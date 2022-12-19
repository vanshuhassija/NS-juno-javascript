let arr=["Vanshu","Hassija"]

//These properties are defined in the __proto__ of the array

//Everything in Js is an object 

// arr.__proto__===Array.prototype
//arr.__proto__.__proto__===Object.prototype
//fn.__proto__===Function.prototype
//fn.__proto__.__proto__===Object.prototype

//every Object is JS has a property called __proto__.

//whenever you encounter a null value of __proto__ it means no fursther proto exists



function foo(){
    console.log("This is Foo Function");
}

//Never Do this. Only for demo purpose
let object1={
    name:"Vanshu",
    city:"Patiala"
}

let object2={
    name:"Aditya"
}

object2.__proto__=object1;
//It is creating the property
object2.city="Ludhiana"

//1. It sees in the object if the property is present
//2. If not, then check the __proto__ of the object
//3. If not even in __proto__ then check __proto__.__proto__ till null is found

//Prototype chaining or Prototype Inheritence
