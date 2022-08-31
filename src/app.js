/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let divElem = document.querySelector(".title");
let myNewHOne = document.createElement("h1");
let t = document.createTextNode("Elv, I love u!");
myNewHOne.appendChild(t);
divElem.appendChild(myNewHOne);

let newItem = document.createElement("li");
let textNode = document.createTextNode("You're my only love, now and ever");
newItem.appendChild(textNode);
let list = document.querySelector(".myList");
list.insertBefore(newItem, list.childNodes[0]);

let tagList = document.getElementsByTagName("li");
tagList[0].className = "list-group-item";

document.querySelector(".myButt").addEventListener("click", () => {
  let element = document.querySelector(".myList");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
});

document.querySelector(".myButt").addEventListener("dblclick", () => {
  const elem = document.querySelector(".primo");
  if (elem === null) {
    document.querySelector(
      ".myList"
    ).innerHTML = `<ul class="myList list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Morbi leo risus</li>
    <li class="list-group-item">Porta ac consectetur ac</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
    `;
    let newItem = document.createElement("li");
    let textNode = document.createTextNode("You're my only love, now and ever");
    newItem.appendChild(textNode);
    let list = document.querySelector(".myList");
    list.insertBefore(newItem, list.childNodes[0]);
    let tagList = document.getElementsByTagName("li");
    tagList[0].className = "list-group-item";
  }
});
