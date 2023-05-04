// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  
  //Establish variables to store possible password options!
  var lowerCaseOpt = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseOpt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numberOpt = '0123456789';
  var symbolOpt = '~!@#$%^&*()_+=-[]}{\|;:/?.>,<`';

  //Prompts the user when they click on the generate button to get a valid password length
  let pasLength = parseInt(prompt("Enter password length(Min 8, Max 128): "));

  //isNaN makes sure its a number value. This if statement makes sure pasLength is a valid number and between 8 and 128.
  //returns to the beginning of the generatepassword function when executed.
  if (isNaN(pasLength) || pasLength < 8 || pasLength > 128){
    alert("remember: min length is 8, max is 128");
    return generatePassword();
  }

  //Prompt to let the user know about the upcoming prompts and that atleast one needs to be selected
  alert("Next: Which characters to include, Must select at least one!");

  //prompts the user with a "OK" or "cancel" option to set these variables to true or false
  var hasLower = confirm("Include lower case?");
  var hasUpper = confirm("INCLUDE UPPER CASE?");
  var hasNumber = confirm("Include numbers? \n(1,2,3,etc.)");
  var hasSymbol = confirm("Include symbols? \n(!,@,#,?)");

  //If all above variables are false, it alerts the user that they have to select atleast one option and it sends them to the beginning of the generatePassword function.
  if (hasLower == false &&  hasUpper == false && hasNumber == false && hasSymbol == false)
  {
    alert("Must select one option!");
    return generatePassword();
  }

  //Now im establishing my included values for the password generation.
  var included = '';
  if (hasLower){
    included += lowerCaseOpt;
  }
  if (hasUpper){
    included += upperCaseOpt;
  }
  if (hasNumber){
    included += numberOpt;
  }
  if (hasSymbol){
    included += symbolOpt;
  }

  //Next generate the password
  let password = '';
  for (let x = 0; x < pasLength; x++){
    var randomValue = Math.floor(Math.random() * included.length);
    password += included[randomValue];
  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);