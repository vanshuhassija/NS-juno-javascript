const URL="https://api.github.com/users/vanshuhassija"


//Fetch returns a promise 
//Fetch is asynchronous
const userData=fetch(URL);
console.log("Another Task");
console.log("User Data is",userData)


userData.then(data=>{
    console.log("Fetch data",data);
    //Fetch Returns a readable stream that needs to be converted to plain object 

    //.json() also returns a promise
    return data.json();
}).then((finalData)=>{
    console.log("Final Data is",finalData)
    const imageElement=document.createElement("img");
    imageElement.setAttribute("src",finalData.avatar_url);
    document.querySelector("body").appendChild(imageElement)
})


