function showMultiplicationTable(number) {
    let output = ""
    for (let x = 1; x <= 10; x++) {
        output += " 7 * " + x + " = " + (number * x);
    }
    return output;
}
console.log(showMultiplicationTable(7));


var randomNum = Math.floor(Math.random() * 181) + 20;

for (var i = 0; i < 500; i++) {
    var randomNum = Math.floor(Math.random() * 180) + 20;
    if (randomNum < 20 || randomNum > 200) {
        console.log(("What's up"));
    } else if (randomNum === 20 || randomNum === 200) {
        console.log("sooooo");
    }
    console.log(randomNum);
}