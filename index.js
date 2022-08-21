// const element1= document.getElementById("description")
// console.log(element1.innerHTML);

// element1.innerText="hey iam vidyadhara";
// console.log(element1.innerText);

// element1.innerHTML= `
//                    <span>hell iam the new span tag </span>
// <span> oh is it </span>`
// console.log(element1.innerHTML);

// const element2= document.getElementsByClassName("text")
// console.log(element2[0]);

// element2[0].innerText="iam the new text for 0 index";
// console.log(element2[0].innerText);

// element2[0].style.color="red";
// element2[0].style.fontSize= "20px";

// function changeText(){
//     const element2 = document.getElementsByClassName("text")
// console.log(element2[0].innerText);
// element2[0].style.color="yellow";
// }


const element1 = document.getElementById("text");
console.log(element1.innerText);

const element2=document.getElementsByTagName("h1");
console.log(element2[0]);

const element3= document.getElementsByClassName("Box");
console.log(element3[0]);

const element4= document.getElementsByTagName("h1");
element4[1].innerText= "Hello World";
console.log(element4[1].innerText);

function changeDirection(){
    const element5 = document.getElementsByClassName('parent')
    element5[0].style.flexFlow="column";
}


//What’s the difference between window vs document?

//window
//The Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window.

//The Window interface is home to a variety of functions, namespaces, objects, and constructors which are not necessarily directly associated with the concept of a user interface window.

//document
//The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

//The Document interface describes the common properties and methods for any kind of document.

console.log(element4[2]);
element4[2].style.color = "red";

function replaceText(){
    const element6 = document.getElementById("heading");
    element6.innerText="Welcome to Elevation Academy!";
}

function displayclock (){
let time = new Date();
let hrs = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();


if(hrs>12){
  hrs = hrs -12;
}

  if(hrs==0){
    hrs = 12;
  }
  document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec;
}

setInterval(displayclock,1000)


function yearChange() {
    let selectedYear = document.getElementById("yearSelect").value;
    document.getElementById("year").innerText = selectedYear;
}

function emailCheck() {
    let a = document.getElementById("email").value;
    if (!a.endsWith("prepbytes.com")) {
        let b = document.getElementById("emailcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("emailcheck");
        b.style.display = "none";
    }
}

function numberCheck() {
    let a = document.getElementById("phoneno").value;
    if (!a.startsWith("91")) {
        let b = document.getElementById("startcheck");
        b.style.display = "inline";

    } else {
        let b = document.getElementById("startcheck");
        b.style.display = "none";
    }
    if (a.length == 10) {
        let b = document.getElementById("digitcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("digitcheck");
        b.style.display = "none";
    }
}

function bYearCheck() {
    let a = document.getElementById("byear").value;
    if (a < 1995) {
        let b = document.getElementById("byearcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("byearcheck");
        b.style.display = "none";
    }
}