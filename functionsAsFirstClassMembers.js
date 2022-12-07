//Functions In Js

// Functions are first class members in JS. Explain.

function foo(name){
    console.log("I am in Function Foo",name);
}

function baz(name){
    console.log("I am in Function Baz",name);
}

// We have a number. If Number gretaer than 4 then call foo Else Call Baz;

//Function as a parameter. Same Like Variables
function makeACall(functionToBeExecuted){
    functionToBeExecuted("Vanshu");
}


function determineNumber(num){
    if(num>4){
        //foo()
        //Function Reference
        //When Functions are passed as arguments, we need to pass the reference
        makeACall(foo)
    }
    else{
        makeACall(baz)
    }
}

determineNumber(5);
