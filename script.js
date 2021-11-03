
function numButtonPush(e){
    inputDisplay.textContent += this.textContent
}
function operatorPush(e){
    operatorDisplay.textContent=this.textContent
    outputDisplay.textContent = inputDisplay.textContent
    inputDisplay.textContent=''
    
}
function equalsPush(){
    console.log(operatorDisplay.textContent)
    switch (operatorDisplay.textContent){
    case '':
        outputDisplay.textContent=inputDisplay.textContent
        inputDisplay.textContent=''
        break
    case '+':
        outputDisplay.textContent = Number(inputDisplay.textContent) + Number(outputDisplay.textContent)
        inputDisplay.textContent=''
        operatorDisplay.textContent=''
        break
    }


}
const numButtons = document.querySelectorAll('.number')
numButtons.forEach((button) => {
    button.addEventListener('click',numButtonPush)
})
const operButtons = document.querySelectorAll('.operator')
operButtons.forEach((button) => {
    button.addEventListener('click',operatorPush)
})
const inputDisplay = document.querySelector('.display-input')
const outputDisplay = document.querySelector('.display-output')
const operatorDisplay = document.querySelector('.display-operator')
document.querySelector('#equalsbutton').addEventListener('click',equalsPush)


