// function bulbOn() {
//     var bulbImg = document.getElementById("bulbImg");
//     bulbImg.src = "./images/pic_bulbon.gif";
//   }
  
//   function bulbOff() {
//     console.log("bulbOff");
//     var bulbImg = document.getElementById("bulbImg");
//     bulbImg.src = "./images/pic_bulboff.gif";
//   }











function changImage() {
    //   console.log("changImage");
    var img = document.getElementById("img");
    //   console.log("img", img.src);
    img.src = "./images/car2.jpeg";
  }
  
  function mouseOutImage() {
    var img = document.getElementById("img");
    img.src = "./images/car1.jpg";
    img.width = "400";
    img.height = "300";
  }