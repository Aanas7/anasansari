
// CALCULATOR

var num1 = +prompt("Enter your no.");
var num2 = +prompt("Enter your no.");
var opt = prompt("Enter any + - * /");
if (opt == "+") {
    console.log("addition", num1 + num2);
} else if(opt == "-"){
    console.log("Subtraction", num1 - num2);
} else if(opt == "*"){
    console.log("Multiplication", num1 * num2);
} else if(opt == "/"){
    console.log("Division", num1 / num2);
} else{
    console.log("invalid value")
}



// MARKSHEET

// var subject1 = +prompt("Enter your Physics number");
// var subject2 = +prompt("Enter your Chemistry number");
// var subject3 = +prompt("Enter your Maths number");
// var subject4 = +prompt("Enter your English number");
// var subject5 = +prompt("Enter your Urdu number");
// var totalNumber = (subject1 + subject2 + subject3 + subject4 + subject5);
// var percentage = (totalNumber/500)* 100;

// console.log("Physics:", subject1);
// console.log("Chemistry:", subject2);
// console.log("Maths:", subject3);
// console.log("English:", subject4);
// console.log("Urdu:", subject5);
// console.log("total no:", totalNumber);
// console.log("Percentage:", percentage + "%")

// if(percentage >= 80 && percentage <= 100){
//     console.log("Your Grade is A+");
// }else if(percentage >= 70 && percentage <= 80){
//     console.log("Your Grade is A");
// }else if(percentage >= 60 && percentage <= 70){
//     console.log("Your Grade is B");
// }else if(percentage >= 50 && percentage <= 60){
//     console.log("Your Grade is C");
// }else if(percentage >= 40 && percentage <= 30){
//     console.log("Your Grade is D");
// }else{
//     console.log("Failed!");
// }