function checkPass(str) {
  const checkLength = str => str.length >= 6 && str.length <= 10;
  const checkDigits = function (str) {
    let counter = 0;
    for (let num of str) {
      num = Number(num);
      if (!isNaN(num)) counter++;
    }
    return counter >= 2;
  };
  const checkSymbols = function (str) {
    let regex = /^[A-Za-z0-9]+$/;
    return regex.test(str);
  };
  
  if (!checkLength(str)) {
    console.log('Password must be between 6 and 10 characters');
  }
  if (!checkSymbols(str)) {
    console.log('Password must consist only of letters and digits');
  }
  if (!checkDigits(str)) {
    console.log('Password must have at least 2 digits');
  }
  if (checkLength(str) && checkSymbols(str) && checkDigits(str)) {
    console.log("Password is valid");
  }
}
checkPass('MyPass123');
