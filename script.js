// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  newPassword = "";
  length = prompt(
    "Select the length you would like your password to be (between 8 and 128 characters)",
    ""
  );
  if (parseInt(length) < 8 || parseInt(length) > 128 || isNaN(length) == true) {
    alert(
      "The number you entered is either too long, too short or included characters other than numbers. Please select a number between 8 and 128."
    );
    return;
  }

  alert("Please select the types of characters you would like to include");

  if (confirm("Would you like to include lowercase letters?")) {
    lower = true;
  }

  if (confirm("Would you like to include uppercase letters?")) {
    upper = true;
  }

  if (confirm("Would you like to include numbers?")) {
    numb = true;
  }

  if (confirm("Would you like to include special characters?")) {
    spec = true;
  }
  if (lower === false && upper === false && numb === false && spec === false) {
    alert(
      "You cannot generate a password with no characters. Please try again and select at least one character type."
    );
    return;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  if (lower === true) {
    selectionString = selectionString.concat(lowerC);
  }
  if (upper === true) {
    selectionString = selectionString.concat(upperC);
  }
  if (numb === true) {
    selectionString = selectionString.concat(numbC);
  }
  if (spec === true) {
    selectionString = selectionString.concat(specC);
  }
  var randomN = Math.floor(Math.random() * selectionString.length);
  for (i = 0; i < length; i++) {
    var randomN = Math.floor(Math.random() * selectionString.length);
    newPassword = newPassword.concat(selectionString.charAt(randomN));
  }
  return newPassword;
}
var newPassword = "";
var selectionString = "";
var lower = false;
var upper = false;
var numb = false;
var spec = false;
var length = 0;
charType = [lower, upper, numb, spec];
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var passwordS = "";
var specC = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var lowerC = "abcdefghijklmnopqrstuvwxyz";
var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbC = "1234567890";
