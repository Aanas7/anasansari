




// Q:1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number



// var userNum = +prompt("Enter positive integer");

// document.write("Number: ", userNum, "<br />");
// document.write("round off value: ", Math.round(userNum), "<br />");
// document.write("floor value: ", Math.floor(userNum), "<br />");
// document.write("ceil value: ", Math.ceil(userNum));






// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number



// var userNum = +prompt("Enter negative integer");

// document.write("Number: ", userNum, "<br />");
// document.write("round off value: ", Math.round(userNum), "<br />");
// document.write("floor value: ", Math.floor(userNum), "<br />");
// document.write("ceil value: ", Math.ceil(userNum));






// Q:3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5




// var num = +prompt("Enter the number");

// document.write("The absolute value of " + num + " " + "is" + " " + Math.abs(num));





// Q:4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:




// var dice = Math.floor(Math.random() * 6) + 1;


// document.write("random dice value is: ", dice);




// Q:5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser



// var coinToss = Math.random();

// if (coinToss < 0.5) {
//     document.write("Random coin value: Heads");
// } else {
//     document.write("Random coin value: Tails");
// }








// Q:6. Write a program that shows a random number between 1
// and 100 in your browser.



// var randomNum = Math.floor(Math.random() * 100) + 1;


// document.write("random number between 1 and 100: ", randomNum);








// Q:7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms















// Q:8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.






// var num = prompt("enter number between 1 to 10");
// var ranNum = Math.floor(Math.random() * 10) + 1;

// // console.log(num);
// // console.log(ranNum);
// if(num == ranNum){
//     document.write("Congratulations!");
// }else {
//     document.write("Try Again!  ");
// }