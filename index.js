const md5 = require('md5');
const fs = require("fs");

const hashMD5 = '04ad07fc00c169e107bafb3219b6f9a8';
// const hashMD5 = md5('6933:asterisk:jefao123');
// hash 6166 c577b580e2f2133a56494cdf3c944435

// const allFileContents = fs.readFileSync('./worldlists/first-name-pt-br.txt', 'utf-8');
// const allFileContents = fs.readFileSync('./worldlists/biblic-words-pt-br.txt', 'utf-8');.

// const allFileContents = fs.readFileSync('./worldlists/0xc0da-ptbr.txt', 'utf-8');
// const allFileContents = fs.readFileSync('./worldlists/weakpass_3a', 'utf-8');
// const allFileContents = fs.readFileSync('./worldlists/dic-ptbr-utf8-2.txt', 'utf-8');
const allFileContents = fs.readFileSync('./worldlists/dic-ptbr-utf8.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
    console.log(`testando-${line}-`);
    if (md5('1686933:asterisk:'+line) === hashMD5) {
        console.log('a senha é: ', line);
        process.exit(0);
    }
});
console.log('nada encontrado')

// fs.readFile('./worldlists/weakpass_3a', (err, data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// })

let data = ''
// const readStream = fs.createReadStream('./worldlists/weakpass_3a', 'utf-8');
// const readStream = fs.createReadStream('./worldlists/dic-ptbr-utf8-2.txt', 'utf-8');
// readStream.on('error', (error) => console.log(error.message));
// readStream.on('data', (chunk) => handleData(chunk));
// readStream.on('end', () => console.log('Reading complete'));

// data.split(/\r?\n/).forEach(line =>  {
//     console.log(line);
//     if (md5('1686933:asterisk:'+line) === hashMD5) {
//         console.log('a senha é: ', line);
//         process.exit(0);
//     }
// });

function handleData(data) {
    console.log('testando ');
    // if (md5('1686933:asterisk:'+data) === hashMD5) {
    //     console.log('a senha é: ', data);
    //     process.exit(0);
    // }
}

// padrao RS+dia+mes+ramal+VIP

// for (let mes = 1; mes < 13; mes++) {
//     for (let dia = 1; dia < 32; dia++) {
//         const diaStr = dia < 10 ? '0'+dia : dia;
//         const mesStr = mes < 10 ? '0'+mes : mes;
//         const teste = '1686933:asterisk:RS'+diaStr+mesStr+'6933VIP';
//         // const teste = `${diaStr}${mesStr}`;
//         if (md5(teste) === hashMD5) {
//             console.log('a senha é: ', teste);
//             process.exit(0);
//         }
//     }
// }
