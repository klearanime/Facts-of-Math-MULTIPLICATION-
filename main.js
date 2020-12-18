console.log('dop')
// gets the random numbers
let multiplier = Math.floor(Math.random()*12) + 1
let multiplicand = Math.floor(Math.random()*12) + 1
let correctAnswer = multiplier * multiplicand
// grab question, user input and answer
const cardText = document.querySelector('#cardArea')
const userInput = document.querySelector('#userInput')
const correctness = document.querySelector('#check')
// function to make the problem appear
const makeProblem = () => {
    cardText.innerText = multiplier + 'X' + multiplicand + '=' + correctAnswer
    // cardText.appendChild('#card')

}
makeProblem();
// function for answer
// const userAnswer = () => {
//     userInput.value = 
// }

// function to multiply
const multiply = () => {
    return multiplier * multiplicand
}
multiply()

console.log('checking')