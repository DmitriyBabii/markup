
const todayYear = Date().split(' ')[3];
const rate = 36.65;
let input;

// Number: age
if (input = prompt('How old are you?')) {
    alert(`You were born in the ${todayYear - input}th year`);
}

// Number: temperature
if (input = prompt('What is the current temperature in Celsius?')) {
    alert(`It is now ${(+input * 9 / 5) + 32} degrees Fahrenheit.`);
}

// Number: divide
let a = 9, b = 3;
console.log(Math.round(a / b));

// Number: currency
if (input = prompt('Enter the dollar amount')) {
    alert(`It is ${(+input * rate).toFixed(2)}₴`);
}

// Number: RGB
if (input = prompt('Enter the your color in the format: "red,green,blue"')) {
    let colors = input.split(',')
    let r = colors[0], g = colors[1], b = colors[2];
    alert(`Your color is #${(+r).toString(16) + (+g).toString(16) + (+b).toString(16)}`);
}

// Number: flats
if (input = prompt('Enter info about building: "floors,flatsOnfloor,flatYouNeed"')) {
    let buildingInfo = input.split(',')
    let floors = buildingInfo[0], flatsOnfloor = buildingInfo[1], flatYouNeed = buildingInfo[2];
    let flatsOnEntarance = floors * flatsOnfloor;
    let entrance = Math.ceil(flatYouNeed / flatsOnEntarance);
    let floor = Math.ceil(flatYouNeed % flatsOnEntarance / flatsOnfloor);
    alert(`Flat you need is on the ${entrance} entrance, ${floor} floor`);
}