// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);
// Character id arrays
var charactersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charactersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charactersSpec = ["!", ")", "@", "(", "#", "*", "$", "&", "%", "^", "+", "/", "-", "?", ">", "<", ":", "{", "}"];
var charactersNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz'

const uppercaseCharacters = CHARACTERS.split().map((character) => character.toUppercase())

// Variable confirmation
var confirmCharLength = "";
var confirmCharNumb;
var confirmCharSpec;
var confirmCharLow;
var confirmCharUpp;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

