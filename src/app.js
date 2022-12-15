/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

// function Ran_Dom(num) {
//   let result;
//   result = num[Math.floor(Math.random() * num.length)];
//   return num;
// }

// function Domain_G() {
//   let result;
//   result = Ran_Dom(pronoun) + Ran_Dom(adj) + Ran_Dom(noun) + ".com ";
//   return result;
// }

// console.log(Domain_G());

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log("www." + pronoun[i] + adi[j] + noun[k] + ".com");
    }
  }
}
