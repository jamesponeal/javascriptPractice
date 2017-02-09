// Psuedocode:
//1. Split number into an array so each digit is an element in the array.
//2. Square each digit.
//3. Add all digits.
//4. If that sum is equal to 1, the number is happy.
//5. Else if that sum is equal to 4, the number is unhappy.
//6. Else repeat.



function square(number) {
  return number * number;
}

function splitSquareSum(number) {
  var numberArray = number.toString().split("");
  var sum = 0;
  for (var i = 0; i < numberArray.length; i++) {
    sum += square(numberArray[i]);
  }
  return sum;
}

function isHappy(number) {
  if (number == 1) {
    return true;
  } else if (number == 4) {
    return false;
  } else {
    return isHappy(splitSquareSum(number));
  }
}
