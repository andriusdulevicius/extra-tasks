import hTitle from "./main_title.js";
console.log(hTitle());

document.body.insertAdjacentHTML("afterbegin", hTitle());

console.log(document.body);
