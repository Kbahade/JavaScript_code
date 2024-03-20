// const input=require("readline-sync");
// let t=input.questionInt();
// for(let i=0;i<t;i++)
// {
//     let [x,y]=input.question().split(" ").map(Number);
    
//     let b=x+y;
//     if(b>6){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
// }



// const input=require("readline-sync");
// let t=input.questionInt()
// for(let i=0;i<t;i++){
//     let n=input.questionInt()
//     if(n<=10){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
// }



// //************if we wants to take multiple input in one line then the following is the syntax of it */

// const input=require("readline-sync");
// let t=input.questionInt();
// for(let i=0;i<t;i++){
//     let [n,x,y]=input.question().split(" ").map(Number)
//     if(n<=x*y){
//         console.log("YES");
//     }
//     else{
//         console.log("NO");
//     }
// }



// //codechef,buying a new tablet

// const input=require("readline-sync")
// let t=input.questionInt()
// for(let i=0;i<t;i++){
//     const [n,b]=input.question().split(" ").map(Number);
//     const w=Array(n).fill(0);            //************************this is to take three array input in a loop
//     const h=Array(n).fill(0);
//     const p=Array(n).fill(0);
//     let max=0;
//     for(let i=0;i<n;i++){
//         [w[i],h[i],p[i]]=input.question().split(" ").map(Number);

//     }
//     for (let j=0;j<n;j++){
//         if(p[j]<=b){
//             if (h[j]*w[j] > max){
//                 max=h[j]*w[j];
//             }
//         }
//     }
//     if(max==0){
//         console.log("no tablet");
//     }
//     else{
//         console.log(max);
//     }
// }



// //Write a Python program to find the ratio of positive numbers, negative numbers and zeroes in an array of integers.

// const input=require("readline-sync")
// const arr=input.question().split(",").map(Number)
// function cal(){
//     let n=0;
//     let p=0;
//     let z=0;
//     for(let i=0;i<arr.length;i++){
//         if (arr[i]<0){
//             n++;
//         }
//         else if (arr[i]>0){
//             p++;
//         }
//         else{
//             z++;
//         }      
//     }
//     let rn=n/arr.length;
//     let rp=p/arr.length;
//     let rz=z/arr.length;
//     return [rn,rp,rz];

// }
// console.log(cal());


// //Write a Python program to count the same pair in two given lists

// const input=require("readline-sync");
// let a=input.question().split(",");
// let b=input.question().split(",");
// function samepair(arr1,arr2){
//     const result=[]
//     for (const element of arr1){
//         if(arr2.includes(element)){
//             result.push(element)
//         }
//     }
//     return result;
// }
// result=samepair(a,b)
// console.log(result)
// console.log(result.length)


// // Given an array of numbers, use filter to create a new array containing only the prime numbers.

// const input=require("readline-sync")
// const arr=input.question().split(",").map(Number)
// const prime=arr.filter(function(x){
    
//     let c=0
//     for(let i=2;i<=x/2;i++){
//         if (x%i==0){
//             c=c=1
//         }    
//     }
//     return c===0 && x>1;
// }
// )
// console.log(prime)


// Given an array of objects representing students with their grades, use map to create a new array where each student's grade is increased by 10.

// const input=require("readline-sync")
// const n=input.questionInt()
// let obj=[]
// for(let i=0;i<n;i++){
//     let name=input.question()
//     let age=input.questionInt()
//     let grade=input.questionInt()
//     obj.push({name,age,grade});
// }

// const output=obj.map((x)=>({
//     ...x,
//     grade: x.grade+10
// }))
// console.log(output)
// 




// #############################################################################################################################################################

// name = "komal";
// age = "19"
// let obj = {
//     name,
//     age,
//     kom :{
//         name,
//         age,
//     }
// }

// let newobj = structuredClone(obj);

// console.log(newobj);
// console.log(obj);

// #####################################################################################################################3333333333333333333333###############3333333333333333333333333


// // Given an array of transactions, where
// //  each transaction is an object with amount and
// //   type properties (either 'debit' or 'credit'), 
// //   use reduce to find the total balance. Debits 
// //   should decrease the balance, 
// // and credits should increase it.

// const input=require("readline-sync")
// const transactions=[]
// const n=input.questionInt()
// for(let i=0;i<n;i++){
//     let amount=input.questionInt()
//     let type=input.question()
//     transactions.push({amount,type})
// }

// const output=transactions.reduce(function(acc,curr){
//     if (curr.type==="debit"){
//         acc=acc-curr.amount;
//     }
//     else if(curr.type==="credit"){
//         acc=acc+curr.amount;
//     }
//     return acc;
// },0);
// console.log(output)



// // You are given an array of financial transactions,
// //  where each transaction is represented as an object with two
// //   properties: amount (a numerical value) and type 
// //   (a string representing either 'debit' or 'credit').
// //    Your task is to use the reduce function to calculate
// //     the total balance based on these transactions. 
// // Debits should decrease the balance, and credits should increase it.

// const input=require("readline-sync")
// const n=input.questionInt()
// const transaction=[]
// for(let i=0;i<n;i++){
//     let amount=input.questionInt()
//     let type=input.question()
//     transaction.push({amount,type})
// }
// const output=transaction.reduce(function(acc,curr){
//     if(curr.type==="debit"){
//         acc=acc-curr.amount;
//     }
//     else if(curr.type==="credit"){
//         acc=acc+curr.amount;
//     }
//     return acc
// },100)
// console.log(output)


// // You are given an array of financial transactions, where
// //  each transaction is represented as an 
// //  object with two properties: amount (a numerical value) and 
// //  type (a string representing either 'debit' or 'credit'). 
// // Your task is to use the filter function to create a new array 
// // containing only the debit transactions.

// // Write a JavaScript program that takes input for the number 
// // of transactions and then collects the amount and type for each 
// // transaction. Finally, use the filter function to create and display 
// // a new array containing only the debit transactions.

// const input=require("readline-sync")
// const n=input.questionInt()
// const arr=finance=[];
// for(let i=0;i<n;i++){
//     let amount=input.questionInt()
//     let type=input.question()
//     finance.push({amount,type})
// }

// const output=arr.filter(function(x){
//     return x.type==="debit"
// }
// )
// console.log(output)



// // You are given an array of financial transactions, 
// // where each transaction is represented as an object with two 
// // properties: amount (a numerical value) and type (a string representing
// // either 'debit' or 'credit'). Your task is to use the reduce function 
// // to calculate the total sum of credit transactions.

// const input=require("readline-sync")
// const n=input.questionInt()
// const arr=[]
// for(let i=0;i<n;i++){
//     let amount=input.questionInt()
//     let type=input.question()
//     arr.push({amount,type})
// }
// const output=arr.reduce(function(acc,curr){
//     if(curr.type==="credit"){
//         return acc=acc+curr.amount;
//     }
//     return acc;
// },0)
// console.log(output)



// // You are given an array of financial transactions, where each transaction
// //  is represented as an object with two properties: amount (a numerical value) 
// //  and type (a string representing either 'debit' or 'credit').
// //   Your task is to use the filter function to create a new array
// //    containing only the transactions with amounts greater than 100.

// const input=require("readline-sync")
// const n=input.questionInt()
// const arr=[]
// for(let i=0;i<n;i++){
//     let amount=input.questionInt()
//     let type=input.question()
//     arr.push({amount,type})
// }
// const output=arr.reduce(function(acc,curr){
//     if(curr.type==="credit"){
//         acc=acc+curr.amount;
//     }
//     else if(curr.type==="debit"){
//         acc=acc-curr.amount;
//     }
//     return acc;
// },0)
// console.log(output)



// // Given an array of words, convert them to uppercase using map,
// //  filter out words that contain the letter 'a' using filter, 
// // and concatenate the remaining words into a single string using reduce.

// const input=require("readline-sync")
// const n=input.question()
// const words=n.split(",");
// const output=words.map(function(word){
//     return word.toUpperCase();
// })
// .filter(function(word){
//     return word.includes("A");
// })
// .reduce(function(acc,word){
//     return acc+word+" ";
// },"")
// // .trim();
// console.log(output)



// //filter to remove duplicate items, 

// const input=require("readline-sync")
// const arr=input.question().split(",").map(Number)
// const output=arr.filter(function(value,index,self){
//     return self.indexOf(value)===index;
// })
// console.log(output)



// // Nested Operations:
// // Given an array of users, each with an array of purchased items,
// //  use map to extract all the items into a single array,
// //   filter to remove duplicate items,
// //  and reduce to count the occurrences of each item.

// const input=require("readline-sync")
// const n=input.questionInt()
// const arr=[]
// for(let i=0;i<n;i++){
//     let name=input.question()
//     let purchase=input.question().split(",")
//     arr.push({name,purchase})
// }
// const output=arr.map(function(x){
//     return x.purchase
// }).flat();
// const uniqueItem=output.filter(function(value,index,self){
//     return self.indexOf(value)===index
// });
// const count=output.reduce(function(acc,curr){
//     acc[curr]=(acc[curr] || 0)+1
//     return acc;
// },{})
// console.log(output,uniqueItem,count)



// // Combining Map and Filter:
// // Given an array of strings, use map to convert each string to 
// // an object with a length property, and then use filter to create 
// // a new array containing only objects with an odd length.

// const strings = ["apple", "banana", "orange", "grape", "kiwi"];
// const objs=strings.map(function(str){
//     return {value: str,length:str.length}
// });
// const output=objs.filter(function(x){
//     return (objs.value,objs.length)
// })
// console.log(output)



// // Flatten and Transform:
// // Given a nested array of numbers, use reduce to flatten the array 
// // and then use map to square each number in the flattened array.

// const input=require("readline-sync")
// const arr=[[1, 2], [3, 4, 5], [6, 7, 8, 9]]
// const arr2=arr.reduce(function(acc,curr){
//     return arr.flat(3)
// })
// const output=arr2.map(function(x){
//     return x**2;
// })
// console.log(arr2)
// console.log(output)



// // Advanced Mapping with Objects:
// // Given an array of objects representing books with title and 
// // author properties, use map to create a new array
// //  of strings where each string is in the format "Title by Author".

// const objs=[
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//     { title: "To Kill a Mockingbird", author: "Harper Lee" },
//     { title: "1984", author: "George Orwell" }
//   ]
// const output=objs.map(function(x){
//     return (x.title+" "+"by"+" "+x.author)
// })
// console.log(output)



// // Advanced Filtering with Dates:
// // Given an array of objects representing events with name and date 
// // properties, use filter to create 
// // a new array containing only events that occurred in the current year.

// const arr=[
//     { name: "Birthday Party", date: "2024-02-15" },
//     { name: "Conference", date: "2023-11-20" },
//     { name: "New Year's Eve Celebration", date: "2024-12-31" }
//   ]
// const output=arr.filter(function(x){
//     return x.date>="2024-01-01" && x.date<="2024-12-31";
// })
// console.log(output)



// // Advanced Reducing with Objects:
// // Given an array of objects representing sales with product and quantity 
// // properties, use reduce to create an object where keys are unique 
// // product names, 
// // and values are the total quantity sold for each product.

// const arr=[
//     { product: "Laptop", quantity: 10 },
//     { product: "Smartphone", quantity: 15 },
//     { product: "Tablet", quantity: 8 },
//     { product: "Laptop", quantity: 5 }
//   ]
// const output=arr.reduce(function(acc,curr){
//     const {product,quantity}=curr;
//     if(acc.hasOwnProperty(product)){
//         acc[product]+=quantity;
//     }else{
//         acc[product]=quantity;
//     }
//     return acc;
// },{})
// console.log(output)




// // Advanced Mapping with Condition:
// // Given an array of numbers, use map to create a new array 
// // where positive numbers are squared,
// //  and negative numbers are converted to their absolute values.

// const input=require("readline-sync")
// const arr=input.question().split(",").map(Number)
// const output=arr.map(function(x){
//     if(x>0){
//         return x**2;
//     }else{
//         return Math.abs(x)
//     }
// })
// console.log(output)



// // Advanced Filtering with Objects:
// // Given an array of objects representing employees with name,
// //  salary, and department properties, use filter to create a new array
// //   containing only employees 
// // with a salary greater than 50000 in the 'Engineering' department.

// const arr=[
//     { name: 'Alice', salary: 60000, department: 'Engineering' },
//     { name: 'Bob', salary: 45000, department: 'Marketing' },
//     { name: 'Charlie', salary: 55000, department: 'Engineering' },
//     { name: 'David', salary: 70000, department: 'Finance' }
//   ]
// const output=arr.filter(function(x){
//     return x.salary>50000;
// })
// console.log(output)




// // Combining Map, Filter, and Reduce:
// // Given an array of strings, use map to extract the unique words, 
// // filter to remove words with less than 3 characters, and 
// // reduce to create an object 
// // where keys are the words and values are the counts of each word.

// const input=require("readline-sync")
// const arr=input.question().split(",")
// const unique=Array.from(new Set(arr.map(function(x){
//     return x;
// })))
// const less=unique.filter(function(x){
//     return x.length>3;
// })
// const objs=unique.reduce(function(acc,curr){
//     acc[curr]=curr.length
//     return acc;
    
// },{})
// console.log(unique)
// console.log(less)
// console.log(objs)



// // Advanced Filtering with Strings:
// // Given an array of strings, use filter to create 
// // a new array containing only strings with more than three vowels.

// const input=require("readline-sync")
// const arr=input.question().split(",")
// function vowel(str){
//     let vow="aeiouAEIOU"
//     let count=0

//     for(const char of str){
//         if(vow.includes(char)){
//             count++;
//         }
//     }return count;
// }
// const output=arr.filter(function(x){
//     return vowel(x)>3
// })
// console.log(output)



// // Advanced Reducing with Arrays:
// // Given an array of arrays containing numbers,
// //  use reduce to find the average of each inner array.

// const arr=[[10, 20, 30], [40, 50, 60], [70, 80, 90]]
// const inner=arr.map(function(innerarray){
//     return innerarray.reduce(function(acc,curr){
//         return acc+curr;

//     },0)/innerarray.length;
// })
// console.log(inner)

// const arr=[[2, 4, 6, 8], [1, 3, 5, 7], [10, 20, 30, 40]]
// const ave=arr.map(function(inner){
//     return inner.reduce(function(acc,curr){
//         return acc+curr;
//     },0)/inner.length
// })
// console.log(ave)



// // Chaining Operations with Objects:
// // Given an array of objects representing orders with product and 
// // quantity properties, use map to calculate the total cost for each 
// // order (assuming a fixed price per product) 
// // and then use reduce to find the overall total cost of all orders.

// const orders = [
//     { product: 'Laptop', quantity: 2 },
//     { product: 'Mouse', quantity: 3 },
//     { product: 'Keyboard', quantity: 1 }
//   ];
  
//   // Assumed fixed prices per product
//   const prices = {
//     Laptop: 100,
//     Mouse: 50,
//     Keyboard: 25
//   };
// const mul=orders.map(function(x){
//     return prices[x.product]*x.quantity;
// })
// const output=mul.reduce(function(acc,curr){
//     return acc+curr;
// })
// console.log(mul)
// console.log(output)



// // Advanced Filtering with Custom Function:
// // Given an array of numbers, use filter with a custom function 
// // to create a new 
// // array containing only numbers that are divisible by both 3 and 5.

// const input=require("readline-sync")
// const arr=input.question().split(",").map(Number)
// const output=arr.filter(function(x){
//     return x%3===0 && x%5===0
// })
// console.log(output)



// // Advanced Reducing with Condition:
// // Given an array of numbers, use reduce to 
// // find the sum of all even numbers and the product of all odd numbers.

// const input=require("readline-sync")
// const arr=input.question().split(",").map(Number)
// const output=arr.reduce(function(acc,curr){
//     if(curr%2===0){
//         acc.sum=acc.sum+curr;
//     }
//     else{
//         acc.pro=acc.pro*curr
//     }
//     return acc;
// },{sum: 0,pro:1})
// console.log(output)



// // Array Manipulation:
// // Given an array of numbers, write a function to
// //  find the sum of all positive numbers.
// // Implement a function 
// // that removes duplicates from an array while preserving the order.

// const input=require("readline-sync")
// const arr=input.question().split(",").map(Number)
// const output=arr.reduce(function(acc,curr){
//     if(curr>0){
//         return acc+=curr
//     }
//     return acc;
// },0)
// const output2=Array.from(new Set(arr));
// console.log(output)
// console.log(output2)



// // String Manipulation:
// // Write a function to reverse a string without using the built-in reverse method.
// // Create a function that checks if a given string is a palindrome 
// // (reads the same backward as forward).

// const input=require("readline-sync")
// const arr=input.question().split("")
// function reversestr(arr){
//     let reverseArr=[]
//     for(let i=arr.length-1;i>=0;i--){
//         reverseArr.push(arr[i]);

//     }
//     return reverseArr.join("")
// }
// const arr2=reversestr(arr);
// console.log(arr2)
// if(arr2==arr.join("")){
//     console.log("palidrome")
// }
// else{
//     console.log("not")
// }



// Sorting and Filtering:
// Given an array of objects with a numeric property, 
// sort the array based on that property.
// Filter an array of strings 
// to include only those that contain a specific substring.

const input=require("readline-sync")
const arr=[]
const n=input.questionInt()
for(let i=0;i<n;i++){
    

}





