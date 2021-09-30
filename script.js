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
    let displayDiv = document.querySelector('#dice-container');
    displayDiv.innerHTML = number;
  }

// Roll Button
const button = document.querySelector('.roll')




//Button for roll
button.addEventListener('click' , () => {
    let result = dice.roll();
    return printNumber(result);
})

//Display on div block
//roll.textContent = '';
//roll.classList.add = '';
//displayDiv.appendChild(roll);



