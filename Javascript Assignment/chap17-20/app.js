// Q:1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// Q:2. Declare and initialize a multidimensional array
// representing the following matrix:




// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// // Accessing an element in the matrix (row 1, column 2)
// document.write(matrix);


// 3. Write a program to print numeric counting from 1 to 10.




// for(var i =1; i <= 10; i++){
//     document.write(i, "<br />");
// }





// Q:4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.




// var num = +prompt("Enter your multiplication number");
// var length = +prompt("Enter multiplication length");


// for (var i = 1; i <= length; i++) {
    // document.write("2 x 1 = 2" + "<br />")
    // document.write(num + " " + "x" + " " + i + " " + "=" + " " + num * i + "<br />");
// }








// Q:5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


// fruits = ["apple", "banana", "mango", "orange", "strawberry"];


// for(i = 0; i < fruits.length; i++){
//     document.write(fruits[i], "<br />");
// }

// for(i = 0; i < fruits.length; i++){
//     document.write("Element at index" + " " + i + " " + "is" + " " + fruits[i] , "<br />");
// }




// Q:6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// document.write("<h4>Counting:</h4>");

// for(var i =1; i <= 15; i++){
//     document.write(i + ", ");
// }



// NOT FOR COMMA IN THE END
// for (let i = 1; i <= 15; i++) {
//     if (i === 15) {
//         document.write(i);
//     } else {
//         document.write(i + ", ");
//     }
// }





// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1


// document.write("<h4>Reverse Counting:</h4>");

// for(var i =10; i >= 1; i--){
//     document.write(i + ", ");
// }






// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// document.write("<h4>Even:</h4>");

// for(var i =0; i <= 20; i += 2){
//     document.write(i + ", ");
// }





// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19


// document.write("<h4>Odd:</h4>");

// for(var i =1; i <= 19; i += 2){
//     document.write(i + ", ");
// }


// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// document.write("<h4>Series:</h4>");

// for(var i =2; i <= 20; i += 2){
//     document.write(i + "k, ");
// }





// Q:7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// // document.write(A);

// var userItem = prompt("Welcome to Bakery. What do you want to order?");

// var match = false;

// for(i = 0; i < A.length; i++) {
//     if (A[i] === userItem) {
//         match = true;
//         break;
//     }
// }


// if (match) {
//     document.write(userItem + " is available at index " + i + " in our bakery");
// } else {
//     document.write("We are sorry. " + userItem + " is not available in our bakery");
// }







// Q:8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


// var A = [24, 53, 78, 91, 12];

// var largestNumber = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i];
//     }
// }

// document.write("Array items:", A , "<br />");
// document.write("The largest number in the array is:", largestNumber);








// Q:9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]





// var A = [24, 53, 78, 91, 12];

// var smallestNumber = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallestNumber) {
//      smallestNumber = A[i];
//     }
// }

// document.write("Array items:", A , "<br />");
// document.write("The smallest number in the array is:", smallestNumber);





// Q:10. Write a program to print multiples of 5 ranging 1 to
// 100.




for(var i =5; i <= 100; i += 5){
    document.write(i + ", ");
}
