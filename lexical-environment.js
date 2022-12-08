// function a(){
//     console.log(b);
// }

// var b=10;
// a();

// //Function a is able to access variable b from Global Scope

function a(){
    c();
    function c(){
        console.log(b);
    }
}

var b=10;
a();

// //Within Nested Function too, the global scope variable can be accessed

// function a(){
//     c();
//     function c(){
//         var b=100;
//         console.log(b);
//     }
// }
// var b=10;
// a();//Execution Context Deleted

// Local variable with the same name took precedence over global variable

function a(){
    var b=10;
    c();
    function c(){
        console.log(b);
    }
}
a();
console.log(b);
// A function can access the global variable but global execution context cannot 
// access local variables



//The variable does not exist in the memory and has no value --> Error
//Referenece Error


// What all variables a function can access
// Local Variables, Variables of the parent Scope
