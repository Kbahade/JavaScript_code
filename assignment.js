// // Write a JavaScript program to list the properties of a JavaScript object.

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

// var properties= Object.keys(student);
// console.log(properties.join(","));


// let student={
//     name: "komal",
//     age: 19,
//     class: "xii"
// }
// let output= Object.keys(student)
// console.log(output.join(" "))


// // Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };
// delete student.sclass;
// console.log(student)


// // Write a JavaScript program to get the length of a JavaScript object.

// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };

// let output=Object.keys(student).length
// console.log(output)

// let num={
//     name:"komal",
//     age:21,
//     email: "komal@123",
//     address: "kdfjdlfks"
// }
// let output=Object.keys(num).length
// console.log(output)


// *****************USER INPUT IN OBJECGT************************************************************

// const input=require("readline-sync")
// let people=[]
// n=input.questionInt()

//     for(let i=0;i<n;i++){
//         let pi=3.14;
//         let num={
//         name:input.question(),
//         age : input.questionInt(),
//         email : input.question   
//     }
//     people.push(num)
//     }
//     console.log(people)


// //Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following book

// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];
// for(let i in library){
//     console.log(library[i].readingStatus)
// }


// // Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// // Volume of a cylinder : V = πr2h
// // where r is the radius and h is the height of the cylinder.

// const input=require("readline-sync")
// let n=input.questionInt()
// let num=[]
// function calculateCyliner(r,h){
//     let v=3.1416*(r*r)*h;
//     console.log(v.toFixed(4))
// }
// for(let i=0;i<n;i++){
//     let radius= input.questionInt()
//     let height= input.questionInt()

//     calculateCyliner(radius,height);
// }


// // Write a JavaScript program that returns a subset of a string.
// // Sample Data: dog
// // Expected Output: ["d", "do", "dog", "o", "og", "g"]

// const input=require("readline-sync")
// let a=input.question().split("")
// let p=[]
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         p.push(a.slice(i,j))
//     }
// }
// console.log(p)

// const input=require("readline-sync")
// let x=input.question().split("")
// let s=[]
// for(let i=0;i<x.length;i++){
//     for(let j=i+1;j<x.length;j++){
//        s.push(x.slice(i,j))
//     }
// }
// console.log(s)


// // Write a JavaScript program to calculate circle area and perimeter.
// //Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

// const input=require("readline-sync")
// let n=input.questionInt()
// for(let i=0;i<n;i++){
//     let r=input.questionInt()
//     let a=3.1416*r*r
//     let p=2*3.1416*r
//     console.log(a.toFixed(2),p.toFixed(2))
// }






