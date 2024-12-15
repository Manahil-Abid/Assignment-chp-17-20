/*ARRAYS AND LOOP */
/*Assignment Chap 17 -20 */

/*1. Declare and initialize an empty multidimensional array. 
(Array of arrays)  */
let multidimensionalArray = [];

/*-----------------------------------------------------------*/

// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2, 3],
//     [2, 0, 2, 1]
//   ];
  
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       document.write(matrix[i][j] + " ");
//     }
//     document.write("<br>");
//   }

/*--------------------------------------------------------------*/

/*3. Write a program to print numeric counting from 1 to 10.*/

// for (let i = 0 ; i <= 10 ; i++){
//     document.write(i , "<br>") ;
// }
/*---------------------------------------------------------------*/

/* 4.  Write a program to print multiplication table of any 
number using for loop. Table number & length should be 
taken as an input from user.  */

// let tableNumber = parseInt(prompt("Enter table number:"));
// let tableLength = parseInt(prompt("Enter table length:"));

// document.write("Multiplication Table of ", tableNumber ,"<br>");
// for (let i = 1; i <= tableLength; i++) {
//   document.write(tableNumber ,' x ',i , " = ", tableNumber * i ,"<br>")
// }

/*-----------------------------------------------------------------------*/

/*5. Write a program to print items of the following array 
using for loop: */

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// document.write("Fruits List:<br>");
// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i],"<br>");
// }

/*---------------------------------------------------------------------------*/

/*6. Generate the following series in your browser. See 
example output. 
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k */

// let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
// document.write(" Counting " , counting);

// let reverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
// document.write(" Reverse Counting " , reverseCounting);

// let even = [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
// document.write(" Even " , Even);

// let odd = [  1, 3, 5, 7, 9, 11, 13, 15, 17, 19  ];
// document.write(" Odd " , odd);

// let series = [ "2k", "4k" , "6k" , "8k", "10k" , "12k" , "14k", "16k" , "18k"," 20k " ];
// document.write(" series " , series);

/*--------------------------------------------------------------------------------------------*/

/*7. You have an array 
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
Write a program to enable “search by user input” in an 
array. 
After searching, prompt the user whether the given item is 
found in the list or not. Example: */

// let input = prompt("Welcome to ABC bakery what do you want to order sir/ma'am? \n cake \n applepie \n cookie \n chips \n patties ");

// if ( input == "cake" || input == "applepie" || input == "cookies" || input == "chips" || input == "patties"){
//     document.write("Thanks for order ",input)
// }
// else{
//     document.write("Sorry ma'am ",input," not available ")
// }

/*------------------------------------------------------------------------------------------------*/

/*8. Write a program to identify the largest number in the 
given array. 
A = [24, 53, 78, 91, 12]. */
 
let A = [24, 53, 78, 91, 12];

let largestNumber = A[0];
for (let i = 1; i < A.length; i++) {
  if (A[i] > largestNumber) {
    largestNumber = A[i];
  }
}
document.write("largest number is " , largestNumber);

/*----------------------------------------------------------------------------*/

let Arr = [24, 53, 78, 91, 12];
let smallestNumber = A[0];

for (let i = 1; i < Arr.length; i++) {
  if (Arr[i] < smallestNumber) {
    smallestNumber = Arr[i];
  }
}
document.write("Smallest number is " ,smallestNumber);

/*------------------------------------------------------------------------------*/

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      document.write(i);
    }
  }
  
  /*--------------------------------------------------------------------------------*/