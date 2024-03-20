// The [...] syntax in javaScript is called the spread syntax.
// It has multiple use cases and provides a consixe way to work witharrays and objects.

// // 1.COPYING ARRAYS

// // it is use to create a shallow copy of an array;

// const arr=[1,2,3,4]
// const output=[...arr];
// console.log(output)



// // 2.CONCATENATING ARRAYS

// // to concatenate arrays without modifying the original arrays;

// const arr1=[1,2,3,4]
// const arr2=[5,6,7,8]
// const combine=[...arr1,...arr2];
// console.log(combine)



// // 3.PASSING ELEMETNS AS FUNCTION ARGUMENTS

// // TO pass individual array elements as arguments to a function

// const arr=[1,2,3]
// function sum(a,b,c){
//     return a+b+c;
// }
// const result=sum(...arr);
// console.log(result)



// // 4. CREATING ARRAY COPIES WITH MODIFICATIONS

// // to create a new array with modifications to certain elements;

// const arr1=[1,2,3,4]
// const arr2=[...arr1,5,6];
// console.log(arr2)



// // 5.MERGING OBJECTS

// // to merge properties of multiple objects into a new objects

// const obj1={a:1,b:2}
// const obj2={b:3,c:4};
// const merge={...obj1,...obj2}
// console.log(merge)



