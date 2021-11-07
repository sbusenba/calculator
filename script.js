
function numButtonPush(e){
    inputDisplay.textContent += this.textContent
}
function operatorPush(e){
    if ((inputDisplay.textContent === '')&&(this.textContent==='-')){
        inputDisplay.textContent = inputDisplay.textContent + '-'

    } else if((inputDisplay.textContent != '')&&(outputDisplay.textContent ==='')){
    operatorDisplay.textContent=this.textContent
    outputDisplay.textContent = inputDisplay.textContent
    inputDisplay.textContent=''
    }else if((outputDisplay.textConent != '')&&(inputDisplay.textContent=== '')){
        operatorDisplay.textContent=this.textContent
    }
    
}
function equalsPush(){
    console.log(operatorDisplay.textContent)
    console.log(inputDisplay.textContent)
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
        case '-':

            outputDisplay.textContent = Number(inputDisplay.textContent) - Number(outputDisplay.textContent)
            inputDisplay.textContent=''
            operatorDisplay.textContent=''
            
            break
        case 'x':
            outputDisplay.textContent = Number(inputDisplay.textContent) * Number(outputDisplay.textContent)
            inputDisplay.textContent=''
            operatorDisplay.textContent=''
            break
        case '/':
            outputDisplay.textContent = Number(inputDisplay.textContent) / Number(outputDisplay.textContent)
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


