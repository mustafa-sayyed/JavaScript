let res = document.getElementById("result")
let ans = 12;
let inputNum = Number(prompt("Enter a Number:"))

while (ans !== inputNum) {
    inputNum = Number(prompt("Enter a Correct Number: "));
    console.log(typeof inputNum);
}

console.clear()
console.log("Number Matched");
res.textContent = "Number Matched: " + inputNum

