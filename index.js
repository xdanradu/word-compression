const fs = require('fs'),
  filename = 'common-words.txt';
const lib = require('bits-utils');

function loadWords() {
  const input = fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' });
  let words = input.split('\n');
  words.push(' ');
  words.push('\n');
  return words;
}

function getCodes(words) {
  let codes = new Map();
  words.forEach((word, index) => {
    codes.set(word, index.toString(2).padStart(8, '0'));
  });
  return codes;
}

function getInvertedWords(words) {
  return new Map([...words.entries()].map(([key, value]) => [value, key]));
}

function encodeOneWord(word, codes) {
  let buffers = new Uint8Array(1);
  const code = codes.get(word);
  for (let i = 0; i < code.length; i++) {
    lib.setBit(buffers, 0, i, code[i]);
  }
  return buffers;
}

function decodeOneWord(binaryData, invertedCodes) {
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += lib.readBit(binaryData, 0, i);
  }
  const word = invertedCodes.get(code);
  return word;
}

words = loadWords();
codes = getCodes(words);
invertedCodes = getInvertedWords(codes);
//console.log(invertedCodes);
binaryData = encodeOneWord('have', codes);

let testBuffers = new Uint8Array(1);
for (let i = 5; i < 8; i++) {
  lib.setBit(testBuffers, 0, i, 1);
}
console.log(lib.printBuffer(testBuffers));
console.log(decodeOneWord(testBuffers, invertedCodes));

// console.log(binaryData);
// console.log(lib.printBuffer(binaryData))
