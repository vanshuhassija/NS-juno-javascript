//Hoisting
//Hoisting is a concept which enables us to extract values of variables and functions
//even before assigning value without getting error

//Moving to the top of the scope

// getName(); //Get Name Function is not defined
// console.log(a); // X is not defined
// var a=7;
// var b=8;
// function getName(){
//     console.log("My name is Vanshu");
// }


//What is Hoisting. Give an example
// Function Expressions are not hoisted but function definitions are. Why?

// Get Name is not a function
console.log(getName);
//Function Expression
//Function expression behave same as variables
var getName=function(){
    console.log("Juno Batch");
}
//Arrow Function
//This is also a function Expression

var getNameDuplicate=()=>{
    //Function Body
}

// function returnNumber(){
//     return 1;
// }

//When Your Function has Only One Line and That Line is Return 
var returnNumber=(name)=>name;
//This is equivalent to 
//var returnNumber=()=>{return 1};

getName();



