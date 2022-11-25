const alphabet = require('alphabet');
const fs = require("fs");
const {verifyWord} = require("./verifyWord.js");

const upper = alphabet.upper;
const lower = alphabet.lower;
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const rainbow = lower.concat(numbers).concat(upper);

rainbow.forEach(l1 => {
    rainbow.forEach(l2 => {
        verifyWord(l1+l2, 0);
    })
})
fs.writeFileSync(`senha-0.txt`, 'nada encontrado')
console.log('nada encontrado')
