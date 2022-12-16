function x(){
    var a=7;
    function y(){
        //1. It will check the local memory
        //2. Lexical Parent
        //3. Parent Lexical Scope+ Local memory
        console.log(a);//Here I shpuld Get error
    }
    return y;
}
//y-->fn+a:+Baki Variables
var z=x();
//z is function y along with its lexical scope
// typeof z---> function
//....10000 lines of code
z();



//Function bundled along with it's lexical scope is closure.

//When y is returned, not only the function is returned but entire closure(funy+ lexical scope of y)


// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }

// z();
// A closure is a function that has access to its outer function scope even after the 
//function has returned

