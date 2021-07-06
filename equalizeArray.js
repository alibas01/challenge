// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

// Example

// Delete the  elements  and  leaving . If both twos plus either the  or the  are deleted, it takes  deletions to leave either  or . The minimum number of deletions is .

// Function Description

// Complete the equalizeArray function in the editor below.

// equalizeArray has the following parameter(s):

// int arr[n]: an array of integers
// Returns

// int: the minimum number of deletions required
// Input Format

// The first line contains an integer , the number of elements in .
// The next line contains  space-separated integers .

//---------------------------------------------------
function equalizeArray(arr) {
  // Write your code here
  let result = [];
  let considered = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    temp = [];
    for (let j of arr) {
      if (!considered.includes(arr[i]) && arr[i] === j) {
        temp.push(j);
      }
    }
    if (temp.length !== 0) result.push(temp);
    considered.push(arr[i]);
  }
  let deleted = 0;
  let maxlen = 0;
  for (let a of result) {
    if (a.length > maxlen) {
      maxlen = a.length;
    }
  }
  let token = true;
  for (let a of result) {
    if (a.length >= maxlen && token) {
      token = false;
    } else {
      deleted += a.length;
    }
  }

  return deleted;
}
