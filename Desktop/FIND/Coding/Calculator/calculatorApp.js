var inputText = document.getElementById("inputText")
var inputTextuals = []
var inputNumber1 = 0
var inputOperator1 = ""
var inputNumber2Holder = []
var inputNumber2 = 0
var inputResult = 0
var inputSecret = document.getElementById("inputSecret")

function inputNumber(number) {
    inputTextuals += number
    inputText.innerHTML = (inputTextuals)
    if ((inputOperator1 == "+") || (inputOperator1 == "-") || (inputOperator1 == "x") || (inputOperator1 == "/")) {
        inputNumber2Holder += number
    }
}

function inputOperator(operator) {
    inputNumber1 += Number(inputTextuals)
    if (operator == "plus") {
        inputTextuals += "+"
        inputOperator1 = "+"
    } else if (operator == "minus") {
        inputTextuals += "-"
        inputOperator1 = "-"
    } else if (operator == "times") {
        inputTextuals += "x"
        inputOperator1 = "x"
    } else if (operator == "divide") {
        inputTextuals += "/"
        inputOperator1 = "/"
    }
    inputText.innerHTML = (inputTextuals)
}

function inputEquals() {
    inputResult = 0
    inputNumber2 += Number(inputNumber2Holder)
    // console.log("inputTextuals: " + inputTextuals + "; inputNumber1: " + inputNumber1 + "; inputOperator1: " + inputOperator1 + "; inputNumber2Holder: " + inputNumber2Holder + "; inputNumber2: " + inputNumber2)
    if (inputOperator1 == "+") {
        inputResult = inputNumber1 + inputNumber2
    } else if (inputOperator1 == "-") {
        inputResult = inputNumber1 - inputNumber2
    } else if (inputOperator1 == "x") {
        inputResult = inputNumber1 * inputNumber2
    } else if (inputOperator1 == "/") {
        inputResult = inputNumber1 / inputNumber2
    } else if (inputOperator1 == "") {
        inputResult = inputTextuals
    }
    if (inputResult == 8675309) {
        musicChange("8675309.mp3")
    } else if (inputResult == 68) {
        musicChange("68.mp3")
    } else if (inputResult == 69) {
        musicChange("69.mp3")
    }
    inputText.innerHTML = inputResult
    inputTextuals = []
    inputNumber1 = 0
    inputOperator1 = ""
    inputNumber2Holder = []
    inputNumber2 = 0
}

function inputClear() {
    inputTextuals = []
    inputNumber1 = 0
    inputOperator1 = ""
    inputNumber2Holder = []
    inputNumber2 = 0
    inputText.innerHTML = ""
}

function musicChange(song) {
    musicCurrent = document.getElementById("musicCurrent")
    musicCurrent.src = song
    musicCurrent.play()
    console.log("Secret found! " + song + " now playing!")
    inputSecret.innerHTML = "Secret found! " + song + " now playing!"
}