var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!','@','£','$','%','^','&','*','(',')','_','-','+','+','[',']','{','}',':','|','?','/'];
var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Q','Y','Z'];
var numbersArr = ['9','8','7','6','5','4','3','2','1','0',]


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("hey! you clicked the button");

  // 1. Prompt the user for the password criteria
  //   a. Password length 8 <128
  //   b. Lowercase, uppercase, numbers, special characters
  // 2. Validate the input
  // 3. Generate password based on criteria
  // 3. Display password on the page.

  return "generated password displayed here";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword (

)
function getPrompts() {
    characterLength = parseInt(prompt("how many characters do you want your password to be (8-123 characters")); //NaN
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { // this should be false
    alert("character length mush include a number, 8 - 128 digits, please try again. ");
}
if (confirm("would you like lowercase letters in your password")) {
    choiceArr = choiceArr.concat(lowercaseArr);
}
if (confirm("would you like uppercase letters in your password")) {
    choiceArr = choiceArr.concat(uppercaseArr);
}
if (confirm("would you like special letters in your password")) {
    choiceArr = choiceArr.concat(specialCharArr);
}
if (confirm("would you like numbers in your password")) {
    choiceArr = choiceArr.concat(numbersArr);
}
}