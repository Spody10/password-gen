// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);
// Get references to the #generate element

// Character id arrays
var charactersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charactersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charactersSpec = ["!", ")", "@", "(", "#", "*", "$", "&", "%", "^", "+", "/", "-", "?", ">", "<", ":", "{", "}"];
var charactersNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


// Variable confirmation
var confirmCharLength = "";
var confirmCharNumb;
var confirmCharSpec;
var confirmCharLow;
var confirmCharUpp;

function generatePassword () {
  var confirmCharLength = (prompt("How many characters would you like for your password?"));
 
//Loop

while(confirmCharLength <= 7 || confirmCharLength >= 129) {
  alert("Password length has to be 8-128 characters long. Please select again.");
  var confirmCharLength = (prompt("How maany character would you like your password?"));
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
//var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword)};