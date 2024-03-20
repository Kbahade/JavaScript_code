//  const radius=[3,1,2,4];

//  //CALCULATE THE AREA OF CIRCLE
 
//  const calculateArea=function(radius){
//     const output=[];
//     for (let i=0;i<radius.length;i++){
//         output.push(Math.PI * radius[i]*radius[i]);
//     }
//     return output;
//  };

//  console.log(calculateArea(radius));

//  //CALCULATE THE CIRCUMFERENCE OF CIRCLE

//  const calculateCircumference=function(radius){
//     const output=[];
//     for (let i=0;i<radius.length;i++){
//         output.push(2*Math.PI*radius[i]);
//     }
//     return output;
//  };
//  console.log(calculateCircumference(radius));

// //CALCULATE THE DIAMETERR OF CIRCLE

// const calculateDiameter=function(radius){
//     const output=[];
//     for (let i=0;i<radius.length;i++){
//         output.push(radius[i]*2);
//     }
//     return output;
// }
// console.log(calculateDiameter(radius));

// //****************************************************************** */
// //******* NOW WE WILL CONVERT THE ABOVE CODE INTO SHORTER ONE 
// //******************************************************************* */

// const area=function(radius){
//     return Math.PI*radius*radius;
// };

// const circumference=function(radius){
//     return 2*Math.PI*radius;
// }

// const diameter=function(radius){
//     return 2*radius;
// }

// const calculate=function(radius,logic){
//     const output=[];
//     for (let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }


// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));



// //***************NOW ALL THIS ABOVE CODE CAN BE CONVERT INTO A SINGLE LINE BY USING MAP 
// //MAP FUNCTION

// console.log(radius.map(area));
// console.log(radius.map(circumference));
// console.log(radius.map(diameter));




//*********************************************************** 
//**************************************************************** *
//********************************************************************* *
//************************************************************************** *
//******************************************************************************** *

//*******      USE OF MAP FUNCTION          ***********************************************************************************


// const arr=[1,2,3,4,5]

// function double(x){
//     return x*2;
// }
// const output=arr.map(double);
// console.log(output);


// function triple(x){
//     return x*3;
// }
// const ans=arr.map(triple);
// console.log(ans);


// //FOR DECIMAL TO BINARY ..........................................................................................
// //****************************************************************************************************

// function binary(x){
//     return x.toString(2);
// }
// const bin = arr.map(binary);
// console.log(bin);

// //OTHER WAY TO WRITE DECIMAL TO BINARY IN MAP FUNCTION.............................................................
// //**************************************************************************************************** *

// const bina=arr.map(function binary(x){
//     return x.toString(2);
// });
// console.log(bina);


//  //IN ARROW FUNCTION DECIMAL TO BINARY.............
//  //******************************************************************************* *
// const arr=[1,2,3,4,5]
//  const output=arr.map(x => x.toString(2));
//  console.log(output);


//**************************************************************************************************************
//***********   FILTER FUNCTION     ******************
//******************************************************************************************

//const arr=[1,2,3,4,5,]
// function isOdd(x){
//     return x%2;
// }
// const output=arr.filter(isOdd);
// console.log(output);

// function isEven(x){
//     return x%2===0;
// }
// const output=arr.filter(isEven);
// console.log(output);

// const output=arr.filter(x => x>4);
// console.log(output);


//*********************************************************************************************
//*******    REDUCE FUNCTION      *************************
//********************************************************************

// const arr=[1,2,3,4,5]
// function findSum(arr){
//     let sum=0;
//     for (let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// const result=findSum(arr);
// console.log(result);

//>>>>>>>NOW THE SAME CODE IN REDUCE FUNCTION<<<<<<<<<

// const arr=[1,2,3,4,5]
// const output=arr.reduce(function (sum,curr){
//     sum=sum+curr;
//     return sum;
// },0);
// console.log(output);


//*************FIND THE MAX****************** */
// const arr=[1,2,3,4,5];
// const a=function(x){
//     return x%2===0;
// };
// const b=function(array){
//     for(let i=0;i<arr.length;i++){
//         if(a(arr[i])){
//             console.log(arr[i]);
//         }
//     }
// };
// b(arr);


// function p(a,b){
//     return function mul(){
//         console.log(a*b)
//     }
// };
// // q=p(2,3)();
// function xyz(){
//     return p(2,3)();
// }
// xyz();

// function a(){
//     return function b(){
//         console.log("Sunday");
//     }
// }
// function c(pass){
//     pass()
//     console.log("Monday")
// }
// let g = a()
// c(g)


// let arr=[1,2,3,4,5,6]
// let output=arr.reduce(function(acc,occ) {
//     acc={
//         sum: acc.sum+occ,
//         mul: acc.mul+occ
//     }  
//     return acc;

// },{sum:0,mul:1});
// console.log(output);

// let arr=[1,2,3,4,5,6]
// let output=arr.reduce(function(acc,occ) {
//     acc={
//         0:acc[0]+=occ,
//         1:acc[1]*=occ={}
//     }  
//     return acc;

// },[0,1]);
// console.log(output);






// **********************************************************************************************************************
// ***************PRACTICE QUESTIONS*********************************************************************************************
// ******************************************************************************************

// //Question: You are given a list of dictionaries containing the information of students (name, age, and score). 
// //Use reduce to find the total sum of scores.

// const students=[
//     {name:"komal",age:21,score:98},
//     {name:"Riya",age:22,score:81},
//     {name:"khushi",age:22,score:89}
// ];
// const output=students.reduce((sum,students)=> sum+students.score,0);
// console.log(output);
// // const student = [
// //     { name: "komal", age: 21, score: 98 },
// //     { name: "Riya", age: 22, score: 81 },
// //     { name: "khushi", age: 22, score: 89 }
// // ];

// // const output = student.reduce((sum, student) => sum + student.score, 0);
// // console.log(output);


// //Question: Given a list of integers, use map to square each element.

// const input=require("readline-sync")
// let arr=input.question().split(",").map(Number)
// function square(x){
//     return x*x;
// }
// const output=arr.map(square);
// console.log(output);


// //Question: You are given a list of strings representing sentences. Use filter to keep only the sentences longer than 10 characters.

// const input=require("readline-sync")
// const arr=input.question().split(",")
// function long(x){
//     return x.length > 10;
// }
// const output=arr.filter(long);
// console.log(output)


// //Question: Given a list of integers, use reduce to find the maximum element.

// const input=require("readline-sync")
// const arr=input.question().split(",").map(Number);
// function max(acc,curr){
//     if(acc>curr){
//         return acc;
//     }
//     else{
//         return curr;
//     }
// }
// const output=arr.reduce(max,arr[0]);
// console.log(output)


// //Question: You are given a list of dictionaries containing the information of students (name, age, and score). Use filter to keep only the students whose score is above 80.

// const reduce=require("readline-sync");
// const arr=[
//     {name:"komal",age: 21,score: 89},
//     {name:"khushi",age:21,score:73},
//     {name:"nikita",age:23,score:80}  
// ]
// function max(x){
//     return x.score>=80
// }
// const output=arr.filter(max);
// console.log(output)


// //Write a Python program to triple all numbers in a given list of integers. Use Python map.

// const input=require("readline-sync")
// const arr=input.question().split(",").map(Number)
// function triple(x){
//     return x*x*x;
// }
// const output=arr.map(triple);
// console.log(output);
// const c=arr.map(Number);
// console.log(c);


// //Write a Python program to square the elements of a list using the map() function.

// const input=require("readline-sync")
// const arr=input.question().split(",").map(Number)
// function square(x){
//     return x**2;
// }
// const output=arr.map(square);
// console.log(output);


// //Write a Python program to compute the sum of elements of an array of integers. Use the map() function.

// const input=require("readline-sync")
// const arr=input.question().split(",").map(Number);

// function add(){
//     let b=0;
//     for(let i=0;i<arr.length;i++){
//         b=b+arr[i];
//     }
//     return b;
// }
// const output=add();
// console.log(output);


// //3. Write a Python program to listify the list of given strings individually using Python map.

// const input=require("readline-sync")
// const arr=input.question()
// function listify(arr){
//     return arr.split("");
// }
// // const output=listify(arr).map(function(char){
// //     return [char];
// // });

// const output=listify(arr);
// console.log(output)
// //the difference between normal function and map function here is that map gives 
// //separate list to each character and normal function only split the characters


// //Write a Python program to create a list containing the power of said number in bases raised to the corresponding number in the index using Python map.

// const input=require("readline-sync")
// const arr=input.question().split(",").map(Number)
// function power(x,y){
//     return Math.pow(x,y);
   
// }
// const output=arr.map(power);
// console.log(output)


// //to remove all the duplicate in array

// const input=require("readline-sync")
// const arr=input.question().split("")
// const mySet=new Set(arr);
// console.log(mySet);


// //Write a Python program to convert all the characters into uppercase and lowercase and eliminate duplicate letters from a given sequence. Use the map() function.

// const input=require("readline-sync")
// const arr=input.question().split(",")//.map(Number);
// function up(x){
//     return x.toUpperCase()
// }
// const output=arr.map(up);
// console.log(output.join(''))


// const input=require("readline-sync")
// const arr=input.question().split(" ");
// function low(x){
//     return x.toLowerCase();
// }
// const output=arr.map(low);
// console.log(output);


// //Write a Python program to add two given lists and find the difference between them. Use the map() function.

// const input=require("readline-sync")
// let a=input.question().split(",").map(Number)
// let b=input.question().split(",").map(Number)
// let p=[]
// if (a.length > b.length){
//     for(let i=0;i<a.length;i++){
//         p.push(a[i]-(b[i] || 0))

//     }
// }
// else{
//     for(let i=0;i<b.length;i++){
//         p.push((a[i] || 0)-b[i])
// }
// }

// console.log(p)



// //Write a Python program to compute the square of the first N Fibonacci numbers, using the map function and generate a list of the numbers.

// const input=require("readline-sync");
// const n=input.questionInt();
// function fab(){
//     let p=[]
//     p[0]=0
//     let a=0;
//     console.log(a)
//     let b=1
//     i=1
//     while(i<=n){
//         if (i<n){
//             t=a;
//             a=b;
//             b=t+a
//             //console.log(a*a)
//             p.push(a*a);
//         }
//         i=i+1
//     }
//     return p;
// }
// console.log(fab(n));


let char="a"
let value=char.charCodeAt(0);
console.log(value)

let c=78
let v=String.fromCharCode(c)
console.log(v)