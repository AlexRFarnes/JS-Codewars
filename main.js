// let number = function (busStops) {
//   return busStops.reduce((acc, [on, off]) => acc + on - off, 0);
// };

// /**
//  * [[6,0],[39,1],[69,30],[29,63],[47,15],[96,2],[16,59],[56,103],[69,61],[96,65],[21,14],[20,72]]: expected undefined to equal 79
//  */

// let arr = [
//   [6, 0],
//   [39, 1],
//   [69, 30],
//   [29, 63],
//   [47, 15],
//   [96, 2],
//   [16, 59],
//   [56, 103],
//   [69, 61],
//   [96, 65],
//   [21, 14],
//   [20, 72],
// ];

// console.log(number(arr));

// function nbDig(n, d) {
//   let count = 0;
//   for (let k = 0; k <= n; k++) {
//     let stringDigits = (k ** 2).toString().split("");
//     let realDigits = stringDigits.map(Number);
//     for (const digit of realDigits) {
//       if (digit == d) count++;
//     }
//   }
//   return count;
// }

// console.log(nbDig(10, 1)); // 4
// console.log(nbDig(25, 1)); // 11
// console.log(nbDig(5750, 0)); // 4700
// console.log(nbDig(11549, 1)); // 11905

/**
 * Task
Write a function that returns both the minimum and maximum number of the given list/array.
 */
// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

// console.log(minMax([1, 2, 3, 4, 5])); //  [1,5])
// console.log(minMax([2334454, 5])); // [5, 2334454])
// console.log(minMax([1])); // [1, 1])

/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 */

//"the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// if (str.length === 0) return "";
// function toCamelCase(str) {
//   const words = str.split(/_|-/);
//   let camelCase = [];
//   camelCase.push(words[0]);
//   for (let i = 1; i < words.length; i++) {
//     let chars = words[i].split("");
//     chars[0] = chars[0].toUpperCase();
//     camelCase.push(chars.join(""));
//   }

//   return camelCase.join("");
// }

// toCamelCase("the_stealth_warrior");
// toCamelCase("The-Stealth-Warrior");
// toCamelCase("A-B-C");
// toCamelCase("");

// Deodorant Evaporator
/**
 * This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.
 */

// function evaporator(content, evap_per_day, threshold) {
//   let thresholdInMl = (content * threshold) / 100;
//   let remaining = content;
//   let days = 0;
//   while (remaining > thresholdInMl) {
//     remaining -= (remaining * evap_per_day) / 100;
//     days++;
//   }

//   return days;
// }

// evaporator(10, 10, 5); // -> 29

/**
 * Sum of two lowest positive integers
 */

//  Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

//  For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

//  [10, 343445353, 3453445, 3453545353453] should return 3453455

// function sumTwoSmallestNumbers(numbers) {
//   const firstLowestNumber = Math.min(...numbers);
//   numbers.splice(numbers.indexOf(firstLowestNumber), 1);
//   const secondLowestNumber = Math.min(...numbers);
//   return firstLowestNumber + secondLowestNumber;
// }

// sumTwoSmallestNumbers([5, 8, 12, 19, 22]); // -> 13

/**
 * Isograms
 */

//  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// function isIsogram(str) {
//   if (str.length == 0) return true;
//   let strArr = str.toLowerCase().split("");
//   let isIsogram = true;
//   strArr.forEach((char, index) => {
//     for (let i = 0; i < strArr.length; i++) {
//       if (char === strArr[i] && index !== i) {
//         isIsogram = false;
//       }
//     }
//   });
//   return isIsogram;
// }

// function isIsogram(str) {
//   return new Set(str.toLowerCase()).size == str.length;
// }

// console.log(isIsogram("Dermatoglyphics")); // -> true
// console.log(isIsogram("isogram")); // -> true
// console.log(isIsogram("aba")); // -> false

/**
 * Small enough? - Beginner
 */

//  You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

//  You can assume all values in the array are numbers.

// function smallEnough(a, limit) {
//   return a.filter(num => num > limit).length == 0;
// }

// function smallEnough(a, limit){
//     return Math.max(...a) <= limit
//   }

// console.log(smallEnough([66, 101], 200)); // -> true
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // -> false
// console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)); // -> true

/**
 * Most digits
 */

//  Find the number with the most digits.

//  If two numbers in the argument array have the same number of digits, return the first one in the array.

// function findLongest(array) {
//   const largestNumInfo = {
//     value: array[0],
//     length: array[0].toString().length,
//     index: 0,
//   };
//   for (let i = 1; i < array.length; i++) {
//     const currentNumLength = array[i].toString().length;
//     if (currentNumLength > largestNumInfo.length) {
//       largestNumInfo.value = array[i];
//       largestNumInfo.length = currentNumLength;
//       largestNumInfo.index = i;
//     }
//   }
//   return largestNumInfo.value;
// }

// function findLongest(array) {
//   return array.reduce((a, b) => `${b}`.length > `${a}`.length ? b : a);
// }

// console.log(findLongest([1, 10, 100])); // -> 100
// console.log(findLongest([9000, 8, 800])); // -> 9000
// console.log(findLongest([8, 900, 500])); // -> 900

/**
 * Summing a number's digits
 */

//  Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// function sumDigits(number) {
//   return Math.abs(number)
//     .toString()
//     .split("")
//     .reduce((acc, num) => acc + +num, 0);
// }

// console.log(sumDigits(10)); // -> 1
// console.log(sumDigits(99)); // -> 18
// console.log(sumDigits(-32)); // -> 5

/**
 * Check the exam
 */
//  The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

//  The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

//  If the score < 0, return 0.

// function checkExam(array1, array2) {
//   const result = array2.reduce((acc, answer, index) => {
//     if (answer == "") return acc + 0;
//     else if (answer != array1[index]) return acc - 1;
//     else if (answer == array1[index]) return acc + 4;
//   }, 0);
//   return result >= 0 ? result : 0;
// }

// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // -> 6
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // -> 7
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // -> 16
// console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // -> 0

/**
 * Maximum Length Difference
 */

//  You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

//  Find max(abs(length(x) − length(y)))

//  If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// function mxdiflg(a1, a2) {
//   let max = -1;
//   for (let i = 0; i < a1.length; i++) {
//     for (let j = 0; j < a2.length; j++) {
//       max =
//         Math.abs(a1[i].length - a2[j].length) > max
//           ? Math.abs(a1[i].length - a2[j].length)
//           : max;
//     }
//   }
//   return max;
// }

// let s1 = [
//   "hoqq",
//   "bbllkw",
//   "oox",
//   "ejjuyyy",
//   "plmiis",
//   "xxxzgpsssa",
//   "xxwwkktt",
//   "znnnnfqknaz",
//   "qqquuhii",
//   "dvvvwz",
// ];
// let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

// console.log(mxdiflg(s1, s2)); // -> 13
// console.log(mxdiflg(["aaaa"], [])); // -> -1
// console.log(mxdiflg([], ["aaaa"])); // -> -1
// console.log(mxdiflg([], [])); // -> -1

/**
 * Reverse words
 */
//  Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map(word => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); // -> 'ehT kciuq nworb xof spmuj revo eht yzal .god'

/**
 * Growth of a Population
 */

//  p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

//  the function nb_year should return n number of entire years needed to get a population greater or equal to p.

//  aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// function nbYear(p0, percent, aug, p) {
//   let years = 0;
//   while (p0 < p) {
//     p0 = p0 + p0 * (percent / 100) + aug;
//     years++;
//   }
//   return years;
// }

// console.log(nbYear(1500, 5, 100, 5000)); // -> 15
// console.log(nbYear(1500000, 2.5, 10000, 2000000)); // -> 10
// console.log(nbYear(1500000, 0.25, 1000, 2000000)); // -> 94

/**
 * Reverse every other word in the string
 */

//  Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// function reverse(str) {
//   return str
//     .split(" ")
//     .map((item, index) =>
//       index % 2 != 0 ? item.split("").reverse().join("") : item
//     )
//     .join(" ")
//     .trim();
// }

// console.log(reverse("Reverse this string, please!")); // -> "Reverse siht string, !esaelp"
// console.log(reverse("I really don't like reversing strings!")); // -> "I yllaer don't ekil reversing !sgnirts"

/**
 * Break camelCase
 */

// Complete the solution so that the function will break up camel casing, using a space between words.

// complete the function
// function solution(string) {
//   return string
//     .split("")
//     .map(char => {
//       if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) {
//         return " " + char;
//       } else {
//         return char;
//       }
//     })
//     .join("");
// }

// console.log(solution("camelCasing")); // -> 'camel Casing'
// console.log(solution("camelCasingTest")); // -> 'camel Casing Test'

// // [65 - 90]

/**
 * Title Case
 */

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// function titleCase(title, minorWords) {
//   if (title.length === 0) return "";
//   const [firstWord, restOfWords] = [
//     title.split(" ")[0],
//     title.split(" ").slice(1),
//   ];
//   const minorWordsArray =
//     minorWords != undefined
//       ? minorWords.split(" ").map(minorWord => minorWord.toLowerCase())
//       : [];
//   return (
//     capitalize(firstWord) +
//     " " +
//     restOfWords
//       .map(word => {
//         if (minorWordsArray.includes(word.toLowerCase())) {
//           return word.toLowerCase();
//         } else {
//           return capitalize(word);
//         }
//       })
//       .join(" ")
//   ).trim();
// }

// const capitalize = word => {
//   return (
//     word.split(" ")[0].split("")[0].toUpperCase() +
//     word
//       .split(" ")[0]
//       .split("")
//       .slice(1)
//       .map(char => char.toLowerCase())
//       .join("")
//   );
// };

// console.log(titleCase("")); // -> ''
// console.log(titleCase("a clash of KINGS", "a an the of")); // -> 'A Clash of Kings'
// console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); // -> 'The Wind in the Willows'
// console.log(titleCase("the quick brown fox")); // -> 'The Quick Brown Fox'

/**
 * Highest and Lowest
 */
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// function highAndLow(numbers) {
//   const numsArr = numbers.split(" ").map(str => Number(str));
//   let min = numsArr[0];
//   let max = numsArr[0];
//   for (let i = 1; i < numsArr.length; i++) {
//     if (numsArr[i] < min) min = numsArr[i];
//     if (numsArr[i] > max) max = numsArr[i];
//   }
//   // console.log(numsArr);
//   return [max, min].join(" ");
// }

// console.log(highAndLow("1 2 3 4 5")); // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

/**
 * Counting sheep...
 */

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.reduce(
//     (sum, sheep) => sum + (sheep == undefined ? 0 : Number(sheep)),
//     0
//   );
// }

// var array1 = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// console.log(countSheeps(array1)); // -> 17

/**
 * Descending Order
 */

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// function descendingOrder(n) {
//   return Number(
//     n
//       .toString()
//       .split("")
//       .sort((a, b) => Number(b) - Number(a))
//       .join("")
//   );
// }

// // Input: 42145 Output: 54421

// console.log(descendingOrder(1021)); // -> 2110
// console.log(descendingOrder(123456789)); // -> 987654321

/**
 * Sum without highest and lowest number
 */

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// function sumArray(array) {
//   if (array == undefined || !array.length || array.length == 1) return 0;
//   return (
//     array.reduce((sum, acc) => sum + acc, 0) -
//     Math.max(...array) -
//     Math.min(...array)
//   );
// }

// function sumArray(array) {
//   return array == undefined || array.length < 2
//     ? 0
//     : array
//         .sort((a, b) => b - a)
//         .slice(1, -1)
//         .reduce((sum, num) => sum + num, 0);
// }

// console.log(sumArray(null)); // ->               0 );
// console.log(sumArray([])); // ->                  0 );
// console.log(sumArray([3])); // ->                 0 );
// console.log(sumArray([3, 5])); // ->              0 );
// console.log(sumArray([6, 2, 1, 8, 10])); // ->   16 );
// console.log(sumArray([0, 1, 6, 10, 10])); // ->  17 );
// console.log(sumArray([-6, -20, -1, -10, -12])); //-> -28 );
// console.log(sumArray([-6, 20, -1, 10, -12])); // -> 3 );
