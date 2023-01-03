const promise1 = new Promise((resolve, reject) => {
  resolve("Resolved Promise 1");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved Promise 2");
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Resolved Promise 2");
  }, 6000);
});

//If all the promises are resolved

Promise.all([promise1, promise2, promise3])
  .then(function (data) {
    //It will come her only if all the Promises are resolved
    console.log("Data is ", data);
  })
  .catch((err) => console.log("Error is", err));
