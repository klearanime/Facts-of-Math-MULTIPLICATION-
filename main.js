// gets the random numbers
let multiplier = Math.floor(Math.random()*12) + 1
let multiplicand = Math.floor(Math.random()*12) + 1
let correctAnswer = multiplier * multiplicand

// grab question, user input and answer
const cardText = document.querySelector('#cardArea')

// const userInput = document.querySelector('#userInput')
const correctness = document.querySelector('#check')

// function to multiply
const multiply = () => {
    return multiplier * multiplicand
}
multiply()

// function to make the problem appear
const makeProblem = () => {
    multiplier = Math.floor(Math.random()*12) + 1
    multiplicand = Math.floor(Math.random()*12) + 1
    correctAnswer = multiplier * multiplicand
    cardText.innerText = multiplier + ' X ' + multiplicand
}
makeProblem()

// function to make the answer appear and check for correctness
const userAnswer = () => {
    const userInput = document.querySelector('#userInput')
    let toNumber = parseInt(userInput.value)

    if (correctAnswer === toNumber) {
        correctness.style.color = "green"
        correctness.innerText = 'CORRECT!' + ' 😎'
        userInput.value = ""
        userInput.placeholder = 'answer'
        userInput.style.fontSize = '30px'
        setTimeout(makeProblem,2000)
    } else {
        correctness.style.color = "red"
        correctness.innerText = 'INCORRECT' + ' 💔'
        userInput.placeholder = 'try again'
        userInput.value = ""
        userInput.style.fontSize = '25px'
    }
    
} 

// event listeners for boxes
correctness.addEventListener('click', userAnswer)

console.log('checking')
console.log("it's broken below this point")