var css = document.querySelector("h3");
var body  = document.querySelector("body");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");



function colorChange() {
    body.style.background = "radial-gradient(circle, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    css.textContent = body.style.background + ";";
}

function intialGradient(){
    // css.textContent = body.style.background;
    //   css.textContent = ;
    // css.textContent = css.style.getPropertyValue("background");
    // console.log(body.);
    var propertyValue = getComputedStyle(body).background;
    // console.log(propertyValue.substring());
    css.textContent = propertyValue;
    // color1.value =propertyValue ;
    // color2.value  = propertyValue;
}

function setColor1() {
    console.log(color1.value);
    // color1.value = body.style.background;
}

function setColor2() {
    // color2.value = body.style.background;
    console.log(color2.value);
}


color1.addEventListener("input",colorChange);
color2.addEventListener("input",colorChange);





// function forColor2() {
//     body.style.background = "linear-gradient(to right, "
//     + color1.value
//     + ", "
//     + color2.value
//     + ")";
// }



// console.log(css);
// console.log(color1);
// console.log(color2);