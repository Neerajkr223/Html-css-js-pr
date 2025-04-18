const arr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
const cont = document.querySelector(".container");
const button = document.querySelector("#btn");
console.log("cont");
console.log("button");
let str = "#";

button.addEventListener("click", () => {
  str = "#";
  console.log("button click");
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    str += arr[randomIndex];
  }
  cont.style.backgroundColor = str;
  console.log(str);
});
