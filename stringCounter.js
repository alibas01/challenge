// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

// Example

// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Returns

// int: the frequency of a in the substring

//-----------------------first solution------runtime??
// function repeatedString(s, n) {
//   //let l = s.length;
//   let count = 0;
//   while (s.length <= n) {
//     s = s + s;
//   }
//   s = s.substring(0, n).split("");
//   for (let a of s) {
//     if (a === "a") {
//       count += 1;
//     }
//   }
//   return count;
// }
//----------------------correct solution---
function repeatedString(s, n) {
  let l = s.length;
  let count = 0;
  function check(x, y) {
    let z = 0;
    x = x.substring(0, y).split("");
    for (let a of x) {
      if (a === "a") {
        z += 1;
      }
    }
    return z;
  }
  let sx = s.split("");
  for (let a of sx) {
    if (a === "a") {
      count += 1;
    }
  }
  if (n % l === 0) {
    return count * (n / l);
  } else {
    return count * Math.trunc(n / l) + check(s, n % l);
  }
}
