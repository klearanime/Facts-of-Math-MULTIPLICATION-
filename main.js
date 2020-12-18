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
}
makeProblem()


// function to make the answer appear and check for correctness
const userAnswer = () => {
    let toNumber = parseInt(userInput.value)
    if (correctAnswer === toNumber) {
        // do something
        correctness.style.color = "green"
        correctness.innerText = 'CORRECT!' + ' 😎'
        // set timer 2000
        makeProblem()
    } else  {
        correctness.style.color = "red"
        correctness.innerText = 'INCORRECT' + ' 💔'
        // try again
    }
    
} 


// event listeners for boxes
correctness.addEventListener('click', userAnswer)


// function to multiply
const multiply = () => {
    return multiplier * multiplicand
}
multiply()

console.log('checking')
console.log("it's broken below this point")