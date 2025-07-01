let extractedNumbers = '';
let numberIsNegative = false;
let reachedNumber = false;

for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if ((char == '-' || char == '+') && !reachedNumber) {
        numberIsNegative = char == '-';
        reachedNumber = true;
        continue;
    } else if (char == ' ' && !reachedNumber) {
        continue;
    } else if (char != ' ' && char >= 0 && char <= 9) {
        extractedNumbers += char;
        reachedNumber = true;
    } else {
        if (!reachedNumber) {
            return 0;
        } else {
            break;
        }
    }
}

let totalNumber = 0;
for (let i = 0; i < extractedNumbers.length; i++) {
    const newVal =
        extractedNumbers[i] * Math.pow(10, extractedNumbers.length - i - 1);
    totalNumber += newVal;
}

if (totalNumber > 2147483647) {
    totalNumber = numberIsNegative ? 2147483648 : 2147483647;
}

return numberIsNegative ? -totalNumber : totalNumber;
