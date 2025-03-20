// Q:1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.




// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// var fullName = firstName + " " + lastName;

// alert("Hello" + " " + fullName);





// Q:2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser





// var favPhone = prompt("Enter your favorite mobile phone model");

// document.write("My favorite phone is:" + " " + favPhone + " " + "Length of string: " +favPhone.length);






// Q:3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser






// var str = "Pakistani";

// document.write("String: " , str , "<br />");
// document.write("Index of 'n': " , str.indexOf("n"));








// Q:4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser




// var str = "Hello World";


// document.write("String: " , str , "<br />");
// document.write("Last Index of 'l': " , str.lastIndexOf("l"));









// Q:5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.



// var str = "Pakistani";

// document.write("String: " , str , "<br />");
// document.write("Character at index 3: " , str.charAt("3"));






// Q:6. Repeat Q1 using string concat() method.



// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// // var fullName = firstName + " " + lastName;

// alert("Hello" + " " + firstName.concat(" " , lastName));








// Q:7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.







// var city = "Hyderabad";

// document.write("City: " , city , "<br />");
// document.write("After replacement: ", city.replace("Hyder", "Islam"));






// Q:8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;




// var message = "Ali and Sami are best friends. They play cricket and football together.";

// document.write("Message: " , message , "<br />");
// document.write("After replacement: ", message.replaceAll("and", "&"));






// Q:9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.







// var num = "472";

// document.write("Value: " , num, "<br />");
// document.write("Type: ", typeof num, "<br />");

// var num = +"472";

// document.write("Value: " , num, "<br />");
// // document.write("Type: ", typeof Number (num));
// document.write("Type: ", typeof num);







// Q:10. Write a program that takes user input. Convert and
// show the input in capital letters.








// var userInput = "peanuts";

// document.write("User input: " , userInput, "<br />");
// document.write("Upper Case: ", userInput.toUpperCase());










// Q:11. Write a program that takes user input. Convert and
// show the input in title case.




// var str = prompt("type any word");  

// document.write(str[0].toUpperCase() + str.slice(1).toLowerCase());




// Q:12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.




// var num = 35.36;
// // var numString = Math.round(num * 100).toString();

// document.write("Number: ", num, "<br />");
// document.write("Result: ", Math.round(num * 100))
// // document.write("Number: ", numString);








// Q:13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .






// var userName = prompt("Enter your username:");

// var specialSymbols = /[@.,!]/;

// if (specialSymbols.test(userName)) {
//     alert("Invalid username! Please enter a valid username without special symbols (@, ., ,, !).");
// } else {
//     alert("Username is valid.");
// }






// Q:14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:







// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// // document.write(A);

// var userItem = prompt("Welcome to Bakery. What do you want to order?");

// var lowerCase = userItem.toLowerCase();

// var match = false;

// for(i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === lowerCase) {
//         match = true;
//         break;
//     }
// }


// if (match) {
//     document.write(userItem + " is available at index " + i + " in our bakery");
// } else {
//     document.write("We are sorry. " + userItem + " is not available in our bakery");
// }








// Q:15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.





























// Q:16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.




// var university = "University of Karachi";


// for(i = 0; i < university.length; i++) {
//     document.write(university[i].split(""), "<br />");
// }







// Q:17. Write a program to display the last character of a user
// input.





// var userCountry = prompt("Enter country");

// document.write("User country: " , userCountry, "<br />");
// document.write("Last character of input: " , userCountry.charAt(userCountry.length -1));












// Q:18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.






