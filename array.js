


// //MATRIX ARRAY


// var arr = [["ar", 18, "male"], ["sun", 19, "female"], ["sara", 21, "female"]];

// for (var a = 0; a < arr.length; a++) {
//     for (var b = 0; b < arr[a].length; b++) {
//         console.log(arr[a][b]);
//     }
// }


// //*********########## *ARRAY METHODS* #########**********


// //ARRAY SORT FUNCTION

// var a=["s","r","l","a","k"]
// a.sort();
// console.log(a);



// //ARRAY REVERSE FUNCTION

// var a=["s","r","l","a","k"]
// a.reverse();
// console.log(a);


// //ARRAY POP() FUNCTION    *********THIS FUNCTION DELETES THE LAST ELEMENT OF THE ARRAY

// var a=["s","r","l","a","k"]
// a.pop()
// console.log(a);



// //ARRAY PUSH() FUNCTION     *********THIS FUNCTION ADD ELEMENT IN THE LAST OF ARRAY

// var a=["s","r","l","a","k"]
// a.push("d");
// console.log(a);



// //ARRAY SHIFT() FUNCTION      *********THIS REMOVE THE FIRST ELEMENT FROM THE ARRAY

// var a=["s","r","l","a","k"]
// a.shift();
// console.log(a);


// //ARRAY UNSHIFT() FUNCTION     **********THIS ADD ONE ELEMENT IN THE STARTING OF ARRAY

// var a=["s","r","l","a","k"]
// a.unshift("d");
// console.log(a);



// //ARRAY CONCAT() FUNCTION       **********THIS JOINS TWO OR MORE ARRAYS

// var a=["s","r","l"]
// var b=["a","k"]
// var c=["e","f"]
// var d=a.concat(b,c);
// console.log(d);



// //ARRAY JOINT() FUNCTION          ***********THIS MAKES A SINGLE ELEMENT BY JOINING TWO OR MORE ARRAYS 

// var a=["s","r","l"]
// var b=["a","k"]
// var c=["e","f"]
// var d=a.concat(b,c);
// var e=d.join(" ");
// console.log(e);



// //ARRAY SLICE() FUNCTION            ************TO CUT THE ARRAY WHICH WE WANT

// var a=["s","r","l","a","k"]
// var b=a.slice(1,4);
// console.log(b);

// var a=["s","r","l","a","k"]
// var b= a.slice(-3,-1);
// console.log(b);



//ARRAY SPLICE() FUNCTION          ************



// // ARRAY-ISARRAY() FUNCTION               *************CHECK THE GIVEN INPUT IS ARRAY OR NOT

// //var a=["s","r","l","a","k"]
// var a=10
// var b=Array.isArray(a);
// console.log(b);



// // ARRAY-INDEXOF() FUNCTION              ***********IT FINDS THE INDEX OF THE ELEMENT


// var a=["s","r","l","a","k","r"]
// var b=a.indexOf("r");
// var c=a.indexOf("r",2);
// console.log(b,c);



// //ARRAY LASTINDEXOF() FUNCTION           ***********THIS FINDS INDEX NUMBER FROM THE LAST

// var a=["s","r","l","a","k","r"]
// var b=a.lastIndexOf("r");
// var c=a.lastIndexOf("r",2);
// console.log(b,c);



// //ARRAY INCLUDES() FUNCTION             ********IT SEARCH THE ELEMENT IN ARRAY AND RETURN TRUE OR FALSE


// var a=["s","r","l","a","k","r"]
// var b=a.includes("b");
// var c=a.includes("r");
// console.log(b,c);



// //ARRAY SOME() FUNCTION           **********CHECKS IF ANY OF THE ELEMENT PASS THE TEST OR NOT

// var a=[12,13,23,34,45,56]
// var b=a.some(checkAdult);
// console.log(b);

// function checkAdult(a){
//     return a >= 18;
// }



// //ARRAY EVERY() FUNCTION            *********CHECKS IF EVERY ELEMENT IN ARRAY PASS TEST OR NOT

// var a=[12,13,23,34,45,56]
// var b=a.every(checkAdult);
// console.log(b);

// function checkAdult(a){
//     return a >= 18;
// }



// //ARRAY FIND() FUNCTION          *********RETURN THE FIRST ELEMENT WHO PASS THE TEST

// var a=[12,13,23,34,45,56]
// var b=a.some(checkAdult);
// console.log(b);

// function checkAdult(a){
//     return a >= 18;
// }



// //ARRAY FINDINDEX() FUNCTION      *********RETURNS THE INDEX OF THE FIRST ELEMENT IN AN ARRAY THAT PASS THE TEST*****

// var a=[12,13,23,34,45,56]
// var b=a.findIndex(checkAdult);
// console.log(b);
// function checkAdult(age){
//     return age>=18;
// }



// //ARRAY FILTER() FUNCTION          **********CREATES AN ARRAY AND FILL IT WITH ALL ARRAY ELEMENTS THAT PASS A TEST

// var a=[12,13,23,34,45,56]
// var b =a.filter(checkAdult);
// console.log(b);

// function checkAdult(age){
//     return age>=18;
// }



// //ARRAY TOSTRING() FUNCTION          **********IT CONVERTS AN ARRAY INTO A STRING AND RETURNS THE RESULT

// //let a = ["a","b","c","d","e"]
// let a=[1,2,3,4,5]
// let b=a.toString();
// console.log(b);



// //ARRAY FILL() FUNCTION           **********IT FILLS ALL THE ELEMENTS IN AN ARRAY WITH A STATIC VALUE

// let a = ["a","b","c","d","e"]
// a.fill("ram");
// console.log(a);



// //ARRAY VALUEOF()  FUNCTION         **********IT RETURNS THE EXACT ARRAY

// let a = ["a","b","c","d","e"]
// console.log(a.valueOf());



//ARRAY FOREACH() FUNCTION           ***********



// //ARRAY MAP FUNCTION                *************IF WE WANTS TO MAKE SIMILAR CHANGEE IN TOTAL ARRAY 
// //                                     *******THEN WE CAN MAKE A FUNCTION AND USE IT IN MAP FUNCTION

// let a =[1,2,3,4,5]
// var b=a.map(test);
// console.log(b);
// function test(x){
//     return x*10;   
// }



// ARRAY SPLICE FUNCTION             ***********The splice() method in JavaScript is used to change 
//                              ***************the contents of an array by removing or replacing existing 
//                                 ************elements and/or adding new elements in place. It is a versatile 
//                                 ***********method that can be used for a variety of array manipulation tasks.

// //EXAMPLE 1    removing elements
// let fruits = ['apple','b','c','d'];
// fruits.splice(1,2);             // Remove two elements starting from index 1
// console.log(fruits); 

// //EXAMPLE 2      replace elements
// let fruits=['a','b','c','d']
// fruits.splice(1,2,'q')         // Replace two elements starting from index 1 with 'orange' and 'kiwi'
// console.log(fruits)

// //EXAMPLE 3          ADDING ELEMENTS
// let a=['a','b','c']
// a.splice(2,0,'p','q')          // Add elements 'pear' and 'grape' starting from index 2 (no removal)
// console.log(a)

// //EXAMPLE 4             removing and adding elements
// let a=['a','b','c'];
// a.splice(1,1,'p','e');           // Remove one element at index 1 and add 'orange' and 'kiwi' in its place
// console.log(a);






