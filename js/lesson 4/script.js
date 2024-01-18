// Number: odd
let userLine = prompt("Enter some number")
let number = +userLine
console.log(`Number ${number} is ${number & 1 ? "odd" : "even"}`)

// String: lexics
userLine = prompt("Enter some line") // "Some line that has 3 bad words"
let badWords = ["bad", "word", "some", "title"]
let badWordCounter = 0
userLine = userLine.toLowerCase()
for (const bw of badWords) {
    if (userLine.includes(bw)) {
        badWordCounter++
    }
}
console.log(`User line has ${badWordCounter} bad words!!!`)

// Boolean
const questions = ["Are you here?", "Are you not here?", "Are you there?"]
const questionMark = {}
for (const q of questions) {
    questionMark[q] = confirm(q)
}
console.log(questionMark)

// Comparison: sizes
// З Великобританії у США
let britSize = +prompt("Enter british size")
let usaSize = britSize - 2;
let lastSize
const sizes = {
    6: "S",
    8: "M",
    12: "L",
    16: "XL",
    20: "XXL"
}
for (const size in sizes) {
    if (+size === usaSize) {
        alert(`USA size is ${usaSize}(${sizes[size]})`)
        break
    } else if (+size < usaSize) {
        lastSize = size
        continue
    }
    alert(`USA size is ${usaSize}(${sizes[lastSize]})`)
    break
}

// Ternary
console.log(confirm("Are u a man?") ? alert("You are a man!") : alert("You are a woman!"))

//Prompt: or
prompt("Enter your age") || alert("Error")

// Confirm: or this days
confirm("Shoping?") || alert("baka!")

// Confirm: if this days
if (!confirm("Shoping?")) {
    alert("baka!")
}

// Default: or
let user = {
    name: prompt("Name?") || "default",
    surname: prompt("Surname?") || "default",
    fatherName: prompt("Father name?") || "default"
}
console.log(user)

// Login and password
const userLoginData = {
    login: "admin",
    password: "qwerty"
}

while (true) {
    if (prompt("Enter login") === userLoginData.login) {
        if (prompt("Enter password") === userLoginData.password) {
            break;
        } else {
            alert("Wrong password!")
        }
    } else {
        alert("Wrong login!")
    }
}

// Currency exchange
const rate = {
    usd: 37.67,
    eur: 40.90
}

let currency = rate[prompt("Enter currency").toLowerCase()] || rate.usd
let isBuy = confirm("Do u wanna buy?")
isBuy ?
    alert(`That will cost ${(+prompt("How much?") * currency).toFixed(2)}₴`) :
    alert(`You will get ${(+prompt("How much?") / currency).toFixed(2)}`);

// Scissors (difficult)
const signs = ["paper", "rock", "scissors"]
let userSign, computerSign
const info = (result) => {
    alert(
        `
User: ${signs[userSign]}
Computer: ${signs[computerSign]}
Result: ${result}`
    )
}

while (true) {
    (userSign = +prompt("Enter sign (0 to 2)")) === (computerSign = Math.floor(Math.random() * signs.length)) ?
        info("equals") :
        userSign === 0 && computerSign === 1 ||
            userSign === 1 && computerSign === 2 ||
            userSign === 2 && computerSign === 0 ?
            info("user win") :
            info("computer win");
}






