function handleImg(ele, event) {
  console.log("handleImg", ele, event);
  // ele.src = "./images/car2.jpg";
  if (event === "over") {
    ele.src = "./images/car2.jpeg";
  } else {
    ele.src = "./images/car1.jpg";
  }
}


function bulbHandler(btnElement) {
  // console.log("bulbImg", bulbImg, btnElement);
  // bulbImg.src = "./images/bulbOn.jpg";
  // btnElement.innerHTML = "OFF"

  console.log(btnElement.innerHTML, "btn text");
  var bulbImg = document.getElementById("bulbImg");
  if (btnElement.innerHTML == "ON") {
    bulbImg.src = "./images/pic_bulbon.gif";
    btnElement.innerHTML = "OFF";
  } else {
    //OFF IMAGE
    bulbImg.src = "./images/pic_bulboff.gif";
    btnElement.innerHTML = "ON";
  }
}





function handleStyling(btnEle) {
  console.log("btnEle", btnEle);
  btnEle.style.backgroundColor = "black";
  btnEle.style.color = "white";
  btnEle.style.border = "2px solid red";
  // btnEle.style.cssFloat = "2px solid red";
}