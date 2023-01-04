// function foo(){
//     return new Promise(function(resolve,reject){
//         resolve("Some Data")
//     })
// }

function createOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(12345)
        },3000)
    })
}


function proceedToPayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Order created")
        },3000)
    })
}


async function foo(){
    //When you add async keyword in front of any regular function
    //It automatically returns a promise from that function
    try{
    const orderId=await createOrder();
    console.log("Order Id",orderId)
    //Pauses the Execution and waits for the promise to resolve or reeject

    //After the promise is resolved the function execution continues from the point where it was left.

    await proceedToPayment();
    console.log("Last Statement of Async Function")
    }
    catch(err){
        console.log("Error is",err)
    }
}
//1. Await can only be used inside an async function
//Await keyword makes the function pause the execution and wait for the promise to resolve
foo()
console.log(3);
console.log(4);
