// 1. prompt user for the password criteria
//    - password length 8 - 128
//    - lowercase, uppercase, numbers, special characters
// 2. validate input 
// 3. generate password based on criteria
// 4. display it in textbox 

// characters
var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "."];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword function 
function generatePassword() {
  console.log("clicked button");
  var newPwLength = prompt('How long do you want to make your password? Choose between 8 - 128 characters');
  newPwLength = parseInt(newPwLength);
  console.log(newPwLength);

  // prompt user to choose password length
  if (!newPwLength) {
    alert("Enter a valid number.");
  } else if (parseInt(newPwLength) < 8) {
    alert("That is not within the password limit. Please try again.");
    generatePassword();
  } else if (parseInt(newPwLength) > 128) {
    alert("That is not within the password limit. Please try again.");
    generatePassword();
  }
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



