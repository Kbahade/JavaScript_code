const input=require("readline-sync")


// //you can create an empty dictionary using "Object" keyword 
// let dictionary=new Object();
// //shorthand syntax
// let emptydictionary={};


//object format "key:value"

// let petDictionary={
//     "ram":{age:18,name:"ram",gender:"male"},
//     "seeta":{ age:17,name:"seeta",gender:"female"}
// }

// //not only you can use string data type for keys but also boolean values and number

// let wcDictionary={
//     1: {team:"India"},
//     2: {team:"France"}
// }
// let demo={
//     true:{message:"confirmed"},
//     false:{message:"denied"}
// }


// //you can add items to object using 
// dictionary[new_key]=new_value
// //for example

//petDictionary["apple"]={age:5,name:"apple",gender:"female"}

// //just like when initializing,you can also use other data types to represent the key

// wcDictionary[3]={team:"Morocoo"}


// //you can access a value from a dictionary using its key value

// let dectValue=petDictionary["ram"]
// console.log(dectValue)

// //you can iterate over each item in the dictionary using the "Object.keys()" method

//console.log(Object.keys(petDictionary))

// //in the loop format to access the key
 
// for(const key of Object.keys(petDictionary)){
//     console.log(key+":")
//     console.log(petDictionary[key]);
// }


// // to check if an item exist in dictionary using "in" keyword

// let a="ram" in petDictionary;
// let b="c" in petDictionary;
// console.log(a,b)

// //you can also use the "hasOwnProperty()" method to check if an item exists

// let a=petDictionary.hasOwnProperty("ram")
// let b=petDictionary.hasOwnProperty("c")
// console.log(a,b)


// //delete value from the Dictionary

//petDictionary["Apple"]=null; //it makes the value of key null
// delete petDictionary["Apple"]; //it delete the key
// console.log(Object.keys(petDictionary))








// //create an object using the object initializer(literal syntax) or the "Object()" constructor

// const person={
//     fName:"komal",
//     lname:"bahade",
//     age:21,
//     fullName:function(){
//         return this.fName+" "+this.lname;
//     }
// };

// to access method within the object 

// const output=person.fullName();  //to invoke the method
// console.log(output);


// //you can add a new method to an existing object

// person.getGreeting = function(){
//     return "Hello"+this.fName+"!"
// };


// //built in methods

// //Object.keys(obj)    //returns an array of keys(property names)from the object
// const a=Object.keys(person);
// console.log(a)

// //Object.values(obj)   //return an array of values (property values) from the object
// const b=Object.values(person);
// console.log(b)

// //Object.entries(obj)  //returns an array of key value pairs(as arrays) from the object
// const c=Object.entries(person);
// console.log(c)


// //calculation inside object

// const calcu={
//     add:function(a,b){
//         return a+b;
//     },
//     mul:function(a,b){
//         return a*b;
//     }
// }
// console.log(calcu.add(5,3));
// console.log(calcu.mul(5,3))


// //combining the objects(joining)  //to merge two objects, you can use the spread operator(...)

// const add={city:"India"};
// const extend={...person,...add};
// console.log(extend)


// //using for...in loop
// //the "for...in" statement allows you to iterate through the enuemrable properties of an objest

// const people = {
//     name: "John",
//     age: 30,
//     occupation: "Developer"
//   };
 
// for(let i in people){
//     console.log(i +" "+people[i]);
// }

  
// //using "Object.keys()","Object.values()","Object.entries()"

// const car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022
//   };
// //loop through keys
// const keys=Object.keys(car)
// keys.forEach(key =>{
//     console.log("key : "+ key);
// });
// //loop through values
// const values=Object.values(car)
// values.forEach(value =>{
//     console.log("value: " +value);
// });
// //loop through entries
// const entries=Object.entries(car)
// entries.forEach(entry=>{
//     console.log("entry: "+entry)
// })


// //hasOwnProperty() check

// for(let i in car){
//     if(car.hasOwnProperty(i)){
//         console.log(i +":"+car[i]);
//     }
// }


// ********************************************************************************************
// *********************************PRACTICE qUESTIONS******************************************************
// *******************************************************************************************************

// // Question: Filter students who have passed the exam (grade >= 60).
// // students = [    {'name': 'John', 'grade': 75},    {'name': 'Emma', 'grade': 55},    {'name': 'Michael', 'grade': 90}]
// // Expected Output:
// // [{'name': 'John', 'grade': 75}, {'name': 'Michael', 'grade': 90}]

// //const input=require("readline-sync")
// students = [   
//      {'name': 'John', 'grade': 75},  
//   {'name': 'Emma', 'grade': 55}, 
//    {'name': 'Michael', 'grade': 90}
// ]
// const passed=students.filter(key => (key.grade >=60))
// console.log(passed)


// // Question: Calculate the average grade of all students.
// // students = [    {'name': 'John', 'grade': 75},    {'name': 'Emma', 'grade': 55},    {'name': 'Michael', 'grade': 90}]
// // Expected Output: 73.33

// students = [   
//      {'name': 'John', 'grade': 75},  
//   {'name': 'Emma', 'grade': 55}, 
//    {'name': 'Michael', 'grade': 90}
// ]
// function avg(){
//     let sum=0;
//     for(let i=0;i<students.length;i++){
//         sum=sum+students[i].grade
//     }
//     console.log( sum/students.length)
// }
// avg()


// // Question: Convert student names to uppercase.
// // students = [    {'name': 'John', 'grade': 75},    {'name': 'Emma', 'grade': 55},    {'name': 'Michael', 'grade': 90}]
// // Expected Output:
// // ['JOHN', 'EMMA', 'MICHAEL']

// students = [   
//      {'name': 'John', 'grade': 75},  
//   {'name': 'Emma', 'grade': 55}, 
//    {'name': 'Michael', 'grade': 90}
// ]
// function upper(){
//     for(let i =0;i<students.length;i++){
//         console.log(students[i].name.toUpperCase())
//     }
// }
// upper()


// // Question: Calculate the total price of all products.
// // products = [    {'name': 'Laptop', 'price': 1000},    {'name': 'Mouse', 'price': 20},    {'name': 'Keyboard', 'price': 50}]
// // Expected Output: 1070

// products = [    
//     {'name': 'Laptop', 'price': 1000},    
// {'name': 'Mouse', 'price': 20},    
// {'name': 'Keyboard', 'price': 50}
// ]
// function total(){
//     let sum=0
//     for(let i=0;i<products.length;i++){
//         sum=sum+products[i].price
//     }
//     console.log(sum)
// }
// total()


// // Question: Filter products with prices greater than $50.
// // products = [    {'name': 'Laptop', 'price': 1000},    {'name': 'Mouse', 'price': 20},    {'name': 'Keyboard', 'price': 50}]
// // Expected Output:
// // [{'name': 'Laptop', 'price': 1000}, {'name': 'Keyboard', 'price': 50}]

// products = [    
//     {'name': 'Laptop', 'price': 1000},    
//     {'name': 'Mouse', 'price': 20},    
//     {'name': 'Keyboard', 'price': 50}
// ]
// const pro=products.filter(i => (i.price>50
// ))
// console.log(pro)


// // Square the value of every element in the input array.
// // Input: const input = [1, 2, 3, 4, 5];
// // Expected Result: [1, 4, 9, 16, 25]1.

// let arr=input.question().split(",").map(Number)
// let p=[]
// function double(x){
//     return x**2
// }
// const output=arr.map(double)
// console.log(output)


// // Sum of Every Positive Element:
// // If the given input is an array of numbers, return the sum of all the positive ones.
// // If the array is empty or there aren’t any positive numbers, return 0.
// // Input: const input = [1, -4, 12, 0, -3, 29, -150];
// // Expected Result: 42

// let arr=input.question().split(",").map(Number)
// function positive(x){
//     let sum=0
//     for(let i=0;i<x.length;i++){
//         if(x[i]>0){
//             sum=sum+x[i]
//         }
//     }
//     return sum
// }
// const output=positive(arr)
// console.log(output)


// // Calculate Median and Mean:
// // Calculate the mean and median values of the number elements from the input array.
// // Input: const input = [12, 46, 32, 64];
// // Expected Result: { mean: 38.5, median: 39 }

// const arr=input.question().split(",").map(Number)
// function mean(x){
//     let sum=0
//     for(let i=0;i<x.length;i++){
//         sum=sum+x[i]
//     }
//     return sum/x.length
// }
// const output=mean(arr)
// console.log(output)


// // Get Name Initials:
// // Given a string of multiple words with a single space between each of them, abbreviate the name and return the initials.
// // Input: const input = "George Raymond Richard Martin";
// // Expected Result: "GRRM".

// const arr=input.question()
// const word=arr.split(" ")
// let newstr=""
// function cap(){
//     for(let i=0;i<word.length;i++){
//         newstr+=word[i][0].toUpperCase()
//     }
//     return newstr;
// }
// const output=cap(word)
// console.log(output)


// // Age Difference from the Youngest and Oldest:
// // Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
// // Input: (You can create your own sample input for this one!)

// const arr=input.question().split(",").map(Number)
// let bs=arr.sort((a,b)=>a-b)
// let c=bs[bs.length-1]-bs[0]
// console.log(c)

// const arr=input.question().split(",").map(Number)
// let c=arr.sort((a,b)=>b-a)
// console.log(c)


// // Array Transformation with map():
// // Problem: Given an array of strings, capitalize the first letter of each word.

// const arr=input.question()
// const word=arr.split(",")
// function captilize(word){
//     for(let i=0;i<word.length;i++){
//         return word.charAt(0).toUpperCase()+word.slice(1)
//     }
// }
// const output=word.map(captilize).join(",")
// console.log(output)


// // Filtering Even Numbers with filter():
// // Problem: Given an array of numbers, filter out the even numbers.

// const arr=input.question().split(",")
// const even=arr.filter(x=>(x%2===0))
// console.log(even)


// // Calculating Total Price with reduce():
// // Problem: Given an array of products (each with a price property), calculate the total price.

// const products = [
//     { name: "Shirt", price: 25 },
//     { name: "Jeans", price: 50 },
//     { name: "Shoes", price: 80 },
//   ];
// const pro=products.reduce(function(acc,product){
//     return acc+product.price
//     }
// ,0)
// console.log(pro)


// // Flatten Nested Arrays with reduce():
// // Problem: Given an array of nested arrays, flatten it into a single-level array.

// const arr=[[1, 2], [3, 4], [5, 6]]
// const newarr=arr.reduce(function(acc,occ){
//     return acc.concat(occ);

// },[])
// console.log(newarr)


// Finding Average Age with reduce():
// Problem: Given an array of people (each with an age property), find the average age.

// const arr=input.question().split(",").map(Number)
// arr.sort()
// console.log(arr)


// const input1 = require("readline-sync");
// const obj = {};

// while (true) {
//     const key = input1.question("Enter a key (type 'done' to exit): ");

//     if (key.toLowerCase() === 'done') {
//         break;  // Exit the loop if the user enters 'done'
//     }

//     const value = input1.question("Enter the value: ");
//     // Do something with the key and value...
//     obj[key]=value;

// }

// console.log(obj);


// // Grouping by Category:
// // Problem: Given an array of objects representing products,
// //  group them by their category. Return an object where the 
// //  keys are the unique categories, and the values are arrays 
// //  of products belonging to each category.

// const products = [
//     { name: 'Laptop', category: 'Electronics' },
//     { name: 'T-shirt', category: 'Clothing' },
//     { name: 'Headphones', category: 'Electronics' },
//     { name: 'Jeans', category: 'Clothing' },
//     { name: 'Phone', category: 'Electronics' }
//   ];
// const arr=products.reduce(function(acc,occ){
//     if(!acc[occ.category]){
//         acc[occ.category]=[];
//     }
//     acc[occ.category].push(occ)
//     return acc
// },{})
// console.log(arr)



// // Flatten Nested Arrays:
// // Problem: Given an array containing nested arrays, flatten it into a single-level array.
// // Test Case:

// const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// function array(arr){
//     return arr.reduce(function(acc,cur){
//         if(Array.isArray(cur)){
//             return acc.concat(array(cur));
//         }
//         else{
//             return acc.concat(cur);
//         }
//     },[])
// }
// console.log(array(nestedArray))



// Unique Characters in a String:
// Problem: Write a function that takes a string as input 
// and returns an array of unique 
// characters (case-insensitive) present in the string.

// const arr=input.question().split(",").map(Number)
// const mySet=new Set(arr)
// console.log(mySet)
// const arr2=Array.from(mySet)

// const arr=input.question().split(",").map(Number)
// const uniqueArr=arr.filter((value,index,self)=> self.indexOf(value)===index);
// console.log(uniqueArr)














