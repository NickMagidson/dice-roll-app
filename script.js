// Generate random num between 1 and 20
let dice = {
    sides: 20,
    roll: function () {
        let randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

//Print the number
function printNumber(number) {
    var placeholder = document.getElementById('.dice-container');
    placeholder.innerHTML = number;
  }
}



// Show results in center of #dice-container
const displayDiv = document.getElementById('#dice-container');


// Event listeners for buttons
const roll = document.querySelector('.roll');

//Button for roll
roll.addEventListener('click' , () => {
    return console.log(diceRoll());
})

//Display on div block
//roll.textContent = '';
//roll.classList.add = '';
//displayDiv.appendChild(roll);





// Tests
// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());
// console.log(diceRoll());