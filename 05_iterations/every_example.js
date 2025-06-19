// Example 1: Check if all numbers are positive
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every((num) => num > 0);
console.log('Are all numbers positive?', allPositive); // true

// Example 2: Check if all numbers are even
const allEven = numbers.every((num) => num % 2 === 0);
console.log('Are all numbers even?', allEven); // false

// Example 3: Check if all users are adults
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 19 },
  { name: 'Charlie', age: 21 }
];
const allAdults = users.every((user) => user.age >= 18);
console.log('Are all users adults?', allAdults); // true

// Example 4: Check if all strings have minimum length
const words = ['apple', 'banana', 'cherry'];
const allLongEnough = words.every((word) => word.length >= 4);
console.log('Are all words at least 4 characters?', allLongEnough); // true

// Example 5: Empty array (important edge case)
const emptyArray = [];
// every() returns true for any condition on an empty array
console.log('Empty array test:', emptyArray.every(x => x > 0)); // true




