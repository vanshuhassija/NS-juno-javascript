//Reference Error Vs Undefined

console.log("Value Of X is",x);
var x=7;

//Undefined Means The Variable Exists in the memory but it does not have a value
try{
console.log("Value Of Y is",y);
}
catch(err){
    console.log("Error is",err);
}

//Reference Error occurs when The variable is not in the memory
//Reference Error Stops the execution of the program.

console.log("This line is after the error");
