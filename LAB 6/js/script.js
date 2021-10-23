alert("Hello!");

confirm("Do you want to watch a video?");

prompt("Are you frelancer?");

/*Функція виводу більшого рядка*/
let a = "dvdgvdgrvdhrvheevcbfdhg";
let b = "hdcbhbchbchchbhrbfrhbrh";
if (a > b) {
  alert(a);
} else {
  alert(b);
}

/*Функція виводу інформації про розробника*/
alert("name-Vasya, surname-Ivanov, job-programmer ");

/*Зміна кольору фону на 30с*/
const body = document.querySelector("body");
body.style.backgroundColor = "green";

function backgroundChange() {
  body.style.backgroundColor = "red";
}
setTimeout(backgroundChange, 30000);

let elem = document.getElementById("engine");
console.log(elem);

let elem2 = document.querySelectorAll(".text-5");
console.log(elem2);

/*innerHtml*/
const element = document.querySelector(".text-6");
element.innerHTML = "It`s inner HTML !!!";

/*outerHtml*/
const element2 = document.querySelector(".text-7");
element2.outerHTML = "It`s outer HTML!!!";

/*textContent*/
const text = document.querySelector(".text-5");
console.log(text.textContent);

/*nodeValue*/
const element3 = document.querySelector(".text-7");
const getComment = element3;
console.log(getComment.nodeValue);

/*newElement*/
const textElement = document.querySelector(".text-5");
const newElement = document.createElement("div");
newElement.innerHTML = "rchvhrvvnrvbncvr";
textElement.before(newElement);

/*createTextNode , prepend*/
const textpar = document.querySelector(".text-5");
const newText = document.createTextNode("Hello World!");
textpar.prepend(newText);

/*replace.With*/
const paragraph = document.querySelector(".paragraph");
paragraph.replaceWith("It`s replace.With!");

/*remowe*/
const paragraph2 = document.querySelector(".paragraph2");
paragraph2.remove("");
