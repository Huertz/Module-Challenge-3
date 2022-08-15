// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Added generatePassword
function generatePassword() {
  //Added  lt var + condition 
  var lt = 0;
  while (1) {
    lt = prompt("How many characters would you like your password to contain?");
    // Added statements when lt is not a number or lt is less than 8 or lt is greater to 128 
    if (isNaN(lt) || lt < 8 || lt > 128) {
      alert("Must be more than 8 characters and number less than or equal 128");
    }
    // Only if lt is between 8-128 it would generate a password 
    else break;
  }

  // All the variables 
  var result = '';
  var characters = '';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const special = '~!@#$%^&*()_+}{:"<>?,./;';
  const num = '0123456789';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Special characters
  if (confirm("Click Ok to confirm special characters!")) {
    for (let i = 0; i < special.length; i++) {
      characters = characters.concat(special[i]);
    }
  }
  // Numebers
  if (confirm("Click Ok to confirm numbers!")) {
    for (let i = 0; i < num.length; i++) {
      characters = characters.concat(num[i]);
    }
  }
  // LoweCase
  if (confirm("Click Ok to confirm lowerCase characters!")) {
    for (let i = 0; i < lowerCase.length; i++) {
      characters = characters.concat(lowerCase[i]);
    }
  }
  // UpperCase
  if (confirm("Click Ok to confirm upperCase characters!")) {
    for (let i = 0; i < upperCase.length
      ; i++) {
      characters = characters.concat(upperCase[i]);
    }
  }

  // This code I got it from stackover flow it basicly it geneareters the passoword 
  var charactersLength = characters.length;
  for (var i = 0; i < lt; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  /* Testing outputs
  console.log(special);
  console.log(characters);
  console.log(result);
  */
  return result;

}