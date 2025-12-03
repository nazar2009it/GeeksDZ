const gmailInput = document.getElementById('gmail_input')
const gmailButton = document.getElementById('gmail_button')
const gmailResult = document.getElementById('gmail_result')


const gmailReg = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

gmailButton.addEventListener('click', () => {
    const value = gmailInput.value.trim()

    if (gmailReg.test(value)) {
        gmailResult.textContent = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.textContent = 'ERROR'
        gmailResult.style.color = 'red'
    }
})
const parentBlock = document.querySelector(`.parent_block`)
const childBlock = document.querySelector(`.child_block`)

const parentWidth = parentBlock.clientWidth - childBlock.offsetWidth
const parentHeight = parentBlock.clientHeight - childBlock.offsetHeight

let positionX = 0
let positionY = 0

const moveblock = () => { 
    if (positionY === 0 && positionX < parentWidth) {
        positionX++
    }
    else if (positionX === parentWidth && positionY < parentHeight) {
        positionY++
    }
    else if (positionY === parentHeight && positionX > 0) {
        positionX--
    }
    else if (positionX === 0 && positionY > 0) {
        positionY--
    }

    childBlock.style.left = `${positionX}px`
    childBlock.style.top = `${positionY}px`

    requestAnimationFrame(moveblock)
}

moveblock()
const secondsElement = document.getElementById('seconds')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')

let counter = 0          
let intervalId = null    
let isRunning = false    
const renderCounter = () => {
    secondsElement.textContent = counter
}
startBtn.addEventListener('click', () => {
    if (isRunning) return

    isRunning = true

    intervalId = setInterval(() => {
        counter++
        renderCounter()
    }, 1000)
})
stopBtn.addEventListener('click', () => {
    if (!isRunning) return 

    isRunning = false
    clearInterval(intervalId)
    intervalId = null
})
resetBtn.addEventListener('click', () => {
    if (intervalId !== null) {
        clearInterval(intervalId)
        intervalId = null
    }

    isRunning = false
    counter = 0
    renderCounter()
})

