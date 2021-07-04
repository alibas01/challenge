/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER rq
 *  4. INTEGER cq
 *  5. 2D_INTEGER_ARRAY obstacles
 */
// const queensAttack = function(n, k, rq, cq, obstacles) {
//   // Write your code here
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     // row
//     for (let j = 1; j <= n; j++) {
//       //column
//       if (i === rq && j !== cq) {
//         result += 1;
//       }
//       if (j === cq && i !== rq) {
//         result += 1;
//       }
//       if (Math.abs(i - rq) === Math.abs(j - cq)) {
//         result += 1;
//       }
//     }
//   }
//   for (let z = 0; z < k; z++) {
//     for (let i = 1; i <= n; i++) {
//       // row
//       for (let j = 1; j <= n; j++) {
//         //column
//         if (i === rq && obstacles[z][0] === rq) {
//           if (obstacles[z][1] > cq && j >= obstacles[z][1]) {
//             result -= 1;
//           } else if (obstacles[z][1] < cq && j <= obstacles[z][1]) {
//             result -= 1;
//           }
//         }
//         if (j === cq && obstacles[z][1] === cq) {
//           if (obstacles[z][0] > rq && i >= obstacles[z][0]) {
//             result -= 1;
//           } else if (obstacles[z][0] < rq && i <= obstacles[z][0]) {
//             result -= 1;
//           }
//         }
//         if (
//           Math.abs(i - rq) === Math.abs(j - cq) &&
//           Math.abs(obstacles[z][0] - rq) === Math.abs(obstacles[z][1] - cq)
//         ) {
//           if (
//             i >= obstacles[z][0] &&
//             j > obstacles[z][1] &&
//             obstacles[z][0] > rq &&
//             obstacles[z][1] > cq
//           )
//             result -= 1;
//           if (
//             i <= obstacles[z][0] &&
//             j < obstacles[z][1] &&
//             obstacles[z][0] < rq &&
//             obstacles[z][1] < cq
//           )
//             result -= 1;
//           if (
//             i >= obstacles[z][0] &&
//             j < obstacles[z][1] &&
//             obstacles[z][0] > rq &&
//             obstacles[z][1] < cq
//           )
//             result -= 1;
//           if (
//             i <= obstacles[z][0] &&
//             j > obstacles[z][1] &&
//             obstacles[z][0] < rq &&
//             obstacles[z][1] > cq
//           )
//             result -= 1;
//         }
//       }
//     }
//   }
//   return result - 1;
// };

const queensAttack = function (n, k, rq, cq, obstacles) {
  // Write your code here
  let result = 0;
  for (let i = 1; i <= n; i++) {
    // row
    for (let j = 1; j <= n; j++) {
      //column
      if (i === rq && j !== cq) {
        result += 1;
        if (k > 0) {
          obstacles.forEach((a) => {
            if (
              (a[0] === rq && a[1] > cq && j >= a[1]) ||
              (a[0] === rq && a[1] < cq && j <= a[1])
            )
              result -= 1;
          });
        }
      }
      if (j === cq && i !== rq) {
        result += 1;
        if (k > 0) {
          obstacles.forEach((a) => {
            if (
              (a[1] === cq && a[0] > rq && i >= a[0]) ||
              (a[1] === cq && a[0] < rq && i <= a[0])
            )
              result -= 1;
          });
        }
      }
      if (Math.abs(i - rq) === Math.abs(j - cq)) {
        result += 1;
        if (k > 0) {
          obstacles.forEach((a) => {
            if (Math.abs(a[0] - rq) === Math.abs(a[1] - cq)) {
              if (i >= a[0] && j >= a[1] && a[0] > rq && a[1] > cq) result -= 1;
              if (i <= a[0] && j <= a[1] && a[0] < rq && a[1] < cq) result -= 1;
              if (i >= a[0] && j <= a[1] && a[0] > rq && a[1] < cq) result -= 1;
              if (i <= a[0] && j >= a[1] && a[0] < rq && a[1] > cq) result -= 1;
            }
          });
        }
      }
    }
  }
  return result - 1;
};

console.log(
  queensAttack(100, 3, 12, 76, [
    [25, 20],
    [43, 40],
    [76, 22],
  ])
); // 319
console.log(
  queensAttack(6, 3, 3, 3, [
    [3, 4],
    [3, 2],
    [4, 3],
  ])
); // 11
console.log(
  queensAttack(5, 3, 4, 3, [
    [5, 5],
    [4, 2],
    [2, 3],
  ])
); // 10
console.log(queensAttack(100000, 0, 4187, 5068)); // 308369
