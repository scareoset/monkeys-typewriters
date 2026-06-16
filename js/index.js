var consoleBlock = document.getElementById("consoleBlock");

// literal interpretation --> add random character to string, compare string to CANON_STRING
// ~~ASCII lowercase a-z = [97,122] space = 32~~
// BETTER VERSION: make string to sample & pull char at random index

// questions to worry about ✨later✨

let monkeyLine = "";
let monkeyIndex = 0;
const MONKEY_SAMPLE = "qwertyuiop asdfghjklzxcvbnm";
const SAMPLE_SIZE = MONKEY_SAMPLE.length;
const CANON_STRING = "the quick brown fox jumps over the lazy dog."

// preconditions:
// - none
// 
// has a return of true or false
// - true --> new letter matches next CANON letter
// - false --> new letter is wrong and bad, scrap it and start over?
//s
// postconditions:
// - monkeyIndex will increment or reset to 0
// - monkeyLine will gain a CANON character or reset to ""
function nextMonkeyCharacter() {
    // get a random number between 0 and SAMPLE_SIZE to use as a random index
    const randomInd = Math.floor(Math.random() * MONKEY_SAMPLE.length);
    console.log(randomInd);
    // grab the character in MONKEY_SAMPLE at that random index!
    const result = MONKEY_SAMPLE.charAt(randomInd);
    console.log(result);
    // compare newCharacter to CANON_STRING's [monkeyIndex]th character
    return result.charAt(0) === CANON_STRING.charAt(monkeyIndex);
}

// print character generated
// print the result of the comparison
// print the current monkeyLine
function oneStep() {
    // if true, character was correct!
    if (nextMonkeyCharacter() === true) {
        console.log("monkey correctly typed the next character: " + CANON_STRING.charAt(monkeyIndex));
        // remember to move the monkeyIndex forward
        monkeyIndex++;
        console.log("monkey's current line is " + monkeyLine);
    } else {
        // sad times, man
        console.log("monkey incorrectly typed the next character :(");
        // remember to reset monkeyIndex
        monkeyIndex = 0;
        // remember to reset monkeyLine
        monkeyLine = "";
        console.log("monkey's current line is " + monkeyLine);
    }
}

console.log("ready!");

// -------FOR LATER LMAO-------------
// setInterval(updatePage, 1000);
// console.log("meow");

// function updatePage() {
  
// }

// function consoleLog(log) {
//   let newText = "<p>" + log + "</p>";
//   consoleBlock.innerHTML = newText + consoleBlock.innerHTML;
// }

