// Assignment code here
// Declaring variables in global scope
var passLength;
var lowerCase;
var upperCase;
var numeric;
var special;

// Function to ask for length of password
function askLength() {
  passLength = parseInt(prompt("How many characters should the password be? It must be at least 8 or up to 128 characters."));

  // Make sure length is between 8 and 128, otherwise, prompt again
  if(passLength < 8 || passLength > 128 || !passLength) {
    alert("Please choose a password length between 8 and 128 characters.");
    askLength();
  }
  return passLength;
}

// Function to ask for different character types
function askCharType() {
  // Ask to include lowercase
  lowerCase = confirm("Would you like to include lowercase characters?");

  // Ask to include uppercase
  upperCase = confirm("Would you like to include uppercase characters?");

  // Ask to include numbers
  numeric = confirm("Would you like to include numbers?");

  // Ask to include special characters
  special = confirm("Would you like to include special characters?");
  
  // Make sure at least one char type has been chosen, otherwise, ask again
  if(!lowerCase && !upperCase && !numeric && !special) {
    alert("Please choose at least one character type!");
    askCharType();
  }
}

function generatePassword() {
  // Ask how long the password should be
  askLength();

  // Ask for character types to include
  askCharType();

  // Arrays of character types
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";

  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var numericChar = "0123456789";

  var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Array for password generation
  var returnPass = "";

  if(lowerCase) {
    returnPass += lowerCaseChar;
  }
  if(upperCase) {
    returnPass += upperCaseChar;
  }
  if(numeric) {
    returnPass += numericChar;
  }
  if(special) {
    returnPass += specialChar;
  }

  for(i = 0; i < passLength; i++) {
    debugger;
    returnPass[i] = returnPass[Math.floor(Math.random() * returnPass.length)];
  }
  return returnPass;
}

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
