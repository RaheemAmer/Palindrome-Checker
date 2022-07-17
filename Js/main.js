const textInput = document.querySelector('.inputs input');
const checkBtn = document.querySelector('.inputs button');
const infoText = document.querySelector('.info-text');
let filterInput;

checkBtn.addEventListener('click', () => {
    //Splitting user input and reversing them, also joining them in a single word
    let reverseInput = filterInput.split('').reverse().join('');
    //Checking if the reversed input is the same as the original input
    infoText.style.display = "block"
    if (filterInput != reverseInput) {
        return infoText.innerHTML = (`<span>${textInput.value}</span> is not a palindrome`);
    }
    else {
        return infoText.innerHTML = (`<span>${textInput.value}</span> is a palindrome`);
    }
})

textInput.addEventListener("keyup", () => {
    //Removes special characters and spaces
    filterInput = textInput.value.replace(/[^A-Z0-9]/ig, "");
    if (filterInput) {
        checkBtn.classList.add('active');
    }
    else {
        checkBtn.classList.remove('active');
    }
});