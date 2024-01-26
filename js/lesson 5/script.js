// Confirms
{
    const questions = ["Are u here?", "Are u there?", "Are u?"]
    const answears = questions.map(confirm)
    console.log(questions, answears)
}

// Prompts
{
    const questions = ["Where are u?", "How old are u?"]
    const answears = []
    let i = 0;
    for (const q of questions) {
        answears[i++] = prompt(q)
    }
    console.log(answears)
}

// Item access
{
    const arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(i)
    }
    console.log(`Your element is ${arr[+prompt("Enter index")]}, length is ${arr["length"]}`)
}

// Item change
{
    const arr = []
    arr[+prompt("Enter index")] = prompt("Enter value")
    console.log(arr)
}


{
    // Multiply table
    const arr = []
    for (let i = 0; i < 5; i++) {
        arr[i] = []
        for (let j = 0; j < 5; j++) {
            arr[i][j] = (i + 1) * (j + 1)
        }
    }
    console.log(arr)

    // Multiply table slice
    const newArr = arr.slice(1)
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = arr[i + 1].slice(1)
    }
    console.log(newArr)
}

// IndexOf Word
{
    const words = prompt("Enter some line").split(" ")
    const findWord = prompt("Word to find")
    const index = words.indexOf(findWord)
    if (index !== -1) {
        console.log(`Your word on index ${index}`)
    } else {
        console.log("No such word")
    }
}

// Reverse
{
    const arr = []

    for (let i = 0; i < 5; i++) {
        arr[i] = prompt("Enter some element")
    }

    const arr2 = [...arr]
    const size = arr.length
    const newArr = []
    for (let i = 0; i < size; i++) {
        newArr.push(arr.pop());
    }
    console.log(newArr)

    // Reverse 2
    const newArr2 = []
    for (let i = 0; i < size; i++) {
        newArr2.unshift(arr2.shift());
    }
    console.log(newArr2)
}

// Copy
{
    const arr = []
    for (let i = 0; i < 5; i++) {
        arr[i] = []
        for (let j = 0; j < 5; j++) {
            arr[i][j] = (i + 1) * (j + 1)
        }
    }

    const copy = arr
    console.log(copy)

    // Deep copy
    const deepCopy = arr.slice()
    console.log(deepCopy)
}


// Array Equals
{
    const arr = []
    const arr2 = arr
    console.log(arr === arr2)
}

// Flat
{
    const arr = []
    for (let i = 0; i < 5; i++) {
        arr[i] = []
        for (let j = 0; j < 5; j++) {
            arr[i][j] = (i + 1) * (j + 1)
        }
    }

    const flatArr = []
    arr.forEach(e => flatArr.push(...e))
    console.log(flatArr)
}

// Destruct
{
    const userLine = prompt("Enter some line")
    const [first, fifth, nineth] = [userLine[0], userLine[4], userLine[8]]
    console.log(first, fifth, nineth)
}

// Destruct default
{
    const userLine = prompt("Enter some line")
    const [second = "!", fourth = "!", fifth = "!"] = [userLine[1], userLine[3], userLine[4]]
    console.log(second, fourth, fifth)
}

// Multiply table rest
{
    const arr = []
    for (let i = 0; i < 5; i++) {
        arr[i] = []
        for (let j = 0; j < 5; j++) {
            arr[i][j] = (i + 1) * (j + 1)
        }
    }

    const [, ...newArr] = arr
    for (let i = 0; i < newArr.length; i++) {
        [, ...newArr[i]] = arr[i + 1]
    }
    console.log(newArr)
}

// For Alert
{
    const users = ["John", "Paul", "George", "Ringo"]
    for (const name of users) {
        alert(name)
    }
}

// For Select Option
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    for (const currency of currencies) {
        str += `<option>${currency}</option>`
    }
    str += "</select>"
    document.write(str)
}

// For Table Horizontal
{
    const names = ["John", "Paul", "George", "Ringo"]
    let str = "<table border='1'>"
    for (const name of names) {
        str += `<th>${name}</th>`
    }
    str += "</table>"
    document.write(str)
}

// For Table Vertical
{
    const names = ["John", "Paul", "George", "Ringo"]
    let str = "<table border='1'>"
    for (const name of names) {
        str += `<tr><td>${name}</td></tr>`
    }
    str += "</table>"
    document.write(str)
}

// For Table Letters
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<table border='1'>"
    for (const currency of currencies) {
        str += "<tr>"
        for (const letter of currency) {
            str += `<td>${letter}</td>`
        }
        str += "</tr>"
    }
    str += "</table>"
    document.write(str)
}

// For Multiply Table
{
    const arr = []
    for (let i = 0; i < 5; i++) {
        arr[i] = []
        for (let j = 0; j < 5; j++) {
            arr[i][j] = (i + 1) * (j + 1)
        }
    }
    let str = "<table border='2'>"
    let flag = false
    for (const line of arr) {
        str += flag ? "<tr>" : "<tr style='background-color: gray;'>"
        flag = !flag
        for (const element of line) {
            str += `<td>${element}</td>`
        }
        str += "</tr>"
    }
    str += "</table>"
    document.write(str)
}

// Function Capitalize
const capitalize = str => {
    let result
    str = str.toLowerCase()
    result = str[0].toUpperCase() + str.slice(1)
    return result //саме цей код забезпечить повернення результату функції
}
console.log(capitalize("cANBerRa"))

// Map Capitalize
const words = []
for (let i = 0; i < 5; i++) {
    words.push(Math.random().toString(36).slice(2))
}
console.log(words.map(capitalize))

// Filter Lexics
{
    const userLine = prompt("Enter some line")
    const banWords = ["ban", "some", "word"]
    console.log(userLine.split(" ").filter(word => !banWords.includes(word.toLowerCase())).join(" "))
}

// Beep Lexics
{
    const userLine = prompt("Enter some line")
    const banWords = ["ban", "some", "word"]
    console.log(userLine.split(" ").map(word => banWords.includes(word.toLowerCase()) ? "BEEP" : word).join(" "))
}

// Reduce HTML
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    str += currencies.reduce((a, b) => a === currencies[0] ?
        `<option>${a}</option><option>${b}</option>` :
        `${a}<option>${b}</option>`)
    str += "</select>"
    document.write(str)
}

// For Brackets Hell Check
{
    const line = prompt()
    const bracketsStack = []
    const bracketsAccept = ['(', ')', '[', ']', '{', '}']
    let i = 0
    for (const character of line) {
        // ignore symbols
        if (!bracketsAccept.includes(character)) {
            continue
        }

        // invert check for odd index, that means open bracket
        if (!(bracketsAccept.indexOf(character) & 1)) {
            bracketsStack.push(character)
        } else {
            const topBracket = bracketsStack.pop();
            if (character !== getPairedBracket(topBracket)) {
                console.log(`Помилка на позиції ${i}: відкривається ${topBracket}, закривається ${character}`);
                break;
            }
        }
        i++
    }

    if (bracketsStack.length === 0) {
        console.log('Рядок не містить помилок');
    } else {
        console.log('Рядок містить помилки');
    }

    function getPairedBracket(bracket) {
        return {
            '(': ')',
            '[': ']',
            '{': '}',
        }[bracket];
    }
}
