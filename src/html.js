import hTitle from "./js/main_title.js";
console.log(hTitle());

document.body.insertAdjacentHTML("afterbegin", hTitle());

console.log(document.body);