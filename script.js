// Start app with D20 



// Generate random num between 1 and 20
function diceRoll() {
    return Math.floor(Math.random() * (20 - 1) + 1);
}



// Show results in center of #dice-container
// let displayDiv = document.


// Event listeners for buttons
const roll = document.querySelector('.roll');

roll.addEventListener('click' , () => {
    return console.log(diceRoll());
})




// Tests
// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());