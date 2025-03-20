



// Q:1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122)




// var userInput = prompt("Enter the character");
// var asciiCode = userInput.charCodeAt(0);

// console.log(asciiCode)


// var userChar = prompt("Enter the character");

// if(userChar >= "A" && userChar <= "Z") {
//     document.write(userChar + " " + "is Uppercase character");
// } else if(userChar >= "a" && userChar <= "z") {
//     document.write(userChar + " " + "is Lowercase character");
// }else {
//     document.write("Please Enter Alphabetic character");
// }




// Q:2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.




// var userNum1 = +prompt("Enter your 1st number");
// var userNum2 = +prompt("Enter your 2nd number");



// if (userNum1 > userNum2) {
//     document.write(userNum1 +" " + "is greater than" + " " + userNum2);
// }else if(userNum1 < userNum2) {
//     document.write(userNum1 +" " + "is less than" + " " + userNum2);
// }else if(userNum1 == userNum2) {
//     document.write("two numbers are equal.");
// }else {
//     document.write("Invalid Number! Give us any two number");
// }







// Q:3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.




// var userNum = +prompt("Enter positive or Negative number");

// if (userNum > 0) {
//     document.write(userNum + " " + "is Positive");
// }else if ( userNum < 0) {
//     document.write(userNum + " " + "is Negative");
// }else if (userNum == 0) {
//     document.write(userNum + " " + "is zero");
// }else {
//     document.write("Your number is Invalid");
// }







// Q:4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
    






// var userChar = prompt("Enter a character:").toLowerCase();

// if (userChar.length === 1) {
//     if (userChar === 'a' || userChar === 'e' || userChar === 'i' || userChar === 'o' || userChar === 'u') {
//         console.log(userChar + " " + "is vowel");
//     } else {
//         console.log(userChar + " " + "is not vowel");
//     }
// } else {
//     console.log("Please input a single character.");
// }






// Q:5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.



// var password = "admin@123";
// var userPass = prompt("Enter your Password");


// if ( userPass === "" ) {
//     document.write("Please Enter your Password");
// }else if( userPass === password ) {
//     document.write("Correct! The password you entered matches the original password");
// }else {
//     document.write("Incorrect password");
// }















// Q:6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }










// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else {
// greeting = "Good evening";
// }

// document.write(greeting);








// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements







