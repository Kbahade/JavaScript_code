// // *******************************************************************************************
// // ****************CREATING A SET********************************************************
// // ***********************************************************************************

// //*********WITH USER INPUT*** */

// // const input=require("readline-sync");
// // let mySet=new Set();
// // let a=input.question();
// // let b=a.split("").map(Number);
// // let arr=new Set(b);
// // console.log(arr);

// //************WITHOUT USER INPUT***************************** */

// let mySet=new Set();
// let num=new Set([1,2,3,4,5]);
// console.log(num);

// //**********ADDING THE ELEMENTS********* */

// num.add(6);
// console.log(num);

// //****************DELETE THE ELEMENT************ */

// num.delete(2);
// console.log(num);

// //*****************CHECKING THE SIZE OF SET********** */

// console.log(num.size);

// //**************CHECKING THE EXISTENCE********* *

// console.log(num.has(2));
// console.log(num.has(3));

// //*************ITERATING THROUGH A SET************** */

// //BY USING FOREACH METHOD

// num.forEach(function(value){
//     console.log(value);
// })

// //**************CONVERTING SET TO ARRAY******** */

// //*********BY USING Array.from()  METHOD */

// let numAr=Array.from(num);

// //*********BY USING (`...`) METHOD */

// let num_ar=[...num];
// console.log(numAr,num_ar);


//*****************TO CLEAR THE SET******************* */

//num.clear();


// ***********************************************************************************************
// ********************QUESTIONS ON SET********************************************************
// ************************************************************************************

const mySet=new Set();
let num=new Set([1,2,3]);
console.log(num);

num.add(4);
console.log(num);

console.log(num.has(2));

num.delete(3);
console.log(num);

let a=num.size;
console.log(a);

num.clear();
console.log(num);

let arr=Array.from(num);
console.log(arr);

let array=new Set(arr);
console.log(array);

