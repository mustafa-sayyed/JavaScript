function vowelFinder(str) {
    let vowel = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            vowel++;
        }
    }
    return `The Number of Vowels in ${str} is: ${vowel}`
}

const vowelCounter = (str) => {
    let count = 0;
    for (let char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return `The Number of Vowels in ${str} is: ${count}`
}


