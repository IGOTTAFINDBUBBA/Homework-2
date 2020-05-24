// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = 'abcdefghijklmnopqrstuvwxyz'
var capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var spec = '0123456789!@#$%^&**()_+{}|[];'
var passlength = 0; 
var temppass = '';
var capitalize = false;
var numerical = false;
// Write password to the #password input

function writePassword() {
  
  var password = '';

  if(capitalize) {
    characters += capitals;
  }

  if(numerical) {
    characters += spec; 
  }

  for (i = 0; i < passlength; i++) {
    
    var index = Math.ceil(Math.random() * characters.length);
    var character = characters.charAt(index);
    password += character;

  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passwordText)
}


var passwordText = document.querySelector("#password")
var capitalize = confirm ('do you want uppercase characters?');

var numerical = confirm ('do you want numbers and special characters?');

passlength = prompt ('how many characters do you want? between 8 and 128');
checkPasslength(passlength);

function checkPasslength(passlength) {

  if(passlength < 8 || passlength > 128) {
    newPassword();
  }

}

function newPassword(){
  passlength = prompt ('Password must be between 8 and 128 characters!!!');
  checkPasslength(passlength);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);