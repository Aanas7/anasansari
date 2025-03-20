// Q:1. Declare an empty array using JS literal notation to store
// student names in future.

// var arr = [];
// console.log(arr);



// Q:2. Declare an empty array using JS object notation to store
// student names in future.



// Q:3. Declare and initialize a strings array.


// var arr = ["karachi" , "lahore" , "multan"];
// console.log(arr);




// Q:4. Declare and initialize a numbers array.



// var arr = [9 , 7 , 24324];
// console.log(arr);



// Q:Declare and initialize a boolean array.



// var arr = [true , false];
// console.log(arr);


// 6. Declare and initialize a mixed array.

// var arr = ["karachi" , 6 , true ,"mutan" , false , 4348 ];
// console.log(arr);



// Q:7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:




// var arr = ["SSC ", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "Phd"];
// // document.write(arr);
// for (i = 0; i < arr.length; i++){
//     document.write((i + 1) + ")" + " " + arr[i] , "<br />");
// }





// Q:8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:



// var students = ["Michael", "John", "Tony"];

// var marks = [320, 230, 480];

// var totalMarks = 500;

// for (var i = 0; i < students.length; i++) {
//     var mark = marks[i];
//     var percentage = (mark / totalMarks) * 100;

//     document.write("Score of" + " " + students[i] + " " + "is" + " " + mark + " " + "Percentage:" + " " + percentage + "%" , "<br />");
// }





// Q:9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.





// var colors = ["Blue", "Black", "Yellow", "White", "Green", "Brown"];
// for (i = 0; i < colors.length; i++){
//     document.write(colors[i] , "<br />");
// }


// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.


// var color = prompt("What color you want to add to the beginning");

// var colors = ["Blue", "Black", "Yellow", "White", "Green", "Brown"];

// colors.unshift(color);

// for (i = 0; i < colors.length; i++){
//     document.write(colors[i] , "<br />");
// }




// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.


// var color = prompt("What color you want to add to the end");

// var colors = ["Blue", "Black", "Yellow", "White", "Green", "Brown"];

// colors.push(color);

// for (i = 0; i < colors.length; i++){
//     document.write(colors[i] , "<br />");
// }





// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.




// var color1 = prompt("What color one you want to add to the beginning");
// var color2 = prompt("What color two you want to add to the beginning");

// var colors = ["Blue", "Black", "Yellow", "White", "Green", "Brown"];

// colors.unshift(color1 , color2);

// for (i = 0; i < colors.length; i++){
//     document.write(colors[i] , "<br />");
// }




// d. Delete the first color in the array. Display the updated
// array in your browser.


// var color = prompt("What color you want to add to the end");

// var colors = ["Blue", "Black", "Yellow", "White", "Green", "Brown"];

// colors.shift();

// for (i = 0; i < colors.length; i++){
//     document.write(colors[i] , "<br />");
// }







// e. Delete the last color in the array. Display the updated
// array in your browser.







// var colors = ["Blue", "Black", "Yellow", "White", "Green", "Brown"];

// colors.pop();

// for (i = 0; i < colors.length; i++){
//     document.write(colors[i] , "<br />");
// }





// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.




// var indxNum = prompt("What color you want to add , write index no.");
// var color = prompt("What color you want to add , write color name");

// var colors = ["Blue", "Black", "Yellow", "White", "Green", "Brown"];

// colors.splice(indxNum, 1 , color);

// for (i = 0; i < colors.length; i++){
//     document.write(colors[i] , "<br />");
// }




// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.





// var indxNum = prompt("What color you want to add , write index no.");
// var dltCount = prompt("What color you want to add , write no.");

// var colors = ["Blue", "Black", "Yellow", "White", "Green", "Brown"];

// colors.splice(indxNum, dltCount);

// for (i = 0; i < colors.length; i++){
//     document.write(colors[i] , "<br />");
// }










// Q:10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.






// var arr = [320, 230, 480, 120];

// document.write("Scores of student :" , arr, "<br />");


// var arr = [320, 230, 480, 120];


// arr.sort();


// document.write("Ordered Scores of student :" , arr);






// Q:11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.



// var arrCities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// var cities = arrCities.slice(2 , 4);

// document.write("Cities List: " , arrCities , "<br />");
// document.write("Selected cities list :" , cities);






// Q:12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)






// var arr = ["This", "is", "my", "cat"];
// document.write("Array: ", arr, "<br />");

// var arr = ["This", "is", "my", "cat"];
// var result = arr.join(" ");
// document.write("String: ", result); 




// Q:13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)











// var arr = ["Keyboard", "mouse", "printer", "monitor"];
// document.write(arr , "<br />");

// var arr = ["Keyboard", "mouse", "printer", "monitor"];
// for (i = 0; i < arr.length; i++){
//     document.write(arr[i] , "<br />");
// }





// Q:14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)







// var arr = ["Keyboard", "mouse", "printer", "monitor"];
// document.write(arr , "<br />");



// var arr = ["Keyboard", "mouse", "printer", "monitor"];
// arr.reverse();
// for (i = 0; i < arr.length; i++){
//     document.write(arr[i] , "<br />");
// }







// Q:15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:






// var arr = ["Apple" , "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];

// // document.write(arr)
// document.write('<select name="phone-manufacturer" id="phone-manufacturer">');

// for (var i = 0; i < arr.length; i++) {
//     document.write('<option value="' + arr[i] + '">' + arr[i] + '</option>');
// }
// document.write('</select>');