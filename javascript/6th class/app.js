// var age = +prompt("Enter your age");
// var gender = prompt("Enter your gender");

// if (age == 18 && gender == "male"){
//     console.log("Allow");
// }else {
//     console.log("Not Allow")
// }



// var gender = "other";
// if(gender == "male" || gender == "female"){
//     console.log("Allow");
// }else {
//     console.log("Not Allow");
// }


var age = +prompt("Enter your age");
var gender = prompt("Enter your gender");
if ((age >= 18 || age <= 40) && gender == "male") {
  console.log("allow");
} else {
  console.log("not allow");
}