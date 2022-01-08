// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("clicked button");

  // 1. Prompt the user for the password criteria
  //   a. Password length 8 <128
  //   b. Lowercase, uppercase, numbers, special characters
  // 2. Validate the input
  // 3. Generate password based on criteria
  // 3. Display password on the page.

  return "insert password here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
