const md5 = require('md5');
const fs = require("fs");

const hashMD5 = '04ad07fc00c169e107bafb3219b6f9a8';
// const hashMD5 = md5('6933:asterisk:jefao123');


// const allFileContents = fs.readFileSync('./worldlists/dic-ptbr-utf8-2.txt', 'utf-8');
// const allFileContents = fs.readFileSync('./worldlists/dic-ptbr-utf8.txt', 'utf-8');
// const allFileContents = fs.readFileSync('./worldlists/first-name-pt-br.txt', 'utf-8');
// const allFileContents = fs.readFileSync('./worldlists/biblic-words-pt-br.txt', 'utf-8');
const allFileContents = fs.readFileSync('./worldlists/0xc0da-ptbr.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
    if (md5('6933:asterisk:'+line) === hashMD5) {
        console.log('a senha é: ', line);
        process.exit(0);
    }
});
console.log('nada encontrado')
