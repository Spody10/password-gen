// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);
// Get references to the #generate element

// Character id arrays
var charactersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charactersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charactersSpec = ["!", ")", "@", "(", "#", "*", "$", "&", "%", "^", "+", "/", "-", "?", ">", "<", ":", "{", "}"];
var charactersNumb = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


// Variable confirmation
var confirmCharLength = "";
var confirmCharNumb;
var confirmCharSpec;
var confirmCharLow;
var confirmCharUpp;

function generatePassword () {
  var confirmCharLength = (prompt("How many characters would you like for your password?"));
 
//Loop confirming password length meets criteria of 8-128 characters

while(confirmCharLength <= 7 || confirmCharLength >= 129) {
  alert("Password length has to be 8-128 characters long. Please select again.");
  var confirmCharLength = (prompt("How maany character would you like your password?"));
}
// Variable to store number characters
var confirmCharNumb = confirm ("Would you like to use numbers?");
// Variable to store special characters 
var confirmCharSpec = confirm ("Would you like to use special characters?");
// Variable to store lowercase characters 
var confirmCharLow = confirm ("Would you like to use lowercase letters?");
// Variable to store uppercase characters 
var confirmCharUpp = confirm ("Would you like to use uppercase letters?");
// Conditional statement to check if user criteria met
  while(confirmCharNumb === false && confirmCharSpec === false && confirmCharLow === false && confirmCharUpp === false) {
    alert("You must choose 1 parameter at a minimum.");
    var confirmCharNumb = confirm ("Would you like to use numbers?");
    var confirmCharSpec = confirm ("Would you like to use special characters?");
    var confirmCharLow = confirm ("Would you like to use lowercase letters?");
    var confirmCharUpp = confirm ("Would you like to use uppercase letters?");
  }
  var passwordChar = []

  if (confirmCharNumb) {
    passwordChar = passwordChar.concat(charactersNumb)
  }
  if (confirmCharSpec) {
    passwordChar = passwordChar.concat(charactersSpec)
  }
  if (confirmCharLow) {
    passwordChar = passwordChar.concat(charactersLower)
  }
  if (confirmCharUpp) {
    passwordChar = passwordChar.concat(charactersUpper)
  }
  console.log (passwordChar)

  // Function to get random array

  var RandomPasswordGen = ""
  for (var i = 0; i < confirmCharLength; i++) {
    RandomPasswordGen = RandomPasswordGen + passwordChar[Math.floor(Math.random() * passwordChar.length)];
    console.log(RandomPasswordGen)
  }
  return RandomPasswordGen
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