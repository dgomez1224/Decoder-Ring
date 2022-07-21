// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    //Will return false if there is no alphabet parameter or the alphabet parameter is shorter than 26 characters
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    //Creates a set using the alphabet parameter but only takes in unique characters, meaning that if there is a repeated character the length of the set will be less than 26 characters.
    if (new Set(alphabet).size !== 26) {
      return false;
    }
    //Two if statements that both check the encode parameter. If it is true than the source alphabet will be the regular alphabet and the destination alphabet will be the alphabet parameter and vice versa if the encode statement is false.
    const src = encode ? alpha : alphabet;
    const dest = encode ? alphabet : alpha;

    return (
      input
        //format input to lowercase
        .toLowerCase()
        //creates an array from the input string
        .split("")
        .map((char) => {
          //if the src alphabet does not include the character at a given index then it will push the character to the array without altering it.
          if (!src.includes(char)) return char;
          //stores the index of the given character in the source alphabet into a variable
          const idx = src.indexOf(char);
          //returns the index of the given character from the destination alphabet
          return dest[idx];
        })
        //transform the array back into a string.
        .join("")
    );
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
