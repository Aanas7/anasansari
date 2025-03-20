// console.log("Anas Ansari")
// var gender = prompt("Enter your gender")
// if(gender == "male"){
//     console.log("Allow")
// }else {
//     console.log("not Allow")
// }



// === > value check and data type
// var a = "10";
// if (a === "10") {
//   console.log("OK!");
// } else {
//   console.log("ERROR");
// }



// var age = +prompt("Enter your Age");
// if(age === 18){
//     console.log("Allow")
// }else {
//     console.log("not allow")
// }

// var age = +prompt("Enter your age")
// if(age >= 18){
//     console.log("Eligible")
// }else {
//     console.log(" Not Eligible")
// }




var num1 = +prompt("Enter Number 1");
var num2 = +prompt("Enter Number 2");
var opt = prompt("Enter opt", "+,-,*,/");
console.log(num1 , "num1")
console.log(num2 , "num2")
if (opt == "+") {
  console.log("addition", num1 + num2);
} else if (opt == "-") {
  console.log("sub", num1 - num2);
} else if (opt == "*") {
  console.log("mul", num1 * num2);
} else if (opt == "/") {
  console.log("div", num1 / num2);
} else {
  console.log("Invalid opt");
}