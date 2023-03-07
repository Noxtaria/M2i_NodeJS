const fs = require('fs')

// Démo Node js fs (Sync Read)

let in_data = fs.readFileSync('./fn_input.txt');

console.log('Sync input file contnet : ' + in_data);

console.log("Program Ended")