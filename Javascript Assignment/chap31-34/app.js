



// Q:1. Write a program that displays current date and time in
// your browser.


// var date = new Date();
// document.write(date);




// Q:2. Write a program that alerts the current month in words.
// For example December


// let currentMonth = new Date().getMonth();

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// document.write("Current month:", months[currentMonth]);




// Q:3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// (A)
// var date = new Date().toDateString();
// document.write("Today is ", date.slice(0 , 3));

// (B)
// let currentDay = new Date().getDay();

// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// document.write("Today is ", days[currentDay]);










// Q:4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.



// var currentDay = new Date().getDay();


// if(currentDay === 0 || currentDay === 6){
//     document.write("Its Fun Day");
// }else {
//     document.write("Its work Day");
// }



// Q:5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.





// var monthDate = new Date().getDate();
// // console.log(monthDate)

// if( monthDate <= 15 ){
//     document.write("First fifteen days of the month");
// }else {
//     document.write("Last days of the month");
// }







// Q:6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.






// var date = new Date();
// var dateMiliSec = new Date().getTime();
// var dateMin = dateMiliSec / (1000 * 60);

// document.write("Current Date and Time: " + date, "<br />");
// document.write("Milliseconds since Jan 1, 1970: " + dateMiliSec, "<br />");
// document.write("Minutes since Jan 1, 1970: " + dateMin);








// Q:7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”





// var time = new Date().getHours();
// // alert(time)

// if( time < 12){
//     alert("Its AM");
// }else{
//     alert("Its PM");
// }





// Q:8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.



// var getYear = new Date(2020, 11, 31);

// document.write(getYear)







// Q:9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015




// var ramadanStartDate = new Date(2015, 5, 18);

// var currentDate = new Date();

// var timeDifference = currentDate - ramadanStartDate;

// var daysPast = timeDifference / (1000 * 60 * 60 * 24);

// alert(Math.floor(daysPast) + " days have passed  since 1st Ramadan, 2015");







// Q:10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.





// var oldDate = new Date(2015, 0, 1);

// var currentDate = new Date();

// var timeDiff = currentDate - oldDate;

// var seconds = timeDiff / 1000;

// document.write("On refernce date ", currentDate, "<br />")
// document.write(Math.floor(seconds) + " had passed since beginning of 2015");








// Q:11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.






var currentDate = new Date();
console.log(currentDate.getHours())