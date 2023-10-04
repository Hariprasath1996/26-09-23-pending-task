// 1.Swap two variables without using a temporary variable.
// Test case
// console.log(swapVariables(5, 10)); // Output: [10, 5]
function swapVariables(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}
console.log(swapVariables(5, 10)); 

// Check if a given number, is a prime number.
// Test cases
// console.log(isPrime(7)); // Output: true
// console.log(isPrime(10)); // Output: false

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(7));
console.log(isPrime(10));

// 3. Check if a given string is a valid email address.
// // Test cases
// console.log(isValidEmail(&#39;example@email.com&#39;)); // Output: true
// console.log(isValidEmail(&#39;invalid-email&#39;)); // Output: false

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
console.log(isValidEmail('example@email.com')); 
console.log(isValidEmail('invalid-email')); 

// Calculate the factorial of a number using a recursive function.
// // Test case
// console.log(factorial(5)); // Output: 120

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

// Reverse words in a sentence without reversing the individual words.
// // Test case
// console.log(reverseWordsInSentence(&#39;Hello world&#39;)); // Output: &#39;olleH dlrow&#39;
function reverseWordsInSentence(sentence) {
const words = sentence.split(' ')
const reversedWords = words.reverse();
const reversedSentence = reversedWords.join(' ');
return reversedSentence;
}
console.log(reverseWordsInSentence('Hello world')); 

// Write a sum method which will work properly when invoked using either syntax below.
// //Test case
// console.log(sum(2,3)); // Outputs 5
// console.log(sum(2)(3)); // Outputs 5

function sum(x) {
  if (arguments.length === 2) {
  return arguments[0] + arguments[1];
  } else {
    return function(y) {
      return x + y;
    };
  }
}
console.log(sum(2, 3)); 
console.log(sum(2)(3)); 
