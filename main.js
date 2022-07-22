let number = function (busStops) {
  return busStops.reduce((acc, [on, off]) => acc + on - off, 0);
};

/**
 * [[6,0],[39,1],[69,30],[29,63],[47,15],[96,2],[16,59],[56,103],[69,61],[96,65],[21,14],[20,72]]: expected undefined to equal 79
 */

let arr = [
  [6, 0],
  [39, 1],
  [69, 30],
  [29, 63],
  [47, 15],
  [96, 2],
  [16, 59],
  [56, 103],
  [69, 61],
  [96, 65],
  [21, 14],
  [20, 72],
];

console.log(number(arr));

function nbDig(n, d) {
  let count = 0;
  for (let k = 0; k <= n; k++) {
    let stringDigits = (k ** 2).toString().split("");
    let realDigits = stringDigits.map(Number);
    for (const digit of realDigits) {
      if (digit == d) count++;
    }
  }
  return count;
}

console.log(nbDig(10, 1)); // 4
console.log(nbDig(25, 1)); // 11
console.log(nbDig(5750, 0)); // 4700
console.log(nbDig(11549, 1)); // 11905

/**
 * Task
Write a function that returns both the minimum and maximum number of the given list/array.
 */
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5])); //  [1,5])
console.log(minMax([2334454, 5])); // [5, 2334454])
console.log(minMax([1])); // [1, 1])

/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 */

//"the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// if (str.length === 0) return "";

function toCamelCase(str) {
  const words = str.split(/_|-/);
  let camelCase = [];
  camelCase.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    let chars = words[i].split("");
    chars[0] = chars[0].toUpperCase();
    camelCase.push(chars.join(""));
  }

  return camelCase.join("");
}

toCamelCase("the_stealth_warrior");
toCamelCase("The-Stealth-Warrior");
toCamelCase("A-B-C");
toCamelCase("");

// Deodorant Evaporator
/**
 * This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.
 */

function evaporator(content, evap_per_day, threshold) {
  let thresholdInMl = (content * threshold) / 100;
  let remaining = content;
  let days = 0;
  while (remaining > thresholdInMl) {
    remaining -= (remaining * evap_per_day) / 100;
    days++;
  }

  return days;
}

evaporator(10, 10, 5); // -> 29

/**
 * Sum of two lowest positive integers
 */

//  Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

//  For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

//  [10, 343445353, 3453445, 3453545353453] should return 3453455

function sumTwoSmallestNumbers(numbers) {
  const firstLowestNumber = Math.min(...numbers);
  numbers.splice(numbers.indexOf(firstLowestNumber), 1);
  const secondLowestNumber = Math.min(...numbers);
  return firstLowestNumber + secondLowestNumber;
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]); // -> 13

/**
 * Isograms
 */

//  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  if (str.length == 0) return true;
  let strArr = str.toLowerCase().split("");
  let isIsogram = true;
  strArr.forEach((char, index) => {
    for (let i = 0; i < strArr.length; i++) {
      if (char === strArr[i] && index !== i) {
        isIsogram = false;
      }
    }
  });
  return isIsogram;
}

// function isIsogram(str) {
//   return new Set(str.toLowerCase()).size == str.length;
// }

console.log(isIsogram("Dermatoglyphics")); // -> true
console.log(isIsogram("isogram")); // -> true
console.log(isIsogram("aba")); // -> false

/**
 * Small enough? - Beginner
 */

//  You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

//  You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  return a.filter(num => num > limit).length == 0;
}

// function smallEnough(a, limit){
//     return Math.max(...a) <= limit
//   }

console.log(smallEnough([66, 101], 200)); // -> true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // -> false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)); // -> true

/**
 * Most digits
 */

//  Find the number with the most digits.

//  If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  const largestNumInfo = {
    value: array[0],
    length: array[0].toString().length,
    index: 0,
  };
  for (let i = 1; i < array.length; i++) {
    const currentNumLength = array[i].toString().length;
    if (currentNumLength > largestNumInfo.length) {
      largestNumInfo.value = array[i];
      largestNumInfo.length = currentNumLength;
      largestNumInfo.index = i;
    }
  }
  return largestNumInfo.value;
}

// function findLongest(array) {
//   return array.reduce((a, b) => `${b}`.length > `${a}`.length ? b : a);
// }

console.log(findLongest([1, 10, 100])); // -> 100
console.log(findLongest([9000, 8, 800])); // -> 9000
console.log(findLongest([8, 900, 500])); // -> 900

/**
 * Summing a number's digits
 */

//  Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((acc, num) => acc + +num, 0);
}

console.log(sumDigits(10)); // -> 1
console.log(sumDigits(99)); // -> 18
console.log(sumDigits(-32)); // -> 5

/**
 * Check the exam
 */
//  The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

//  The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

//  If the score < 0, return 0.

function checkExam(array1, array2) {
  const result = array2.reduce((acc, answer, index) => {
    if (answer == "") return acc + 0;
    else if (answer != array1[index]) return acc - 1;
    else if (answer == array1[index]) return acc + 4;
  }, 0);
  return result >= 0 ? result : 0;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // -> 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // -> 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // -> 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // -> 0

/**
 * Maximum Length Difference
 */

//  You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

//  Find max(abs(length(x) − length(y)))

//  If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

function mxdiflg(a1, a2) {
  let max = -1;
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      max =
        Math.abs(a1[i].length - a2[j].length) > max
          ? Math.abs(a1[i].length - a2[j].length)
          : max;
    }
  }
  return max;
}

let s1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];
let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(s1, s2)); // -> 13
console.log(mxdiflg(["aaaa"], [])); // -> -1
console.log(mxdiflg([], ["aaaa"])); // -> -1
console.log(mxdiflg([], [])); // -> -1

/**
 * Reverse words
 */
//  Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  return str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); // -> 'ehT kciuq nworb xof spmuj revo eht yzal .god'

/**
 * Growth of a Population
 */

//  p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

//  the function nb_year should return n number of entire years needed to get a population greater or equal to p.

//  aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 = p0 + p0 * (percent / 100) + aug;
    years++;
  }
  return years;
}

console.log(nbYear(1500, 5, 100, 5000)); // -> 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // -> 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)); // -> 94

/**
 * Reverse every other word in the string
 */

//  Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
  return str
    .split(" ")
    .map((item, index) =>
      index % 2 != 0 ? item.split("").reverse().join("") : item
    )
    .join(" ")
    .trim();
}

console.log(reverse("Reverse this string, please!")); // -> "Reverse siht string, !esaelp"
console.log(reverse("I really don't like reversing strings!")); // -> "I yllaer don't ekil reversing !sgnirts"

/**
 * Break camelCase
 */

// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  return string
    .split("")
    .map(char => {
      if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) {
        return " " + char;
      } else {
        return char;
      }
    })
    .join("");
}

console.log(solution("camelCasing")); // -> 'camel Casing'
console.log(solution("camelCasingTest")); // -> 'camel Casing Test'

// // [65 - 90]

/**
 * Title Case
 */

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

function titleCase(title, minorWords) {
  if (title.length === 0) return "";
  const [firstWord, restOfWords] = [
    title.split(" ")[0],
    title.split(" ").slice(1),
  ];
  const minorWordsArray =
    minorWords != undefined
      ? minorWords.split(" ").map(minorWord => minorWord.toLowerCase())
      : [];
  return (
    capitalize(firstWord) +
    " " +
    restOfWords
      .map(word => {
        if (minorWordsArray.includes(word.toLowerCase())) {
          return word.toLowerCase();
        } else {
          return capitalize(word);
        }
      })
      .join(" ")
  ).trim();
}

const capitalize = word => {
  return (
    word.split(" ")[0].split("")[0].toUpperCase() +
    word
      .split(" ")[0]
      .split("")
      .slice(1)
      .map(char => char.toLowerCase())
      .join("")
  );
};

console.log(titleCase("")); // -> ''
console.log(titleCase("a clash of KINGS", "a an the of")); // -> 'A Clash of Kings'
console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); // -> 'The Wind in the Willows'
console.log(titleCase("the quick brown fox")); // -> 'The Quick Brown Fox'

/**
 * Highest and Lowest
 */
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  const numsArr = numbers.split(" ").map(str => Number(str));
  let min = numsArr[0];
  let max = numsArr[0];
  for (let i = 1; i < numsArr.length; i++) {
    if (numsArr[i] < min) min = numsArr[i];
    if (numsArr[i] > max) max = numsArr[i];
  }
  // console.log(numsArr);
  return [max, min].join(" ");
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

/**
 * Counting sheep...
 */

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce(
    (sum, sheep) => sum + (sheep == undefined ? 0 : Number(sheep)),
    0
  );
}

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(array1)); // -> 17

/**
 * Descending Order
 */

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => Number(b) - Number(a))
      .join("")
  );
}

// Input: 42145 Output: 54421

console.log(descendingOrder(1021)); // -> 2110
console.log(descendingOrder(123456789)); // -> 987654321

/**
 * Sum without highest and lowest number
 */

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
  if (array == undefined || !array.length || array.length == 1) return 0;
  return (
    array.reduce((sum, acc) => sum + acc, 0) -
    Math.max(...array) -
    Math.min(...array)
  );
}

// function sumArray(array) {
//   return array == undefined || array.length < 2
//     ? 0
//     : array
//         .sort((a, b) => b - a)
//         .slice(1, -1)
//         .reduce((sum, num) => sum + num, 0);
// }

console.log(sumArray(null)); // ->               0 );
console.log(sumArray([])); // ->                  0 );
console.log(sumArray([3])); // ->                 0 );
console.log(sumArray([3, 5])); // ->              0 );
console.log(sumArray([6, 2, 1, 8, 10])); // ->   16 );
console.log(sumArray([0, 1, 6, 10, 10])); // ->  17 );
console.log(sumArray([-6, -20, -1, -10, -12])); //-> -28 );
console.log(sumArray([-6, 20, -1, 10, -12])); // -> 3 );

// /**
//  * Beginner Series #2 Clock
//  */

// //  Clock shows h hours, m minutes and s seconds after midnight.

// //  Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

console.log(past(0, 1, 1)); // -> 61000
console.log(past(1, 1, 1)); // -> 3661000
console.log(past(0, 0, 0)); // -> 0
console.log(past(1, 0, 1)); // -> 3601000
console.log(past(1, 0, 0)); // -> 3600000

// /**
//  * Square Every Digit
//  */

// // Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// // For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// // Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  return +String(num)
    .split("")
    .map(char => +char * +char)
    .join("");
}

console.log(squareDigits(3212)); // -> 9414
console.log(squareDigits(2112)); // -> 4114
console.log(squareDigits(0)); // -> 0

// /**
//  * Unique In Order
//  */

// // Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder = function (iterable) {
  return Array.from(iterable).reduce((arr, currentValue) => {
    if (!arr.length) arr.push(currentValue);
    if (arr[arr.length - 1] !== currentValue) arr.push(currentValue);
    return arr;
  }, []);
};

// var uniqueInOrder=function(iterable){
//   return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // -> ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder("ABBCcAD")); // -> ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // -> [1,2,3]
console.log(uniqueInOrder([])); // -> []
console.log(uniqueInOrder("")); // -> []

/**
 * Duplicate Encoder
 */

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  const charTracker = word
    .toLowerCase()
    .split("")
    .reduce((obj, char) => {
      obj[char] = obj[char] ? obj[char] + 1 : 1;
      return obj;
    }, {});

  return word
    .toLowerCase()
    .split("")
    .map(char => (charTracker[char] > 1 ? ")" : "("))
    .join("");
}

// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split("")
//     .map(function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
//     })
//     .join("");
// }

console.log(duplicateEncode("din")); // -> "((("
console.log(duplicateEncode("recede")); // -> "()()()"
console.log(duplicateEncode("Success")); // -> ")())())","should ignore case"
console.log(duplicateEncode("(( @")); // -> "))(("

/**
 * Remove the minimum
 */

// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  const numbersCopy = [...numbers];
  const minNumber = [...numbers].sort((a, b) => a - b)[0];
  numbersCopy.splice(numbers.indexOf(minNumber), 1);
  return numbersCopy;
}

// function removeSmallest(numbers) {
//   return numbers.filter(
//     (_, idx) => idx !== numbers.indexOf(Math.min(...numbers))
//   );
// }

console.log(removeSmallest([1, 2, 3, 4, 5])); // -> [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // -> [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); // -> [2, 2, 2, 1]
console.log(removeSmallest([])); // -> []

/**
 * Get the Middle Character
 */

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  return s.length % 2 == 0
    ? s
        .split("")
        .slice(Math.floor(s.length / 2) - 1, Math.floor(s.length / 2) + 1)
        .join("")
    : s.split("")[Math.floor(s.length / 2)];
}

console.log(getMiddle("test")); // -> "es"
console.log(getMiddle("testing")); // -> "t"
console.log(getMiddle("middle")); // -> "dd"
console.log(getMiddle("A")); // -> "A"

/**
 * Sum of the first nth term of Series
 */

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

function SeriesSum(n) {
  let sum = 0;
  let i = 0;
  while (i < n) {
    sum += 1 / (i * 3 + 1);
    i++;
  }
  return sum.toFixed(2);
}

// function SeriesSumRecursive(n, acc = 0) {
//   if (n === 0) return acc.toFixed(2);
//   else {
//     acc += 1 / (3 * n - 2);
//     return SeriesSumRecursive(n - 1, acc);
//   }
// }

console.log(SeriesSum(0)); // -> "0.00"
console.log(SeriesSum(1)); // -> "1.00"
console.log(SeriesSum(2)); // -> "1.25"
console.log(SeriesSum(3)); // -> "1.39"
console.log(SeriesSum(4)); // -> "1.49"
// console.log(SeriesSumRecursive(0)); // -> "0.00"
// console.log(SeriesSumRecursive(1)); // -> "1.00"
// console.log(SeriesSumRecursive(2)); // -> "1.25"
// console.log(SeriesSumRecursive(3)); // -> "1.39"
// console.log(SeriesSumRecursive(4)); // -> "1.49"

/**
 * Playing with digits
 */

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

function digPow(n, p) {
  const num =
    ("" + n).split("").reduce((sum, num, idx) => (sum += num ** (p + idx)), 0) /
    n;
  return num % 1 == 0 ? num : -1;
}

console.log(digPow(89, 1)); // -> 1
console.log(digPow(92, 1)); // -> -1
console.log(digPow(46288, 3)); // -> 51

/**
 * Exes and Ohs
 */

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  str = str.toLowerCase();
  if (!str.split("").includes("o") && !str.split("").includes("x")) return true;
  const hash = str.split("").reduce((hash, char) => {
    hash[char] = hash[char] ? hash[char] + 1 : 1;
    return hash;
  }, {});
  return hash["x"] == hash["o"];
}

console.log(XO("xo")); // -> true
console.log(XO("xxOo")); // -> true
console.log(XO("xxxm")); // -> false
console.log(XO("Oo")); // -> false
console.log(XO("ooom")); // -> false
console.log(XO("zpzpzpp")); // -> true

/**
 * Persistent Bugger
 */

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  let numArr = num.toString().split("");
  let counter = 0;
  while (numArr.length > 1) {
    numArr = numArr
      .reduce((acc, num) => +acc * +num)
      .toString()
      .split("");
    counter++;
  }
  return counter;
}

console.log(persistence(39)); // -> 3
console.log(persistence(4)); // -> 0
console.log(persistence(25)); // -> 2
console.log(persistence(999)); // -> 4

/**
 * Create Phone Number
 */

//  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  string = numbers.join("");
  const firstPart = string.substring(0, 3);
  const middlePart = string.substring(3, 6);
  const endPart = string.substring(6);
  return `(${firstPart}) ${middlePart}-${endPart}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //-> "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //-> "(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //-> "(123) 456-7890"

/**
 * Build a pile of Cubes
 */

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
// Examples:

// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

function findNb(m) {
  let n = 1;
  let volume = 1;
  while (volume < m) {
    n++;
    volume += n ** 3;
  }
  return volume == m ? n : -1;
}

console.log(findNb(1071225)); // -> 45
console.log(findNb(4183059834009)); // -> 2022
console.log(findNb(24723578342962)); // -> -1
console.log(findNb(135440716410000)); // -> 4824
console.log(findNb(40539911473216)); // -> 3568

/**
 * Highest Scoring Word
 */

//  Given a string of words, you need to find the highest scoring word.

//  Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

//  You need to return the highest scoring word as a string.

//  If two words score the same, return the word that appears earliest in the original string.

//  All letters will be lowercase and all inputs will be valid.

function high(x) {
  let maxWord = "";
  let maxScore = 0;
  x.split(" ").forEach(word => {
    const wordScore = word
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt() - 96, 0);
    [maxWord, maxScore] =
      wordScore > maxScore ? [word, wordScore] : [maxWord, maxScore];
  });
  return maxWord;
}

// function high(x) {
//   let scores = x
//     .split(" ")
//     .map(word => word.split("").reduce((a, b) => a + b.charCodeAt() - 96, 0));
//   return x.split(" ")[scores.indexOf(Math.max(...scores))];
// }

console.log(high("man i need a taxi up to ubud")); // ->  'taxi'
console.log(high("what time are we climbing up the volcano")); // ->'volcano');
console.log(high("take me to semynak")); // ->  'semynak');
console.log(high("aa b")); // ->  'aa'
console.log(high("b aa")); // ->  'b'
console.log(high("bb d")); // ->  'bb'
console.log(high("d bb")); // ->  'd'
console.log(high("aaa b")); // ->  'aaa'

/**
 * Money, Money, Money
 */

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00
//   Let I be the Interest Rate = 0.05
//   Let T be the Tax Rate = 0.18
//   Let D be the Desired Sum = 1100.00

// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    const gains = principal * interest;
    principal += gains * (1 - tax);
    years++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)); // -> 3
console.log(calculateYears(1000, 0.01625, 0.18, 1200)); // -> 14
console.log(calculateYears(1000, 0.05, 0.18, 1000)); // -> 0

/**
 * A Needle in the Haystack
 */

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

function findNeedle(haystack) {
  return haystack.includes("needle")
    ? `found the needle at position ${haystack.indexOf("needle")}`
    : undefined;
}

var haystack_1 = [
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
];
var haystack_2 = [
  "283497238987234",
  "a dog",
  "a cat",
  "some random junk",
  "a piece of hay",
  "needle",
  "something somebody lost a while ago",
];
var haystack_3 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  "needle",
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];

console.log(findNeedle(haystack_1)); //-> 'found the needle at position 3')
console.log(findNeedle(haystack_2)); //-> 'found the needle at position 5')
console.log(findNeedle(haystack_3)); //-> 'found the needle at position 30')

/**
 * Shortest Word
 */

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// function findShort(s) {
//   let shortestWordLength = 1000;
//   s.split(" ").forEach(word => {
//     if (word.length < shortestWordLength) shortestWordLength = word.length;
//   });
//   return shortestWordLength;
// }

function findShort(s) {
  return Math.min(...s.split(" ").map(w => w.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // -> 3
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
); // -> 3
console.log(findShort("Let's travel abroad shall we")); // ->  2

/**
 * Tribonacci Sequence
 */

//  Well met with Fibonacci bigger brother, AKA Tribonacci.

//  As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

//  So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

//  [1, 1 ,1, 3, 5, 9, 17, 31, ...]

//  But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

//  [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

//  Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

//  Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

//  If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

//  [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

// Not modifying the signature array
function tribonacci(signature, n) {
  let seq = [...signature];
  for (let i = 0; i < n - 3; i++) {
    seq.push(seq[i + 0] + seq[i + 1] + seq[i + 2]);
  }
  return seq.slice(0, n);
}

// // Modifying the signature array
// function tribonacci(signature, n) {
//   // let seq = [...signature];
//   for (let i = 0; i < n - 3; i++) {
//     signature.push(signature[i + 0] + signature[i + 1] + signature[i + 2]);
//   }
//   return signature.slice(0, n);
// }

console.log(tribonacci([1, 1, 1], 10)); // -> [1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([0, 0, 1], 10)); // -> [0,0,1,1,2,4,7,13,24,44]
console.log(tribonacci([0, 1, 1], 10)); // -> [0,1,1,2,4,7,13,24,44,81]
console.log(tribonacci([1, 0, 0], 10)); // -> [1,0,0,1,1,2,4,7,13,24]
console.log(tribonacci([0, 0, 0], 10)); // -> [0,0,0,0,0,0,0,0,0,0]
console.log(tribonacci([1, 2, 3], 10)); // -> [1,2,3,6,11,20,37,68,125,230]
console.log(tribonacci([3, 2, 1], 10)); // -> [3,2,1,6,9,16,31,56,103,190]
console.log(tribonacci([1, 1, 1], 1)); // -> [1]
console.log(tribonacci([300, 200, 100], 0)); // -> []
console.log(tribonacci([0.5, 0.5, 0.5], 30)); // -> [0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5]

/**
 * Beginner Series #3 Sum of Numbers
 */

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b) {
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(0, -1)); // -> -1
console.log(getSum(0, 1)); // -> 1
console.log(getSum(2, 2)); // -> 2

/**
 * Sort array by string length
 */

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Beg", "Life", "I", "To"])); // => ["I", "To", "Beg", "Life"]
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"])); // => ["", "Pizza", "Brains", "Moderately"]
console.log(sortByLength(["Longer", "Longest", "Short"])); // => ["Short", "Longer", "Longest"]

/**
 * Find The Parity Outlier
 */

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  return integers.filter(num => num % 2 == 0).length == 1
    ? integers.filter(num => num % 2 == 0)[0]
    : integers.filter(num => num % 2 != 0)[0];
}

console.log(findOutlier([0, 1, 2])); // ->  1
console.log(findOutlier([1, 2, 3])); // ->  2
console.log(findOutlier([2, 6, 8, 10, 3])); // ->  3
console.log(findOutlier([0, 0, 3, 0, 0])); // ->  3
console.log(findOutlier([1, 1, 0, 1, 1])); // ->  0

/**
 * Product of consecutive Fib numbers
 */

// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

//     F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

//     F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

// F(n) being the smallest one such as F(n) * F(n+1) > prod.
// Some Examples of Return:

// (depend on the language)

// productFib(714) # should return (21, 34, true),
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false),
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true],
// productFib(800) # should return [34, 55, false],
// -----
// productFib(714) # should return {21, 34, 1},
// productFib(800) # should return {34, 55, 0},
// -----
// productFib(714) # should return {21, 34, true},
// productFib(800) # should return {34, 55, false},

// Note:

//     You can see examples for your language in "Sample Tests".

function productFib(prod) {
  let fibStart = 0;
  let fibNext = 1;
  while (fibStart * fibNext < prod) {
    [fibStart, fibNext] = [fibNext, fibStart + fibNext];
  }
  return [fibStart, fibNext, fibStart * fibNext == prod];
}

console.log(productFib(4895)); // -> [55, 89, true]
console.log(productFib(5895)); // -> [89, 144, false]
console.log(productFib(74049690)); // -> [6765, 10946, true]
console.log(productFib(84049690)); // -> [10946, 17711, false]
console.log(productFib(193864606)); // -> [10946, 17711, true]
console.log(productFib(447577)); // -> [610, 987, false]
console.log(productFib(602070)); // -> [610, 987, true]

/**
 * Sum of positive
 */

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr.reduce((sum, num) => (sum += num > 0 ? num : 0), 0);
}

console.log(positiveSum([1, 2, 3, 4, 5])); // -> 15
console.log(positiveSum([1, -2, 3, 4, 5])); // -> 13
console.log(positiveSum([])); // -> 0
console.log(positiveSum([-1, -2, -3, -4, -5])); // -> 0
console.log(positiveSum([-1, 2, 3, 4, -5])); // -> 9

/**
 * Good vs Evil
 */

// Description

// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10

// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10

// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.
// Input:

// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.

// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.
// Output:

// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

function goodVsEvil(good, evil) {
  const forcesPower = {
    good: [1, 2, 3, 3, 4, 10],
    evil: [1, 2, 2, 2, 3, 5, 10],
  };
  const goodPower = good.split(" ").reduce((totalForce, raceCount, idx) => {
    return (totalForce += +raceCount * forcesPower.good[idx]);
  }, 0);
  const evilPower = evil.split(" ").reduce((totalForce, raceCount, idx) => {
    return (totalForce += +raceCount * forcesPower.evil[idx]);
  }, 0);
  if (goodPower > evilPower) return "Battle Result: Good triumphs over Evil";
  else if (goodPower < evilPower)
    return "Battle Result: Evil eradicates all trace of Good";
  else return "Battle Result: No victor on this battle field";
}

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1")); // -> 'Battle Result: Evil eradicates all trace of Good'
console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0")); // -> 'Battle Result: Good triumphs over Evil'
console.log(goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0")); // -> 'Battle Result: No victor on this battle field'

/**
 * Going to the cinema
 */

//  My friend John likes to go to the cinema. He can choose between system A and system B.

//  System A : he buys a ticket (15 dollars) every time
//  System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price,
//  then for each additional ticket he pays 0.90 times the price paid for the previous ticket.

//  Example:

//  If John goes to the cinema 3 times:

//  System A : 15 * 3 = 45
//  System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)

//  John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

//  The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

//  ceil(price of System B) < price of System A.

//  More examples:

//  movie(500, 15, 0.9) should return 43
//      (with card the total price is 634, with tickets 645)
//  movie(100, 10, 0.95) should return 24
//      (with card the total price is 235, with tickets 240)

function movie(card, ticket, perc) {
  let lastTicketPrice = ticket * perc;
  let n = 0;
  let systemA = 0;
  let systemB = card;
  while (Math.ceil(systemB) >= systemA) {
    n++;
    systemA = ticket * n;
    systemB += lastTicketPrice;
    lastTicketPrice *= perc;
  }
  return n;
}

console.log(movie(500, 15, 0.9)); // -> 43
console.log(movie(100, 10, 0.95)); // -> 24
console.log(movie(0, 10, 0.95)); // -> 2

/**
 * Training JS #5: Basic data types--Object
 */

// In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

// You can define the object attributes during initialization, like this:

// var animal={name:"dog"}

// you can also set/get some properties after the object definition, like this:

// var animal={}
// animal.name="dog"  (or animal["name"]="dog")

// Task

// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}

// and return a string like this:

// "This white dog has 4 legs."

function animal({ name, legs, color }) {
  return `This ${color} ${name} has ${legs} legs.`;
}

console.log(animal({ name: "dog", legs: 4, color: "white" })); //-> "This white dog has 4 legs."
console.log(animal({ name: "cock", legs: 2, color: "red" })); //-> "This red cock has 2 legs."
console.log(animal({ name: "rabbit", legs: 4, color: "gray" })); //-> "This gray rabbit has 4 legs."

/**
 * Sum of Digits / Digital Root
 */

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// If else recursive version
// function digital_root(n) {
//   if (String(n).length == 1) return n;
//   else {
//     n = String(n)
//       .split("")
//       .reduce((acc, num) => acc + +num, 0);
//     return digital_root(n);
//   }
// }

// Ternary operator recursive version
function digital_root(n) {
  return String(n).length == 1
    ? n
    : digital_root(
        String(n)
          .split("")
          .reduce((acc, num) => acc + +num, 0)
      );
}

console.log(digital_root(16)); // -> 7
console.log(digital_root(456)); // -> 6

/**
 * Replace With Alphabet Position
 */

//  Welcome.

//  In this kata you are required to, given a string, replace every letter with its position in the alphabet.

//  If anything in the text isn't a letter, ignore it and don't return it.

//  "a" = 1, "b" = 2, etc.
//  Example

//  alphabetPosition("The sunset sets at twelve o' clock.")

//  Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(char => char.charCodeAt() > 96 && char.charCodeAt() < 123)
    .map(char => char.charCodeAt() - 96)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // -> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight.")); // -> "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

/**
 * Is this a triangle?
 */

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(1, 2, 2)); // ->  true
console.log(isTriangle(7, 2, 2)); // ->  false

/**
 * Count of positives / sum of negatives
 */

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];
  return [
    input.filter(num => num > 0).length,
    input.reduce((sum, num) => (sum += num < 0 ? num : 0), 0),
  ];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10, -65]
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
); // [8, -50]

/**
 * Mumbling
 */

// This time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  return s
    .toUpperCase()
    .split("")
    .map((char, idx) => char + char.toLowerCase().repeat(idx))
    .join("-");
}

console.log(accum("ZpglnRxqenU")); // -> "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("NyffsGeyylB")); // -> "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
console.log(accum("MjtkuBovqrU")); // -> "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
console.log(accum("EvidjUnokmM")); // -> "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
console.log(accum("HbideVbxncC")); // -> "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"

/*
 * Sort the odd
 */

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(array) {
//   let oddObj = {
//     nums: [],
//     idxs: [],
//   };
//   array.forEach((num, idx) => {
//     if (num % 2 != 0) {
//       oddObj.nums.push(num);
//       oddObj.idxs.push(idx);
//     }
//   });
//   oddObj.nums = oddObj.nums.sort((a, b) => a - b);
//   for (let i = 0; i < oddObj.idxs.length; i++) {
//     array.splice(oddObj.idxs[i], 1, oddObj.nums[i]);
//   }
//   return array;
// }

function sortArray(array) {
  let oddNums = array.filter(num => num % 2 != 0).sort((a, b) => a - b);
  return array.map(num => {
    if (num % 2 != 0) {
      oddNum = oddNums.shift();
      return oddNum;
    } else {
      return num;
    }
  });
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // ->  [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); // ->  [1, 3, 5, 8, 0]
console.log(sortArray([])); // -> []
console.log(sortArray([1, 11, 2, 8, 3, 4, 5])); // -> [ 1, 3, 2, 8, 5, 4, 11 ]

/**
 * Calculate average
 */

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  return array.length > 0
    ? array.reduce((sum, num) => sum + num, 0) / array.length
    : 0;
}

console.log(find_average([1, 1, 1])); // ->  1
console.log(find_average([1, 2, 3])); // ->  2
console.log(find_average([1, 2, 3, 4])); // ->  2.5

/**
 * Beginner - Reduce but Grow
 */

//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  return x.reduce((acc, num) => acc * num);
}

console.log(grow([1, 2, 3])); // -> 6
console.log(grow([4, 1, 1, 1, 4])); // -> 16
console.log(grow([2, 2, 2, 2, 2, 2])); // -> 64

/**
 * Find the unique number
 */

//  There is an array with some numbers. All numbers are equal except for one. Try to find it!

//  findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//  findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

//  It’s guaranteed that array contains at least 3 numbers.

//  The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  let uniq;
  arr.forEach(el => {
    if (arr.indexOf(el) == arr.lastIndexOf(el)) uniq = el;
  });
  return uniq;
}

function findUniq(arr) {
  return arr.find(el => arr.indexOf(el) == arr.lastIndexOf(el));
}

console.log(findUniq([1, 0, 0])); //-> 1
console.log(findUniq([0, 1, 0])); //-> 1
console.log(findUniq([0, 0, 1])); //-> 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); //-> 2
console.log(findUniq([1, 1, 2, 1, 1])); //-> 2
console.log(findUniq([3, 10, 3, 3, 3])); //-> 10

/**
 * Don't give me five!
 */

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

function dontGiveMeFive(start, end) {
  return [...Array(end + 1 - start).keys()]
    .map(i => i + start)
    .filter(num => !String(num).includes("5")).length;
}

console.log(dontGiveMeFive(1, 9)); // -> 8
console.log(dontGiveMeFive(4, 17)); // -> 12
console.log(dontGiveMeFive(-15, -2)); // -> 12

/**
 * Simple multiplication
 */

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}

console.log(simpleMultiplication(2)); // -> 16
console.log(simpleMultiplication(1)); // -> 9
console.log(simpleMultiplication(8)); // -> 64
console.log(simpleMultiplication(4)); // -> 32
console.log(simpleMultiplication(5)); // -> 45

/**
 * Count characters in your string
 */

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  return string.split("").reduce((counter, char) => {
    if (counter[char]) {
      counter[char] += 1;
    } else {
      counter[char] = 1;
    }

    return counter;
  }, {});
}

console.log(count("aba")); // -> { a: 2, b: 1 }
console.log(count("")); // -> {}

/**
 * Detect Pangram
 */

//  A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//  Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  return (
    Object.keys(
      string
        .toLowerCase()
        .split("")
        .reduce((obj, char) => {
          if (char.charCodeAt() > 96 && char.charCodeAt() < 123) {
            obj[char] = 1;
          }

          return obj;
        }, {})
    ).length == 26
  );
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // => true
console.log(isPangram("This is not a pangram.")); // => false

/**
 * Volume of a Cuboid
 */

//  Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

console.log(Kata.getVolumeOfCuboid(1, 2, 2)); // -> 4
console.log(Kata.getVolumeOfCuboid(6.3, 2, 5)); // -> 63

/**
 * Century From Year
 */

// Introduction

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(1705)); // -> 18
console.log(century(1900)); // -> 19
console.log(century(1601)); // -> 17
console.log(century(2000)); // -> 20
console.log(century(89)); // -> 1

/**
 * Extract the domain name from a URL
 */

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  return url
    .match(/^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[1]
    .split(".")[0];
}

console.log(domainName("http://google.com")); // -> "google"
console.log(domainName("http://google.co.jp")); // -> "google"
console.log(domainName("www.xakep.ru")); // -> "xakep"
console.log(domainName("https://youtube.com")); // -> "youtube"

/**
 * Which are in?
 */

//  Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
//  Example 1:

//  a1 = ["arp", "live", "strong"]

//  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

//  returns ["arp", "live", "strong"]
//  Example 2:

//  a1 = ["tarp", "mice", "bull"]

//  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

//  returns []
//  Notes:

//      Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
//      In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
//      Beware: r must be without duplicates.

function inArray(array1, array2) {
  return array1
    .filter(substring => array2.some(string => string.includes(substring)))
    .sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(["xyz", "live", "strong"], a2)); // ->  ["live", "strong"]
console.log(inArray(["live", "strong", "arp"], a2)); // ->  ["arp", "live", "strong"]
console.log(inArray(["tarp", "mice", "bull"], a2)); // ->  []

/**
 * Array plus array
 */

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  return (
    arr1.reduce((sum, num) => sum + num) + arr2.reduce((sum, num) => sum + num)
  );
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // -> 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // -> -21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); // -> 15
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); // -> 2100

/**
 * Total amount of points
 */

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

//     if x > y: 3 points
//     if x < y: 0 point
//     if x = y: 1 point

// Notes:

//     there are 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

function points(games) {
  return games
    .map(game => {
      if (game.split(":")[0] > game.split(":")[1]) {
        return 3;
      } else if (game.split(":")[0] < game.split(":")[1]) {
        return 0;
      } else {
        return 1;
      }
    })
    .reduce((sum, num) => sum + num);
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
); // -> 30
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
); // -> 10
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
); // -> 0
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
); // -> 15
console.log(
  points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])
); // -> 12

/**
 * Testing 1-2-3
 */

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

function numberLine(array) {
  return array.map((line, idx) => idx + 1 + ": " + line);
}

console.log(numberLine([])); // => []
console.log(numberLine(["a", "b", "c"])); // => ["1: a", "2: b", "3: c"]

/**
 * Is it a palindrome?
 */

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  return x.toLowerCase() == x.split("").reverse().join("").toLowerCase();
}

console.log(isPalindrome("a")); // -> true
console.log(isPalindrome("aba")); // -> true
console.log(isPalindrome("Abba")); // -> true
console.log(isPalindrome("hello")); // -> false
console.log(isPalindrome("Bob")); // -> true
console.log(isPalindrome("Madam")); // -> true
console.log(isPalindrome("AbBa")); // -> true
console.log(isPalindrome("")); // -> true

/**
 * Find the middle element
 */

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1

// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(triplet) {
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}

console.log(gimme([2, 3, 1])); // -> 0
console.log(gimme([5, 10, 14])); // -> 1
console.log(gimme([2.1, 3.2, 1.4])); // -> 0
console.log(gimme([5.9, 10.4, 14.2])); // -> 1
console.log(gimme([-2, -3, -1])); // -> 0
console.log(gimme([-5, -10, -14])); // -> 1
console.log(gimme([-2, -3.2, 1])); // -> 0
console.log(gimme([-5.2, -10.6, 14])); // -> 0

/**
 * N-th Power
 */

// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

//     array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
//     array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n) {
  return array[n] ** n || -1;
}

console.log(index([1, 2, 3, 4], 2)); // -> 9
console.log(index([1, 3, 10, 100], 3)); // -> 1000000
console.log(index([1, 2], 3)); // -> -1
console.log(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9)); // -> 1
console.log(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 9)); // -> 512
console.log(index([29, 82, 45, 10], 3)); // -> 1000
console.log(index([6, 31], 3)); // -> -1
console.log(index([75, 68, 35, 61, 9, 36, 89, 0, 30], 10)); // -> -1

/**
 * Grasshopper - Messi goals function
 */

//  Messi goals function

// Messi is a soccer player with goals in three leagues:

//     LaLiga
//     Copa del Rey
//     Champions

// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(0, 0, 0)); // -> 0
console.log(goals(43, 10, 5)); // -> 58

/**
 * Two to One
 */

//  Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//  Examples:

//  a = "xyaabbbccccdefww"
//  b = "xxxxyyyyabklmopq"
//  longest(a, b) -> "abcdefklmopqwxy"

//  a = "abcdefghijklmnopqrstuvwxyz"
//  longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  return Array.from(new Set((s1 + s2).split("").sort())).join("");
}

console.log(longest("aretheyhere", "yestheyarehere")); // -> "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // -> "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")); // -> "acefghilmnoprstuy"

/**
 * altERnaTIng cAsE <=> ALTerNAtiNG CaSe
 */

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

// As usual, your function/method should be pure, i.e. it should not mutate the original string.

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map(char => {
      if (char >= "A" && char <= "Z") {
        return char.toLowerCase();
      } else if (char >= "a" && char <= "z") {
        return char.toUpperCase();
      } else return char;
    })
    .join("");
};

// String.prototype.toAlternatingCase = function () {
//   return this.split("")
//     .map(char =>
//       char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
//     )
//     .join("");
// };

console.log("hello world".toAlternatingCase()); // -> "HELLO WORLD"
console.log("HELLO WORLD".toAlternatingCase()); // -> "hello world"
console.log("hello WORLD".toAlternatingCase()); // -> "HELLO world"
console.log("HeLLo WoRLD".toAlternatingCase()); // -> "hEllO wOrld"
console.log("12345".toAlternatingCase()); // -> "12345"
console.log("1a2b3c4d5e".toAlternatingCase()); // -> "1A2B3C4D5E"
console.log("String.prototype.toAlternatingCase".toAlternatingCase()); // -> "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
console.log("Hello World".toAlternatingCase().toAlternatingCase()); // -> "Hello World"

/**
 * Ones and Zeros
 */

//  Given an array of ones and zeroes, convert the equivalent binary value to an integer.

//  Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

//  Examples:

//  Testing: [0, 0, 0, 1] ==> 1
//  Testing: [0, 0, 1, 0] ==> 2
//  Testing: [0, 1, 0, 1] ==> 5
//  Testing: [1, 0, 0, 1] ==> 9
//  Testing: [0, 0, 1, 0] ==> 2
//  Testing: [0, 1, 1, 0] ==> 6
//  Testing: [1, 1, 1, 1] ==> 15
//  Testing: [1, 0, 1, 1] ==> 11

//  However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
  return arr.reverse().reduce((memo, num, idx) => memo + num * 2 ** idx, 0);
};

// const binaryArrayToNumber = arr => {
//   return parseInt(arr.join(""), 2);
// };

console.log(binaryArrayToNumber([0, 0, 0, 1])); //-> 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); //-> 2
console.log(binaryArrayToNumber([1, 1, 1, 1])); //-> 15
console.log(binaryArrayToNumber([0, 1, 1, 0])); //-> 6

/**
 * Function 2 - squaring an argument
 */

// Now you have to write a function that takes an argument and returns the square of it.

function square(num) {
  return num ** 2;
}

console.log(square(3)); // -> 9

/**
 * Calculating with Functions
 */

/**
 * Round up to the next multiple of 5
 */

//  Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

//  Examples:

//  input:    output:
//  0    ->   0
//  2    ->   5
//  3    ->   5
//  12   ->   15
//  21   ->   25
//  30   ->   30
//  -2   ->   0
//  -5   ->   -5
//  etc.

//  Input may be any positive or negative integer (including 0).

//  You can assume that all inputs are valid integers.

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

console.log(roundToNext5(0)); // -> 0
console.log(roundToNext5(1)); // -> 5
console.log(roundToNext5(-1)); // -> 0
console.log(roundToNext5(-5)); // -> -5
console.log(roundToNext5(3)); // -> 5
console.log(roundToNext5(5)); // -> 5
console.log(roundToNext5(20)); // -> 20
console.log(roundToNext5(39)); // -> 40

/**
 * Find the missing term in an Arithmetic Progression
 */

// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.
// Example

// findMissing([1, 3, 5, 9, 11]) == 7

// PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!

var findMissing = function (list) {
  const progression = (list[list.length - 1] - list[0]) / list.length;

  for (let i = 0; i < list.length; i++) {
    let next = list[i] + progression;
    if (next != list[i + 1]) return next;
  }
};

console.log(findMissing([1, 3, 4])); // => 2
console.log(findMissing([-75, -25, 0, 25])); // -50
console.log(findMissing([-75, -25, 75])); // 25

/**
 * Anagram Detection
 */

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function (test, original) {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
};

console.log(isAnagram("foefet", "toffee")); // ->  true
console.log(isAnagram("Buckethead", "DeathCubeK")); // ->  true
console.log(isAnagram("Twoo", "WooT")); // ->  true

console.log(isAnagram("dumble", "bumble")); // ->  false
console.log(isAnagram("ound", "round")); // ->  false
console.log(isAnagram("apple", "pale")); // ->  false

/**
 * Transportation on vacation
 */

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  return d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40;
}

console.log(rentalCarCost(1)); // -> 40
console.log(rentalCarCost(2)); // -> 80
console.log(rentalCarCost(3)); // -> 100
console.log(rentalCarCost(4)); // -> 140
console.log(rentalCarCost(5)); // -> 180
console.log(rentalCarCost(6)); // -> 220
console.log(rentalCarCost(7)); // -> 230
console.log(rentalCarCost(8)); // -> 270
console.log(rentalCarCost(9)); // -> 310
console.log(rentalCarCost(10)); // -> 350

/**
 * Multiples of 3 or 5
 */

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let sum = 0;
  if (number < 0) return sum;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
}

console.log(solution(10)); // -> 23

/**
 * Find the odd int
 */

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  return [...new Set(A)].find(
    num => A.filter(num2 => num2 == num).length % 2 != 0
  );
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // -> 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -> -1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // -> 5
console.log(findOdd([10])); // -> 10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // -> 10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // -> 1

/**
 * Stop gninnipS My sdroW!
 */

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
  return string
    .split(" ")
    .map(word => (word.length > 4 ? word.split("").reverse().join("") : word))
    .join(" ");
}

console.log(spinWords("Welcome")); // ->  "emocleW"
console.log(spinWords("Hey fellow warriors")); // ->  "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // ->  "This is a test"
console.log(spinWords("This is another test")); // ->  "This is rehtona test"
console.log(spinWords("You are almost to the last test")); // ->  "You are tsomla to the last test"
console.log(spinWords("Just kidding there is still one more")); // ->  "Just gniddik ereht is llits one more"
console.log(spinWords("Seriously this is the last one")); // ->  "ylsuoireS this is the last one"

/**
 * Merge in 2048
 */

// The main part of this game is merging identical tiles in a row.

// Implement a function that models the process of merging all of the tile values in a single row.
// This function takes the array line as a parameter and returns a new array with the tile values from line slid towards the front of the array (index 0) and merged.
// A given tile can only merge once.
// Empty grid squares are represented as zeros.
// Your function should work on arrays containing arbitrary number of elements.

// Examples

// merge([2,0,2,2])  -->  [4,2,0,0]

// Another example with repeated merges:

// merge([4,4,8,16])  -->  [8,8,16,0]
// merge([8,8,16,0])  -->  [16,16,0,0]
// merge([16,16,0,0]) -->  [32,0,0,0]

function merge(line) {
  const nums = line.filter(num => num != 0);
  let result = [];
  while (nums.length > 0) {
    result.push(
      nums[0] == nums[1] ? nums.shift() + nums.shift() : nums.shift()
    );
  }
  return result.concat(Array(line.length - result.length).fill(0));
}

console.log(merge([2, 0, 2, 2])); // ->  [4,2,0,0]
console.log(merge([2, 0, 2, 4])); // ->  [4,4,0,0]
console.log(merge([0, 0, 2, 2])); // ->  [4,0,0,0]
console.log(merge([0, 4, 2, 4])); // ->  [4,2,4,0]

/**
 * Array.diff
 */

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  return a.filter(num => !b.includes(num));
}

console.log(arrayDiff([1, 2], [1])); // -> [2]
console.log(arrayDiff([1, 2, 2], [1])); // -> [2,2]
console.log(arrayDiff([1, 2, 2], [2])); // -> [1]
console.log(arrayDiff([1, 2, 2], [])); // -> [1,2,2]
console.log(arrayDiff([], [1, 2])); // -> []
console.log(arrayDiff([1, 2, 3], [1, 2])); // -> [3]

/**
 * Take a Ten Minutes Walk
 */

//  You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//  Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  if (walk.length != 10) return false;
  const distance = {
    x: 0,
    y: 0,
  };
  walk.forEach(dir => {
    if (dir == "n") distance.y++;
    else if (dir == "s") distance.y--;
    else if (dir == "e") distance.x++;
    else if (dir == "w") distance.x--;
  });
  return distance.x == 0 && distance.y == 0;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // -> 'true'
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
); // -> 'false'
console.log(isValidWalk(["w"])); // -> 'false'
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // -> 'false'

/**
 * Your order, please
 */

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  const wordsArr = words.split(" ");
  const orderedWords = [];
  for (let i = 1; i <= wordsArr.length; i++) {
    orderedWords.push(wordsArr.find(word => word.includes(`${i}`)));
  }

  return orderedWords.join(" ");
}

console.log(order("is2 Thi1s T4est 3a")); // -> "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // -> "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")); // -> ""

/**
 * Credit Card Mask
 */

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// return masked string
function maskify(cc) {
  return Array(cc.slice(0, -4).length).fill("#").join("") + cc.slice(-4);
}

console.log(maskify("4556364607935616")); // ->  "############5616"
console.log(maskify("1")); // ->  "1"
console.log(maskify("11111")); // ->  "#1111"

/**
 * Find the divisors!
 */

// // Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
// Example:

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
  const divisors = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i == 0) divisors.push(i);
  }

  return divisors.length == 0 ? `${integer} is prime` : divisors;
}

console.log(divisors(15)); // ->  [3, 5]
console.log(divisors(12)); // ->  [2, 3, 4, 6]
console.log(divisors(13)); // ->  "13 is prime"

/**
 * Number of Divisions
 */

//  Calculate how many times a number can be divided by a given number.
//  Example

//  For example the number 6 can be divided by 2 two times:

//  1. 6 / 2 = 3
//  2. 3 / 2 = 1 remainder = 1

//  100 can be divided by 2 six times:

//  1. 100 / 2 = 50
//  2. 50 / 2 = 25
//  3. 25 / 2 = 12 remainder 1
//  4. 12 / 2 = 6
//  5. 6 / 2 = 3
//  6. 3 / 2 = 1 remainder 1

const divisions = (n, divisor) => {
  let counter = 0;
  while (n >= divisor) {
    n = Math.floor(n / divisor);
    counter++;
  }
  return counter;
};

console.log(divisions(6, 2)); // ->  2
console.log(divisions(100, 2)); // ->  6
console.log(divisions(2450, 5)); // ->  4
console.log(divisions(9999, 3)); // ->  8
console.log(divisions(2, 3)); // ->  0
console.log(divisions(5, 5)); // ->  1

/**
 * Grasshopper - Personalized Message
 */

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 	              return
// name equals owner 	 'Hello boss'
// otherwise 	         'Hello guest'

function greet(name, owner) {
  return owner == name ? "Hello boss" : "Hello guest";
}

console.log(greet("Daniel", "Daniel")); // ->  'Hello boss'
console.log(greet("Greg", "Daniel")); // ->  'Hello guest'

/**
 * Chain Me
 */

// Write a generic function chainer

// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// // returns 90;

function chain(input, fs) {
  for (const fn of fs) {
    input = fn(input);
  }
  return input;
}

function chainReducer(input, fs) {
  return fs.reduce((input, fn) => fn(input), input);
}

function add(x) {
  return x + 10;
}

function mult(x) {
  return x * 30;
}

console.log(chain(2, [add, mult])); // -> 360
console.log(chainReducer(2, [add, mult])); // -> 360

/**
 * Reverse list
 */

// Write reverseList function that simply reverses lists.

function reverseList(arr) {
  return arr.reverse();
}

console.log(reverseList([])); // -> []
console.log(reverseList([1, 2, 3])); // -> [3,2,1]

/**
 * Is it even?
 */

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
  return n % 2 == 0;
}

console.log(testEven(0)); // -> true
console.log(testEven(0.5)); // -> false
console.log(testEven(1)); // -> false
console.log(testEven(2)); // -> true
console.log(testEven(-4)); // -> true
