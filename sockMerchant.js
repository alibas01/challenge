// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

//------------------------------------------------------
function sockMerchant(n, ar) {
  // Write your code here
  let count = 0;
  let token = 0;
  let examined = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (!examined.includes(ar[i]) && ar[i] === ar[j]) {
        token += 1;
      }
    }
    if (token % 2 === 0) {
      count += token / 2;
    } else {
      count += (token + 1) / 2;
    }
    examined.push(ar[i]);
    token = 0;
  }
  return count;
}
