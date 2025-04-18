console.log("calculator");
let flag = 0;
let currentDisplay = "";
const display = document.querySelector(".display");
const nums = document.getElementsByClassName("num");
[...nums].forEach((num) => {
  //   console.log(num);
  num.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    if (e.target.innerText === "=") {
      currentDisplay = eval(currentDisplay);
      display.innerText = currentDisplay;
      flag = 1;
      console.log(flag);
    } else if (
      flag === 1 &&
      (e.target.innerText === "+" ||
        e.target.innerText === "-" ||
        e.target.innerText === "*" ||
        e.target.innerText === "/")
    ) {
      currentDisplay += e.target.innerText;
      display.innerText = currentDisplay;
      flag = 0;
    } else if (
      flag === 1 &&
      (e.target.innerText !== "+" ||
        e.target.innerText !== "-" ||
        e.target.innerText !== "*" ||
        e.target.innerText !== "/")
    ) {
      currentDisplay = e.target.innerText;
      flag = 0;
      console.log(flag);
      display.innerText = currentDisplay;
    } else if (e.target.innerText === ".") {
      if (currentDisplay.includes(".")) {
        console.log(". already includes");
      } else {
        currentDisplay += e.target.innerText;
        display.innerText = currentDisplay;
      }
    } else if (e.target.innerText === "AC") {
      currentDisplay = "";
      display.innerText = currentDisplay;
    } else {
      currentDisplay += e.target.innerText;
      display.innerText = currentDisplay;
    }
  });
});
