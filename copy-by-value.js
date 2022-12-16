let obj = {
  fullName: {
    firstName: "Vanshu",
    lastName: "Hassija",
  },
  address: {
    city: "Patiala",
    state: "Punjab",
  },
  age: 24,
};

let objCopy=obj;

// objCopy.age=25;

//If You change in copy the change is reflected in The Original Object 



//In Javascript Objects are copied by reference and not by value

//When I want to copy by value

//How To Copy By Value

//1. Object.create

// number--> Number
// strings ---> String
// boolean ---> Boolean
// objects ---> Object

const objCopyByValue1=Object.create(obj);
objCopyByValue1.age=26;
console.log("Obj age",obj.age);
console.log("ObjCopy Age",objCopyByValue1.age);

//Object.create creates a shallow copy
// objCopyByValue1.address.city="Ludhiana"
console.log("Obj age",obj.address.city);
console.log("ObjCopy Age",objCopyByValue1.address.city);

//Shallow Copy Means Copying by Value only for the properties at level 1
//It does not copy by value for nested objects


//2. JSON.stringify,JSON.parse
//Convert the Object To String

//JSON.stringify()
//JSON: Javascript Object Notation
const deepCopy=JSON.parse(JSON.stringify(obj));
 deepCopy.address.city="Ludhiana"

 console.log("Obj age",obj.address.city);
console.log("ObjCopy Age",deepCopy.address.city);


//Convert The String to Object Again

//JSON.parse()
//It creates a deep Copy 

//3. Spread Operator

//I can spread Arrays and Objects
//...
//Create an object 
const spreadObject={...obj};
//Shallow Copy of obj Object
console.log("SpreadObject is",spreadObject);
spreadObject.age=28;
console.log(obj.age,spreadObject.age,"Age")
spreadObject.address.city="Amritsar";
console.log(obj.address.city,spreadObject.address.city,"Age")

const obj2={
    name:"Vanshu",
    city:"Patiala",
    state:"Punjab"
}

const obj3={
    name:"Rajat",
    age:22,
    state:"Uttar Pradesh",
    subject:"Mathematics"
}

const combinedObj={...obj3,...obj2};
console.log("Combined Object",combinedObj);

