// Start app with D20 



// Generate random num between 1 and 20
function diceRoll() {
    return Math.floor(Math.random() * (20 - 1) + 1);
}



// Show results in center of #dice-container
const displayDiv = document.getElementById('#dice-container');


// Event listeners for buttons
const roll = document.querySelector('.roll');

roll.addEventListener('click' , () => {
    return console.log(diceRoll());
})

//roll.textContent = '';
//roll.classList.add = '';
//displayDiv.appendChild(roll);



// Tests
// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());