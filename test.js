//1.Convert 24-hour time to 12-hour format with AM/PM


// const input=require("readline-sync")
// let time=input.question().split(":").map(Number)
//     if (time[0]>24 || time[1]>60){
//         console.log("Invalid time format")
//     }
//     else if (time[0] >12 && time[1]<60 && time[0]<25){
//         let a=time[0]-12;
//         if(a<10 && time[1]<10){
//             console.log("0"+a+":"+"0"+time[1]+" "+"AM")
//         }
//         else if(a<10 && time[1]>10){
//             console.log("0"+a+":"+time[1]+" "+"AM")

//         }
//         else if(a>9 && time[1]<10){
//             console.log(a+":"+"0"+time[1]+" "+"AM")

//         }
//         else{
//             console.log(a+":"+time[1]+" "+"AM")

//         }
//     }
//     else{
//         console.log(time[0]+":"+time[1]+" "+"PM")
//     }


9.

// const input=require("readline-sync")
// let arr=input.question().split(",")

// let p=[]
// function falsy(){
//     //let p=[]
//     let b=[false, null, 0, "",undefined, NaN]
//     let i=0;
//     while (i < arr.length){
//         if(arr[i] != null && arr[i] != false && arr[i] != 0 && arr[i] != undefined && arr[i] != "" && arr[i] != NaN){
//             p.push(arr[i])
//             console.log(arr[i])
//         }
//         i++
//     //console.log(arr[i])
//     }
//     return //console.log(p)
// }
// const output=arr.filter(falsy)
// console.log(output)




// // 7.Flatten Nested Arrays:
// // ○ Write a function that takes an array of nested arrays and returns a
// // flattened array (with no nested arrays).

// const input=require("readline-sync")
// let a=input.question().split("")
// let p=[]
// for(let i=0;i<a.length;i++){
//     if(a[i] != "," && a[i] != "[" && a[i] != "]" && a[i] != " " ){
//         //console.log(a[i])
//         p.push(a[i])
//     }
// }
// console.log(p.map(Number))



// // 6.Remove Duplicates:
// // ○ Write a function that removes duplicate elements from an array of strings.
// // ○ Use any of the higher order function (map,reduce,filter)
// // ○ JavaScript
// // const inputArray = ['apple', 'banana', 'apple', 'cherry',
// // 'banana'];

// const input = require("readline-sync");


// let inputString = input.question();
// let inputArray = inputString.split(",");

// function removeDuplicates(arr) {
//     let uniqueArray = arr.filter((value, index, self) => {
//         return self.indexOf(value) === index;
//     });
//     return uniqueArray;
// }

// const uniqueFruits = removeDuplicates(inputArray);
// console.log(uniqueFruits);
