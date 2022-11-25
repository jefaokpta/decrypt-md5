const md5 = require("md5");
const fs = require("fs");

const hashMD5 = '04ad07fc00c169e107bafb3219b6f9a8';
// const hashMD5 = 'c44d4447e0dc1ea89404cb8248d939d8'; // teste

function verifyWord(word, number) {
    console.log('testando ', word);
    if (md5('1686933:asterisk:'+word) === hashMD5) {
        const result = 'a senha é: ' + word;
        console.log(result);
        fs.writeFileSync(`senha-${number}.txt`, result)
        process.exit(0)
    }
}

module.exports = {verifyWord};
