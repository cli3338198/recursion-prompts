/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
let factorial = function (n) {
  if (n < 0) return null;
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
let sum = function (array) {
  if (!array.length) return 0;
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
let arraySum = function (array) {
  let sum = 0;
  for (const thing of array) {
    if (Array.isArray(thing)) {
      sum += arraySum(thing);
    } else {
      sum += thing;
    }
  }
  return sum;
};

// 4. Check if a number is even.
// isEven(2) // true
// isEven(9) // false
let isEven = function (n) {
  n = Math.abs(n);
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
let sumBelow = function (n) {
  if (n === 0) return 0;
  if (n > 0) {
    return n - 1 + sumBelow(n - 1);
  } else {
    return n + 1 + sumBelow(n + 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
let range = function (x, y) {
  if (x > y) return range(y, x).reverse();
  if (x >= y - 1) return [];
  return [x + 1].concat(...range(x + 1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
let exponent = function (base, exp) {
  if (exp === 0) return 1;
  if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else {
    return 1 / exponent(base, -exp);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
let powerOfTwo = function (n) {
  if (n === 1) return true;
  if (n < 1) return false;
  if (n % 2 === 0) {
    return powerOfTwo(n / 2);
  } else {
    return false;
  }
};

// 9. Write a function that reverses a string.
// reverse("hello"); // olleh
let reverse = function (string) {
  if (string.length === 0) return "";
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
// palindrome("koko") // false
// palindrome("rotor") // true
// palindrome("wow") // true
let palindrome = function (string) {
  string = string.toLowerCase().replaceAll(/[^a-z]/gi, "");
  if (string.length <= 1) return true;
  if (string[0] === string[string.length - 1]) {
    return palindrome(string.substring(1, string.length - 1));
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
let modulo = function (x, y) {};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
let multiply = function (x, y) {};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
let divide = function (x, y) {};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
let gcd = function (x, y) {};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
let compareStr = function (str1, str2) {
  if (!str1.length && !str2.length) return true;
  if (!str1.length || !str2.length) return false;
  return compareStr(str1.substring(1), str2.substring(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
let createArray = function (str) {
  if (!str.length) return [];
  return [str[0]].concat(createArray(str.substring(1)));
};

// 17. Reverse the order of an array
let reverseArr = function (array) {
  if (array.length <= 1) return array;
  return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
let buildList = function (value, length) {
  if (length === 0) return [];
  return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
let fizzBuzz = function (n) {
  if (n === 0) return [];
  const res = [];
  res.push(...fizzBuzz(n - 1));
  if (n % 3 === 0 && n % 5 === 0) {
    res.push("FizzBuzz");
  } else if (n % 3 === 0) {
    res.push("Fizz");
  } else if (n % 5 === 0) {
    res.push("Buzz");
  } else {
    res.push("" + n);
  }
  return res;
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
let countOccurrence = function (array, value) {
  if (!array.length) return 0;
  return (array[0] === value ? 1 : 0) + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
let rMap = function (array, callback) {
  if (!array.length) return array;
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
let countKeysInObj = function (obj, key) {
  if (typeof obj === "string") return 0;
  let count = 0;
  for (const k in obj) {
    if (k === key) count++;
    count += countKeysInObj(obj[k], key);
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
let countValuesInObj = function (obj, value) {
  if (typeof obj === "string") return 0;
  let count = 0;
  for (const key in obj) {
    if (obj[key] === value) count++;
    count += countValuesInObj(obj[key], value);
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
let replaceKeysInObj = function (obj, oldKey, newKey) {
  if (typeof obj !== "object") return obj;
  for (const key in obj) {
    obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    if (key === oldKey) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
let fibonacci = function (n) {
  if (n <= 0) return null;
  if (n === 1) return [0, 1];
  if (n === 2) return [0, 1, 1];
  const fibs = fibonacci(n - 1);
  const nextFib = fibs.at(-1) + fibs.at(-2);
  return fibs.concat(nextFib);
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
let nthFibo = function (n) {};

// 27. Given an array of words, return a new array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
let capitalizeWords = function (array) {
  if (!array.length) return array;
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
let capitalizeFirst = function (array) {
  if (!array.length) return array;
  return [array[0][0].toUpperCase() + array[0].slice(1)].concat(
    capitalizeFirst(array.slice(1))
  );
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// let obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
let nestedEvenSum = function (obj) {
  if (typeof obj !== "object") return 0;
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
    sum += nestedEvenSum(obj[key]);
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
let flatten = function (array) {
  const res = [].concat(...array);
  if (array.some(Array.isArray)) return flatten(res);
  return res;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
let letterTally = function (str, obj) {
  obj = obj || {};
  if (!str.length) return obj;
  obj[str[0]] = obj[str[0]] + 1 || 1;
  return letterTally(str.substring(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
let compress = function (list) {
  if (!list.length) return list;
  if (list.length === 1) return list;
  if (list[0] === list[1]) {
    return compress(list.slice(1));
  } else {
    return [list[0]].concat(compress(list.slice(1)));
  }
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
let augmentElements = function (array, aug) {};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
let minimizeZeroes = function (array) {
  if (!array.length) return array;
  if (array[0] === array[1] && array[0] === 0) {
    return minimizeZeroes(array.slice(1));
  } else {
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
let alternateSign = function (array) {
  if (array.length === 0) return [];
  const list = alternateSign(array.slice(0, array.length - 1));
  const length = array.length;
  if (length % 2 === 0) {
    if (array[length - 1] > 0) {
      array[length - 1] = -array[length - 1];
    }
  } else {
    if (array[length - 1] < 0) {
      array[length - 1] = -array[length - 1];
    }
  }
  list.push(array[length - 1]);
  return list;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
let numToText = function (str) {
  if (str.length === 0) return "";
  const tempStr = numToText(str.substring(0, str.length - 1));
  let replace;
  switch (str[str.length - 1]) {
    case "1":
      replace = "one";
      break;
    case "2":
      replace = "two";
      break;
    case "3":
      replace = "three";
      break;
    case "4":
      replace = "four";
      break;
    case "5":
      replace = "five";
      break;
    case "6":
      replace = "six";
      break;
    case "7":
      replace = "seven";
      break;
    case "8":
      replace = "eight";
      break;
    case "9":
      replace = "nine";
      break;
    default:
      replace = str[str.length - 1];
      break;
  }
  return tempStr + replace;
};

// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
let tagCount = function (tag, node) {
  let count = 0;
  if (node.tag === tag) count++;
  for (const child of node.children) {
    count += tagCount(tag, child);
  }
  return count;
};

// 38. Write a function for binary search.
// let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
let binarySearch = function (array, target, min = 0, max = array.length - 1) {
  const mid = Math.floor((min + max) / 2);
  if (array[mid] === target) return mid;
  if (min > max) return null;
  if (array[mid] > target) {
    return binarySearch(array, target, min, mid - 1);
  } else {
    return binarySearch(array, target, mid + 1, max);
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
let mergeSort = function (array) {};

// 40. Deeply clone objects and arrays.
// let obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// let obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
let clone = function (input) {
  if (typeof input !== "object") return input;
  const obj = {};
  for (const key in input) {
    obj[key] = clone(input[key]);
  }
  return obj;
};
