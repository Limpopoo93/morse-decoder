const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

function decode(expr) {
    let newSss = [];

    for (let i = 0; i <= expr.length; i = i + 10) {
        let arrgs = [];
        for (let w = i; w < i + 10; w++) {
            if (expr[w] !== undefined) {
                arrgs.push(expr[w]);
            }
        }
        newSss.push(arrgs);
    }

    let morseResult = [];
    for (let q = 0; q < newSss.length; q++) {
        let morseSymbol = [];
        for (let a = 0; a < newSss[q].length; a += 2) {
            if (newSss[q][a] === '1' && newSss[q][a + 1] === '0') {
                morseSymbol.push(".");
            }
            if (newSss[q][a] === '1' && newSss[q][a + 1] === '1') {
                morseSymbol.push("-");
            }
        }
        morseResult.push(morseSymbol);
    }

    let result = [];

    for (let e = 0; e < morseResult.length; e++) {
        let value = '';
        for (let w = 0; w < morseResult[e].length; w++) {
            value = value + morseResult[e][w];
        }
        if (MORSE_TABLE.hasOwnProperty(value) === false) {
            result.push(" ");
        } else {
            result.push(MORSE_TABLE[value]);
        }
    }
    let joinResult = result.join('');

    return joinResult.trimEnd();
}

module.exports = {
    decode,
};
