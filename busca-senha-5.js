const alphabet = require('alphabet');
const fs = require("fs");
const {verifyWord} = require("./verifyWord");

const upper = alphabet.upper;
const lower = alphabet.lower;
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const rainbow = lower.concat(numbers).concat(upper);

rainbow.forEach(l1 => {
    rainbow.forEach(l2 => {
        rainbow.forEach(l3 => {
            rainbow.forEach(l4 => {
                rainbow.forEach(l5 => {
                    verifyWord(l1+l2+l3+l4+l5, 5);
                })
            })
        })
    })
})
fs.writeFileSync(`senha-5.txt`, 'nada encontrado')
console.log('nada encontrado')

