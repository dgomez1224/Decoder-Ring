// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    //First check to see if the shift input is between -25 and 25 and does not equal 0
    if (shift < -25 || shift > 25 || shift === 0) return false;
    //Created an empty array to hold the output message
    let coded = [];
    //If the function is decoding it will reverse the shift then continue on thru the functiion
    if (!encode) {
      shift *= -1;
    }
    //For loop will loop thru the input message by character, switch the character to lower case, change the character into its respective character code and then add (or subtract if decoding) the shift.
    for (let i = 0; i < input.length; i++) {
      let lowerCase = input.toLowerCase();
      let char = lowerCase.charCodeAt([i]);
      let shifted = char + shift;
      //Check to see if char is a lowercase letter
      if (char >= 97 && char <= 122) {
        //If the character code is shifted outside the parameters of a lowercase letter then the following if statements will loop it back into the parameters and push it to the empty array. If not, it will push the shifted char code to our empty array
        if (shifted > 122) {
          coded.push(shifted - 26);
        } else if (shifted < 97) {
          coded.push(shifted + 26);
        } else {
          coded.push(shifted);
        }
      } else {
        coded.push(char);
      }
    }
    //Converts the coded array into a string and returns it.
    return String.fromCharCode(...coded);
    
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
