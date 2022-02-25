// 1. prompt user for the password criteria
//    - password length 8 - 128
//    - lowercase, uppercase, numbers, special characters
// 2. validate input 
// 3. generate password based on criteria
// 4. display it in textbox 

// variables
var pwLength;

var lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '1234567890';
var specialCharacter = '~!@#$%^&*().';


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  pwLength = parseInt(prompt('How long do you want to make your password? Choose between 8 - 128 characters'));
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

