const numberBox = document.querySelector(".number-box");
const allClear = document.getElementById("AC");
const deleteNumber = document.getElementById("DE");

allClear.addEventListener("click", ()=>{
    numberBox.textContent = "";
})

deleteNumber.addEventListener("click", ()=>{
    const numArray = numberBox.textContent.split("");
    numArray.pop();
    numberBox.textContent = numArray.join("");
})