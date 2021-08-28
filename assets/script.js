// Assignment code here
// Function to ask for length of password
function askLength() {
  var passLength = parseInt(prompt("How many characters should the password be? It must be at least 8 or up to 128 characters."));

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
  var lowerCase = confirm("Would you like to include lowercase characters?");

  // Ask to include uppercase
  var upperCase = confirm("Would you like to include uppercase characters?");

  // Ask to include numbers
  var numeric = confirm("Would you like to include numbers?");

  // Ask to include special characters
  var specialChar = confirm("Would you like to include special characters?");
  
  // Make sure at least one char type has been chosen, otherwise, ask again
  if(!lowerCase && !upperCase && !numeric && !specialChar) {
    alert("Please choose at least one character type!");
    askCharType();
  }
}

function generatePassword() {
  // Ask how long the password should be
  askLength();

  // Ask for character types to include
  askCharType();

  // Array of characters
  
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
