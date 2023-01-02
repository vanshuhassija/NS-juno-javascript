//E Commerce Web App 

const cart=["shoes","pants","kurtas"];

//To Place an Order

//1. Create a order
//2. Proceed to payment
//3. Show Order Summary

// createOrder()
//proceedToPayment()
//because createOrder is asynchronous, there is apossibility that it proceeds to payments
//without creating order

function showSummary(){
    console.log("Will Show Summary");
}

function proceedToPayment(callback){
    setTimeout(()=>{
        console.log("Pesa Dedo");
        callback();
    },3000)
}
//Callback
function createOrder(callback){
    setTimeout(()=>{
        console.log("Created Order");
        callback();
    },3000)
}


createOrder(function(){
    proceedToPayment(function(){
        showSummary();
    })
})

//Callback Hell or Pyramid Of Doom

