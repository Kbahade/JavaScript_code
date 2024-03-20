// obj={
//     "a" : 2,
//     "b" : 3,
//     "c" : 4
// };
// for (i in obj){
//     console.log(obj.i);

// }

// console.log(obj.a);
// for (i in obj){
//     console.log(obj[i]);

// }

// const radius=[3,1,2,4];
// const calculateArea = function (radius) {
//     const output = [];
//     for (let i=0;i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };
// console.log(calculateArea(radius));


// const arr=[1,3,5,6,4,2,9];
// const twice=function(double) {
//     const p=[]
//     for (let i=0;i<arr.length;i++){
//         p.push(arr[i]*2);
//     }
//     return p;

// };
// console.log(twice(arr));

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question("Please enter your name: ", (userInput) => {
//     console.log("User entered:", userInput);
//     rl.close();
// });





// const userInput=prompt();
// if (userInput != null){
//     console.log(userInput);
// }else{
//     console.log("no input");
// }


// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// // Prompt the user for the first number (A)
// rl.question("Enter the first number (A): ", (inputA) => {
//     // Convert the input to a numeric value
//     const numberA = parseFloat(inputA);

//     // Prompt the user for the second number (B)
//     rl.question("Enter the second number (B): ", (inputB) => {
//         // Convert the input to a numeric value
//         const numberB = parseFloat(inputB);

//         // Calculate the quotient and remainder
//         const quotient = Math.floor(numberA / numberB);
//         const remainder = numberA % numberB;

//         // Display the results
//         console.log(`Quotient: ${quotient}`);
//         console.log(`Remainder: ${remainder}`);

//         // Close the interface
//         rl.close();
//     });
// });



//   ********user input********



// const input = require("readline-sync");
// var a = input.questionInt("enter num ");
// var b = input.questionInt("enter num ");
// console.log(a);
// console.log(b);
// let sum ;
//  sum= a+b
//  console.log(sum);



//  const input = require("readline-sync");
//  var a=input.questionInt();
//  var b = input.questionInt()
//  var d= a / b;
//  console.log(d);



// const input = require("readline-sync");
// var date=input.questionInt();
// var month=input.questionInt();
// var year=input.questionInt();
// console.log(date,month,year);




// const input = require("readline-sync");
//  let a= input.question();
// // var b= input.question();
// // var sum = a+b;
// // console.log(sum);
// for(let i=0;i<=a;i++)
// {
//     console.log(i)
// }


// ********************array*********************


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter elements separated by commas: ', (inputString) => {

//   const array = inputString.split("").map(item => item.trim());
  
//   console.log("Entered array:", array);

//   rl.close();
// });




// const prompt = require("prompt-sync")();
// let n = prompt("enter number");   //n=number.parseInt(n);
// for (let i=0;i<=n;i++) {
//     let k="";
//     for (let j=0;j<i;j++) {
//         k=k+ "*"
//     }
//     console.log(k);
// }


// const prompt=require("prompt-sync")();
// let n= prompt("enter name");
// n=Number.parseInt(n);
// let sum = 0;
// for (let i=0;i<n;i++) {
//     console.log(i);
//     sum = sum+i;
// }
// console.log(sum);




// const input=require("readline-sync");
//     let a = input.questionInt()
//     if (a>0){
//         console.log("Positive");
//     } 
//     else if(a<0){
//         console.log("Negative");
//     }
//     else {
//         console.log("Zero")
//     }




// const input=require("readline-sync");
// let a = input.questionInt();
// let b = input.questionInt();
// let c = input.questionInt();
// if (a>b && a>c){
//     console.log(a);
// }else if(b>c && b>a){
//     console.log(b);
// }else{
//     console.log(c);
// }





// const input=require("readline-sync");
// let a=input.questionInt();
// let b = input.questionInt(); 
// for (var i = 1;i<=b;i++){
//     console.log(i*a);
// }




// const input=require("readline-sync");
// let a=[];
// for (var i =0;i<6;i++){
//     let b=input.questionInt();
//     // console.log(b*2);
//     a.push(b*2);
// }
// console.log(a);




// const input=require("readline-sync");
// let a=[];
// for (var i=0;i<8;i++){
//     let b=input.questionInt();
//     a.push(b);
// }
// a.sort();
// let r=a.length;
// console.log(a[r-2]);



// const prompt = require("prompt-sync")();
// const Input = prompt("Please enter a value: ");

// let k = Input.split("");
// let s = "";

// for (let i of k) {
//     if (!s.includes(i)) {
//         let count = Input.split(i).length - 1;
//         console.log(`${i} = ${count}`);
//         s += i;
//     }
// }


// const prompt = require("prompt-sync")();
// const Input = prompt("Please enter a value: ");

// let k = Input.split("");
// let s = "";

// for (let i of k) {
//     if (!s.includes(i)) {
//         let count = Input.split(i).length - 1;
//         console.log(i + " = " + count);
//         s += i;
//     }
// }




// const input=require("readline-sync");
// let b=[2,4,3,5,6];
// let a= new Set(b);
// console.log(a);
 





// const input=require("readline-sync");
// let obj={
//     key: function(){
//         console.log("a");
//     }
// }
// obj.key();
// obj[key]();



// #####**NESTED OBJECT INPUT FROM THE USERu*#####
// *** IN THIS CODE WE TAKE INPUT ONLY ONE KEY MAIL AND OTHER VALUES OF KEY ***

// const rl = require("readline-sync");
// // Ask the user to enter keys and values
// let key = rl.questionEMail("Enter a key: ");
// let value = rl.question("Enter a value: ");
// let value1 = rl.questionInt("Enter another value: ");
// let value2 = rl.question("Enter one more value: ");

// // Initialize an empty object
// const obj4 = {};

// // Initialize nested objects as needed
// obj4[key] = {};
// // AFTER . THE NAME ,NUMBER , PASSWORD WILL BE CONSTANT****
// obj4[key].name = value;
// obj4[key].number = value1;
// obj4[key].password=value2;

// // Print the resulting object
// console.log(obj4);



// #####**NESTED OBJECT INPUT FROM THE USERu*#####
// *** TAKING INPUT ALL KEY AND VALUE ****




//************************Question reverse a string**************** */


// const input=require("readline-sync");
// let a=input.question();

// let p=[];
// let j=0;
// let b=a.split("");
// let i=a.length-1;
// while (i>=0){
//     p[j]=b[i];
//     j++;
//     i--;
// }
// let r=p.join("");
// console.log(r);

//****THE ABOVE CODE IN SMALL WAY *******/

// const input=require("readline-sync");
// let a=input.question();
// let reversedString=a.split("").reverse().join("");
// console.log(reversedString);


// //****************sum of all numbers in array******************

// const input=require("readline-sync");
// let a=input.question();
// let b=a.split(" ").map(Number);
// let c=0;
// let add=function(arr){
//     for(let i=0;i<arr.length;i++){
//         c=c+arr[i];
//     }  
// };
// add(b);
// console.log(c);


// //******************PALIDROME NUMBER************************************************
 
// const input=require("readline-sync");
// let a=input.question();
// let c=a.split("").reverse().join("");
// if(a===c){
//     console.log("True");
// }
// else{
//     console.log("False");
// }


// //************************PRIME NUMBER***********************************************

// const input=require("readline-sync");
// let n=input.questionInt()
// let c=0;
// for(let i=2;i<n;i++){
//     if (n%i==0){
//         c=c+1;
//     }
// }
// if(c==0){
//     console.log("True");

// }
// else{
//     console.log("False");
// }


// //**********************longest string in array***********************

// const input=require("readline-sync");
// let a=input.question();
// let b=a.split(",");
// let maxlength=0;
// let longstr="";
// for(let i=0;i<b.length;i++){
//     let curlength=b[i].length;
//     if (curlength>maxlength){
//         maxlength=curlength;
//         longstr=b[i];
//     }
// }
// console.log(longstr);
   


// //**************************COUNT OF VOWEL IN SENTENCE****************************

// const input=require("readline-sync");
// let a=input.question();
// let c=0;
// for(let i=0;i<a.length;i++){
//     if (a[i]=="a" || a[i]=="e" || a[i]=="i" || a[i]=="o" || a[i]=="u"){
//         c=c+1;
//     }
// }
// console.log(c);


// //************************** returns the string with all vowels replaced by asterisks (*).******************************/

// const input=require("readline-sync");
// let a=input.question();
// let b="";
// for(let i=0;i<a.length;i++){
//     if(a[i]=="a" || a[i]=="e" || a[i]=="i" || a[i]=="o" || a[i]=="u"){
//         b+="*";
//     }
//     else{
//         b+=a[i];
//     }
// }
// console.log(b);


// //  **********************FIND ODD********************

// const input=require("readline-sync");
// let a=input.question();
// let b=a.split("").map(Number);
// function isOdd(x){
//     return x%2!==0;
// }
// const c=b.filter(isOdd);
// console.log(c);


// //********************FIND EVEN************************** */

// const input=require("readline-sync");
// let a=input.question()
// let b=a.split("").map(Number);
// function isEven(x){
//     return x%2===0;
// }
// const c=b.filter(isEven);
// console.log(c);


//*********************** frequency*/

// const input = require("readline-sync");
// const inputString = input.question("Enter a string: ");

// // Initialize an empty object to store character frequencies
// const charFrequency = {};

// // Loop through each character in the input string
// for (const char of inputString) {
//   // If the character is not in the object, initialize its frequency to 1
//   // Otherwise, increment its frequency
//   charFrequency[char] = (charFrequency[char] || 0) + 1;
// }

// console.log(charFrequency);


// //*************************ELEMENTS THAT ARE PRESENT IN BOTH ARRAY*************** */

// const input=require("readline-sync");
// function commonelement(arr1,arr2){
//     return arr1.filter(element => arr2.includes(element));
// }
// let arr1=input.question().split(",").map(Number);
// let arr2=input.question().split("").map(Number);

// const output=commonelement(arr1,arr2);
// console.log(output);


// //**********sum of all numbers till n********** */

// const input=require("readline-sync");
// let n=input.questionInt();
// let sum=0;
// for(let i =0;i<=n;i++){
//     sum=sum+i;
// };
// console.log(sum);


// //***************FACTORIAL OF A NUMBER ***********/

// const input=require("readline-sync");
// let n=input.questionInt();
// let fact=1;
// for(let i=1;i<=n;i++){
//     fact=fact*i;
// }
// console.log(fact);


// //*****************FABONACCI SERIES************** */

// const input=require("readline-sync");
// let n=input.questionInt();
// let a=0;
// let b=1;
// while(a<=n){
//     console.log(a);
//     let temp=a;
//     a=b;
//     b=temp+b;
// }
 

// //************number of digits in given number************** */

// const input=require("readline-sync");
// let n=input.question();
// let r=n.length;
// console.log(r);


// //*************reverse a string using a loop********* *******/

// const input=require("readline-sync");
// let n=input.question();
// let str="";
// for (let i=n.length-1;i>=0;i--){
//     str+=n[i];
// }
// console.log(str);


// //***************** sum of all digits in a number***********/

// const input=require("readline-sync");
// let n=input.question().split("").map(Number);
// let sum=0;
// for (let i = 0;i<n.length;i++){
//     sum=sum+n[i];
// }
// console.log(sum);




// const prompt = require("prompt-sync")();
// const Input = prompt("Please enter a value:");

// let characters = Input.split(" ");
// console.log(characters);

// let seenCharacters = "";

// for (let i of characters) {
//     if (!seenCharacters.includes(i)) {
//         let count = Input.match(new RegExp(i, "g")).length;
//         console.log(`${i} = ${count}`);
//         seenCharacters += i;
//     }
// }



// const input=require("readline-sync")
// const arr=input.question()
// const [a,b]=arr.split(",").map(Number)
// let c=a-b;
// console.log(c)




// const input=require("readline-sync")
// const arr=input.question()
// let [w,x,y,z]=arr.split(" ").map(Number)
// let a=w+((x-y)*z)
// console.log(a)











