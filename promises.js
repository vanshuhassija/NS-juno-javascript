const cart = ["shoes", "pants", "kurta"];

function validateCart() {
  return true;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (!orderId) {
      reject(new Error("Order Id is Required"));
    }
    setTimeout(() => {
      resolve("Payment Successfull");
    }, 3000);
  });
}

function createOrder() {
  //To Create A promise use the Promise constructor and pass it a callback
  const pr = new Promise(function (resolve, reject) {
    //resolve and reject are both functions
    //resolve takes the promise to fulfilled state
    //reject takes the promise to rejected state
    if (!validateCart()) {
      reject(new Error("Cart is not valid"));
    } else {
      const orderId = "12345";
      //It will take the promise to fulfilled state
      //In Resolve function you can pass any data
      resolve(orderId);
    }
  });

  return pr;
}

//create order function returns a promise
//We come to know if a promise is cmpleted or not with a signal called then

//Chaining Of Promises
//We here, solved callback hell
createOrder()
  .then(function (data) {
    console.log("Order Id is", data);
    //In Order to give data to next then you need to return it
    return data;
  })
  .then((previousThenData) => {
    //This then Will receive the data from immediately previous then
    return proceedToPayment(previousThenData);
  })
  .then((paymentData) => {
    console.log("Payment Data is ", paymentData);
  })
  .catch((err) => {
    console.log("Error is", err.message);
  });
