const arr = [1, 2, 3, 4, 5, 6];

//From this array make a new array that is a square of each number
//[1,4,9,16,25,36];

//When You want to perform operation on each and every element of array
//.map goes to each and every elment of the array and performs an operation
//Also, it returns a new array
const squareArray = arr.map(function (element, index) {
  //You need to know which element are you currently traversing on
  //First Argument is the element that you are traversing upon
  //Second argument is the index of the element you are traversing on

  //You have to necessarily return the result
  return element * element;
});

console.log("Two arrays are", arr, squareArray);

//Add 2 to every number in original Array

//Given an array, return all even Numbers From it
//The condition decides if the element should be present in the new array
//Filter Goes each and every element of the array and makes a new array based on condition

const evenArray = arr.filter(function (element, index) {
  //If it return true then element will be present in the array else not
  return element % 2 === 0;
});
console.log("Even array is", evenArray);

//In Map length of new array will be definitly equal to length of original array.
//In Filter length of new array might be different from length of original array.

//Given an array you need to make a new array only of numbers

const arr2 = ["Vanshu", 2, 3, 4, 5, "Rajat"];

const numberArray = arr2.filter((element) => {
  return typeof element === "number";
});

console.log("Number array is", numberArray);

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const firstFiveNumbers = arr3.filter(function (element, index) {
  return index < 5;
});

const squared = firstFiveNumbers.map(function (element, index) {
  return element * element;
});

console.log("Squared", squared, firstFiveNumbers);

//You have an array of 20 numbers. You owant to make a new array that has square of
//first ten numbers

//Reduce

//Accumulator of all numbers in Array
let nums = [11, 2, 3, 4];
// let Accumulator=0;
// for(let i=0;i<nums.length;i++){
//     Accumulator+=nums[i];
// }

//Reduce returns single element out of all the array elements
const sumOfNumbers = nums.reduce(function (accumulator, currentValue, index) {
  return accumulator + currentValue;
}, 0);

const arrayOfObjects = [
  {
    name: "Swagatm",
    assignments: 5,
    batch:60
  },
  {
    name: "Shekhar",
    assignments: 10,
  },
  {
    name: "Vanshu",
    assignments: 100,
  },
  {
    name:"Vanshu",
    assignments:1000
  }
];

//Find the Object in the array whewe Name is Vanshu
//Filter tries to find all the entries that match the criteria
//Find returns the first entry that matches the criteria

const myEntry=arrayOfObjects.findIndex(function(currentObject){
    return currentObject.name==="Vanshus"
})

console.log("My Entry is",myEntry);


