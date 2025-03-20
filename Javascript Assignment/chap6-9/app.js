// // Q:1. Write a program to take a number in a variable, do the
// // required arithmetic to display the following result in your
// // browser:



// var a = 10;

// document.write("The value of a is:" + " " + a , "<br />" , "<br />");

// var a = ++a;

// document.write("The value of ++a is:" + " " + "11" , "<br />");
// document.write("Now the value of a is:" + " " + a++ , "<br />" , "<br />");


// var a = a++;

// document.write("The value of a++ is:" + " " + "11" , "<br />");
// document.write("Now the value of a is:" + " " + a , "<br />" , "<br />");

// var a = --a;

// document.write("The value of --a is:" + " " + a , "<br />");
// document.write("Now the value of a is:" + " " + a , "<br />" , "<br />");

// var a = a--;

// document.write("The value of --a is:" + " " + "11" , "<br />");
// document.write("Now the value of a is:" + " " + a-- , "<br />" , "<br />");


// Q:2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


// var a = 2, b = 1;
// document.write("a is" + " " + a , "<br />");
// document.write("b is" + " " + b , "<br />");


// var result = --a - --b + ++b + b--;

// document.write("result is" + " " + result);






// Q:3. Write a program that takes input a name from user &
// greet the user



// var userName = prompt("Enter your name");

// alert("Thank you" + " " + userName + " " + "for visiting our website");





// Q:5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


// var num = +prompt("Enter your multiplication number");

// for (var i = 1; i <= 10; i++) {
//     // document.write("2 x 1 = 2" + "<br />")
//     document.write(num + " " + "x" + " " + i + " " + "=" + " " + num * i + "<br />");
// }







// Q:6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)








var english = +prompt("enter your english marks");
var math = +prompt("enter your math marks");
var urdu = +prompt("enter your urdu marks");


var totEng = 100;
var totMath = 100;
var totUrdu = 100;

var totalObainedMarks = english + math + urdu;
var totalSubjectMarks = totEng + totMath + totUrdu;

var perSubPerc = (english / totEng) * 100;
var perSubPerc2 = (math / totMath) * 100;
var perSubPerc3 = (urdu / totUrdu) * 100;

var subPerc = (totalObainedMarks / totalSubjectMarks) * 100;

document.write("Subject" + " " + "T Marks" + " " + "O Marks" + " " + "Percentage" , "<br />" , "<br />");
document.write("English" + " " + totEng + " " + english + " " + " " + perSubPerc + "%" , "<br />");
document.write("Math" + " " + totMath + " " + math + " " + perSubPerc2 + "%" , "<br />");
document.write("Urdu" + " " + totUrdu + " " + urdu + " " + perSubPerc3 + "%" , "<br />");
document.write("   " + " " + totalSubjectMarks + " " + totalObainedMarks + " " + subPerc + "%");

// console.log(subPerc + "%")