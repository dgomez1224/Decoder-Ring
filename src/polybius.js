// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const square = [
    { letter: "a", number: 11 },
    { letter: "b", number: 21 },
    { letter: "c", number: 31 },
    { letter: "d", number: 41 },
    { letter: "e", number: 51 },
    { letter: "f", number: 12 },
    { letter: "g", number: 22 },
    { letter: "h", number: 32 },
    { letter: "i/j", number: 42 },
    { letter: "k", number: 52 },
    { letter: "l", number: 13 },
    { letter: "m", number: 23 },
    { letter: "n", number: 33 },
    { letter: "o", number: 43 },
    { letter: "p", number: 53 },
    { letter: "q", number: 14 },
    { letter: "r", number: 24 },
    { letter: "s", number: 34 },
    { letter: "t", number: 44 },
    { letter: "u", number: 54 },
    { letter: "v", number: 15 },
    { letter: "w", number: 25 },
    { letter: "x", number: 35 },
    { letter: "y", number: 45 },
    { letter: "z", number: 55 },
    { letter: " ", number: " " },
  ];

  function polybius(input, encode = true) {
    let coded = [];
    //First checks to see if the number of characters in the input is even (if it is decoding). Returns false if not.
    if (input.replace(" ", "").length % 2 === 1 && encode === false) {
      return false;
    }
    //Lines 46-55 run if the function is encoding the input
    if (encode) {
      //For loop goes thru the input character by character and encodes them according to its match in the square array.
      for (let i = 0; i < input.length; i++) {
        let code = input[i];
        for (let j = 0; j < square.length; j++)
        //checks to see if the square array has the given character and pushes the respective number into the coded array.
          if (square[j].letter.includes(code.toLowerCase())) {
            coded.push(square[j].number);
          }
      }
    }
    //If encode is false then it skips the previous lines and goes straight to the following code, the decoder
    else {
      for (let i = 0; i < input.length; i++) {
        //If there is a space in the input message it will push a space to the coded array. Otherwise it will continue in the else statement
        if (input[i] === " ") {
          coded.push(" ");
        } else {
          //Created a variable 'code' which will be 2 consecutive characters
          let code = `${input[i]}${input[i + 1]}`;
          for (let j = 0; j < square.length; j++) {
            //checks to see if code matches a number, pushes the letter at that number and increments the index by one
            if (code == square[j].number) {
              coded.push(square[j].letter);
              i++;
            }
          }
        }
      }
    }
    return coded.join("");
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
