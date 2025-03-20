// var city = prompt("Enter your city").toLowerCase();
// console.log("city", city)

// if (city === "karachi"){
//     alert("Welcome to Karachi");
// }else{
//     alert("Welcome");
// }

// var city = prompt("Enter your city").toUpperCase();
// console.log("city", city)

// if (city === "KARACHI"){
//     alert("Welcome to Karachi");
// }else{
//     alert("Welcome");
// }



// var str = prompt("enter your name");
// var firstLettr = str[0].toUpperCase();
// var otherLetters = str.slice(1).toLowerCase();

// var cap = firstLettr + otherLetters;
// console.log(cap);

// var str = prompt("enter your name");
// var cap = str[0].toUpperCase() + str.slice(1).toLowerCase();
// console.log("Cap" , cap);





var htmlStr = ("Hypertext Markup Language (HTML) is the standard markup language[a] for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming language.");
console.log(htmlStr);

for (

 var i = 0; i< htmlStr.length; i++){
    console.log(htmlStr.slice(i , i + 6));
    if(htmlStr.slice(i , i + 6) == "(HTML)"){
        console.log("Index Number" , i)
        break;
    }
}



// STRING

// var str = "Jaffar Aman";
// console.log(str[0])
// console.log(str[str.length - 1]);
// console.log("str", str.length);



// var str = "Pakistani";
// var code = str.slice(0, -1);

// console.log(str);
// console.log(code, "code");