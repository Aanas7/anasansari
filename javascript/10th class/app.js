// // // console.log("Hello Class...");

// // for (var a = 1; a <= 5; a++) {
// //        console.log("Hello World");
// // }


// for (var num = 1; num <= 10; num++) {
//     console.log("num", num);
// }

// for (var i = 1; i <= 20; i = i + 3) {
//   console.log(i);
// }

// document.write('Anas Ansari')


// for ( i = 10; i >= 1; i--){
//   console.log(i);
// }

// for (var i = 1; i <= 10; i++) {
//   // document.write("2 x 1 = 2" + "<br />")
//   document.write("2 x" + i + "=" + 2 * i + "<br />");
// }


var tableValue = +prompt("Enter table value!");
var startingPoint = +prompt("Enter table start Point!");
var endingPoint = +prompt("Enter table End Point!");

for (var i = startingPoint; i <= endingPoint; i++) {
  // document.write("2 x 1 = 2" + "<br />")
  document.write(tableValue + "x" + i + "=" + tableValue * i + "<br />");
}