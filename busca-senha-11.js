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
                    rainbow.forEach(l6 => {
                        rainbow.forEach(l7 => {
                            rainbow.forEach(l8 => {
                                rainbow.forEach(l9 => {
                                    rainbow.forEach(l10 => {
                                        rainbow.forEach(l11 => {
                                            verifyWord(l1+l2+l3+l4+l5+l6+l7+l8+l9+l10+l11, 11);
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
fs.writeFileSync(`senha-11.txt`, 'nada encontrado')
console.log('nada encontrado')


