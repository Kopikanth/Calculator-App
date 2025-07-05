const numberBox = document.querySelector(".number-box");
const allClear = document.getElementById("AC");
const deleteNumber = document.getElementById("DE");

let itemString = "";
let dotCheck = false;


allClear.addEventListener("click", () => {
    numberBox.textContent = "";
    itemString = "";
    dotCheck = false;
});

deleteNumber.addEventListener("click", () => {
    const numArray = numberBox.textContent.split("");
    const lastDeleted = numArray.pop();
    numberBox.textContent = numArray.join("");
    itemString = numberBox.textContent;
    dotCheck = (lastDeleted === ".") ? false : dotCheck;
});

const btnArray = ["dot", "division", "7", "8", "9", "multiplication", "4", "5", "6", "subtraction", "1", "2", "3", "addition", "00", "0"];


btnArray.forEach((item) => {
    const itemBtn = document.getElementById(item);
    const btnText = itemBtn.textContent;
    itemBtn.addEventListener("click", () => {
        if ((!(dotCheck && btnText === ".")) && (!(["+", "-", "*", "/"].includes(btnText) && itemString.length === 0)) && (itemString.length <= 12)) {

            if (["+", "-", "*", "/"].includes(btnText)) {
                dotCheck = false;
            }
            else if (btnText === ".") {
                dotCheck = true;
            }

            if (!isNaN(itemString[itemString.length - 1]) || !isNaN(Number(btnText))) {
                itemString += btnText;
                numberBox.textContent = itemString;
            }
            else if(btnText !== "." && itemString[itemString.length - 1] !== ".") {
                itemString = itemString.slice(0, - 1);
                itemString += btnText;
                numberBox.textContent = itemString;
            }
        }
    });
});