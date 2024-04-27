let answer;
let problem;

function generateAddition() {
    const num1 = Math.floor(Math.random() * 95) + 5;
    const num2 = Math.floor(Math.random() * 95) + 5;
    answer = num1 + num2;
    problem = `${num1} + ${num2} = ?`
}

function generateSubtraction() {
    const num1 = Math.floor(Math.random() * 95) + 5;
    const num2 = Math.floor(Math.random() * 95) + 5;
    if (num1 > num2) {
        answer = num1 - num2;
        problem = `${num1} - ${num2} = ?`
    } else {
        answer = num2 - num1;
        problem = `${num2} - ${num1} = ?`
    }
}

function generateMultiplication() {
    const num1 = Math.floor(Math.random() * 95) + 5;
    const num2 = Math.floor(Math.random() * 2) + 8;
    answer = num1 * num2;
    problem = `${num1} x ${num2} = ?`
}

let problemOptions = [1,2,3];
let index = problemOptions[Math.floor(Math.random() * 3)];
console.log(index)

switch(index) {
    case 1:
        generateAddition();
        break;
    case 2:
        generateSubtraction();
        break;
    case 3:
        generateMultiplication();
        break;
    default:
        null;
}

$(".problem").text(problem)

function clearAnswer() {
    console.log('clear registered')
    $(".answer").text("")
}

function addNumber(num) {
    console.log("click registered")
    const previousAnswer = $(".answer").text();
    $(".answer").text(previousAnswer + num);
    if (parseInt($(".answer").text()) == answer) {
        alert("You got the answer!")
    }
}