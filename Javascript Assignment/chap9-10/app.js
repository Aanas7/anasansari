// Q:1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”



// var userCity = prompt("enter your city");

// if (userCity == "karachi") {
//     alert("“Welcome to city of lights”");
// }else {
//     alert("You are not welcome");
// }



// Q:2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


// var gender = prompt("Ener your gender");

// if (gender == "male") {
//     alert("Good Morning Sir");
// }else if (gender == "female") {
//     alert("Good Morning Ma'am");
// }else {
//     alert("Invalid input. Please enter either 'male' or 'female'.");
// }







// Q:3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:



// var color = prompt("Ener traffic signal color light");

// if (color == "red") {
//     alert("Must Stop");
// }else if (color == "yellow") {
//     alert("Ready to move");
// }else if (color == "green") {
//     alert("Move now");
// }else {
//     alert("Invalid input. Please enter 'Red', 'Yellow', or 'Green'.");
// }




// Q:4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
    


// var fuel = prompt("enter the fuel in your car");


// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }else {
//     alert("Your fuel level is sufficient.");
// }









// Q:5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // TRUE






// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }else{
//     alert("Not true");
// }




// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }





// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// // CONDITION 2 & 4 TRUE







// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }






// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // EQUAl







// e. if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }




// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }
// ONLY DISPLAYED TRUE




// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
// // TRUE





// Q:6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:




// var subject1 = +prompt("Enter your math number");
// var subject2 = +prompt("Enter your english number");
// var subject3 = +prompt("Enter your urdu number");

// var totalObtainedMarks = subject1 + subject2 + subject3;
// var totalMarks = 300;

// var percentage = (totalObtainedMarks / totalMarks) * 100;


// if (percentage >= 80) {
//     document.write("Total marks:" + " " + totalMarks , "<br />");
//     document.write("Marks Obtained:" + " " + totalObtainedMarks , "<br />");
//     document.write("Percentage:" + " " + percentage + "%" , "<br />");
//     document.write("Grade A-one" , "<br />");
//     document.write("Remarks" + " " + "Excellent");
// }else if (percentage >= 70) {
//     document.write("Total marks:" + " " + totalMarks , "<br />");
//     document.write("Marks Obtained:" + " " + totalObtainedMarks , "<br />");
//     document.write("Percentage:" + " " + percentage + "%" , "<br />");
//     document.write("Grade A" , "<br />");
//     document.write("Remarks" + " " + "Good");   
// }else if (percentage >= 60) {
//     document.write("Total marks:" + " " + totalMarks , "<br />");
//     document.write("Marks Obtained:" + " " + totalObtainedMarks , "<br />");
//     document.write("Percentage:" + " " + percentage + "%" , "<br />");
//     document.write("Grade B" , "<br />");
//     document.write("Remarks" + " " + "You need to improve");
// }else if (percentage < 60) {
//     document.write("Total marks:" + " " + totalMarks , "<br />");
//     document.write("Marks Obtained:" + " " + totalObtainedMarks , "<br />");
//     document.write("Percentage:" + " " + percentage + "%" , "<br />");
//     document.write("Grade Fail" , "<br />");
//     document.write("Remarks" + " " + "Sorry");
// }










// Q:7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.




// var userInput = +prompt("Enter number 1 to 10");

// var num = Math.floor(Math.random() * 10 + 1);
// console.log("num", num);

// if (userInput === num) {
//   alert("“Bingo! Correct answer”.");
// } else if (userInput - 1 === num || userInput + 1 === num) {
//   alert("“Close enough to the correct answer”.");
// } else if (userInput < num) {
//   alert("your numer is less then");
// } else if (userInput > num) {
//   alert("your numer is greater then");
// } else {
//   alert("Invalid Number");
// }










// Q:8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.




// var num = +prompt("enter your number");

// if (num % 3 === 0) {
//     document.write("The number " + num + " is divisible by 3.");
// }else {
//     document.write("The number " + num + " is not divisible by 3.");
// }





// Q:9. Write a program that checks whether the given input is an
// even number or an odd number.



// var num = +prompt("enter number");

// if (num % 2 === 0) {
//     document.write("even number");
// } else if (num % 1 === 0) {
//     document.write("odd number");
// }




// Q:10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”




// var temp = +prompt("Enter temperature");

// if (temp >= 40) {
//     document.write("It is too hot outside.");
// } else if (temp >= 30) {
//     document.write("The Weather today is Normal.");
// }else if (temp >= 20) {
//     document.write("Today’s Weather is cool.");
// }else if (temp > 10) {
//     document.write("OMG! Today’s weather is so Cool.");
// } else {
//     document.write("It’s cold outside, Dont Go outside!");
// }







// Q:11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.





var num1 = +prompt("Enter your no.");
var num2 = +prompt("Enter your no.");
var opt = prompt("Enter any + - * /");
if (opt == "+") {
    document.write("addition" + " " + num1 + num2);
} else if(opt == "-"){
    document.write("Subtraction" + " " + num1 - num2);
} else if(opt == "*"){
    document.write("Multiplication" + " " + num1 * num2);
} else if(opt == "/"){
    document.write("Division" + " " + num1 / num2);
} else if (opt == "%") {
    document.write("Remainder" + " " + num1 % num2)
}
else{
    document.write("invalid value")
}
