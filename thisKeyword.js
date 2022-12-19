//This Keyword in JS

//Callsite: From where the function is called

var firstName = "Shubham";
var lastName = "Pratap";

let obj = {
  firstName: "Vanshu",
  lastName: "Hassija",
  getFullName: function () {
    console.log("Full Name is", this.firstName + this.lastName);
  },
};

const fullNameFunction = obj.getFullName;
//window Object
//Default
fullNameFunction();
//this=window/global

//2. Implicit Binding
obj.getFullName();
//obj

//Callsite
//Whatever is the Call site is also the value of this keyword

//3. Explicit Binding

var name = "Subinay";
var city = "Bhopal";

let obj2 = {
  name: "Vanshu",
  city: "Patiala",
  getInfo: function (age, rollNo) {
    console.log(
      "Name is",
      this.name,
      "City is",
      this.city,
      "Age is",
      age,
      "Roll No is",
      rollNo
    );
  },
};

let obj3 = {
  name: "Satyam",
  city: "Lucknow",
};

//Sometimes I want to explicitly define the value of this

//3.1
//Call
//This keyword should point to obj3 here
obj2.getInfo.call(obj3, 24, 1);

//3.2
//Apply
console.log("Apply");
obj2.getInfo.apply(obj3, [24, 1]);

//3.3
const copyFunction = obj2.getInfo.bind(obj3, 24, 1);
copyFunction();
//1. Bind Creates a new Function

//4. New Binding

class Book {
  constructor(noOfPages) {
    this.noOfPages = noOfPages;
  }
}

const someBook = new Book(20);
// let someBook={
//     noOfPage:20
// }
// When a new keyword is used
//1. It creates a new Object
//2. This keyword starts pointing to the newly created object
console.log("_____");
var roomNo = 50;

const demoObj = {
  roomNo: 100,
  foo: function () {
    console.log("Room No is", this.roomNo);
    //If not an arrow Function
    const bar = () => {
      //This Reference is Lost and it points to global
      console.log("Room No inside bar  is", this.roomNo);
      const baz = () => {
        console.log("Room No inside baz  is", this.roomNo);
      };
      baz();
    };
    bar();
  },
};
demoObj.foo();

//In case of arrow function it remembers what was this pointing to
