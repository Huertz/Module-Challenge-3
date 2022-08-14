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

function generatePassword() {

  var lt = 0;
  while (1) {
    lt = prompt("How many characters would you like your password to contain?");
    if (isNaN(lt) || lt < 8 || lt >= 128) {
      alert("must be more than 8 characters and a number ");
    }
    else break;

  }

  var result = '';
  var characters = '';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const special = '~!@#$%^&*()_+}{:"<>?,./;';
  const num = '0123456789';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


  if (confirm("Click Ok to confirm including special characters!")) {
    for (let i = 0; i < special.length; i++) {
      characters = characters.concat(special[i]);
    }
  }
  if (confirm("Click Ok to confirm including numbers!")) {
    for (let i = 0; i < num.length; i++) {
      characters = characters.concat(num[i]);
    }
  }

  if (confirm("Click Ok to confirm including lowercase characters!")) {
    for (let i = 0; i < lowerCase.length; i++) {
      characters = characters.concat(lowerCase[i]);
    }
  }

  if (confirm("Click Ok to confirm including uppercase characters!")) {
    for (let i = 0; i < upperCase.length


      ; i++) {
      characters = characters.concat(upperCase[i]);
    }
  }



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

