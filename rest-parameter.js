//Spread And Rest operator
//You will have a minimum of two numbers
//when you are uncertain about the number of arguments
function add(a,b,...restNumbers){
 let sum=a+b;



 for(let number of restNumbers){
    sum+=number;
 }
 return sum;
}

console.log(add(3,4,5,6,7,8));

//restNumbers:[5,6,7,8]
