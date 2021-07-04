/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER. (the number of location that can be attacked)
 * The function accepts following parameters:
 *  1. INTEGER n (board size n x n )
 *  2. INTEGER k (number of obstacles)
 *  3. INTEGER rq (queens position row)
 *  4. INTEGER cq (queens position column)
 *  5. 2D_INTEGER_ARRAY obstacles (array of arrays. formed by 2 integer that represents seperate obstacle location. [[row, column],[row, column]] obstacles.length = k)
 */

//-------------------------------First Answer---------------
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

//-------------------second answer------------------
// const queensAttack = function (n, k, rq, cq, obstacles) {
//   // Write your code here
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     // row
//     for (let j = 1; j <= n; j++) {
//       //column
//       if (i === rq && j !== cq) {
//         result += 1;
//         if (k > 0) {
//           obstacles.forEach((a) => {
//             if (
//               (a[0] === rq && a[1] > cq && j >= a[1]) ||
//               (a[0] === rq && a[1] < cq && j <= a[1])
//             )
//               result -= 1;
//           });
//         }
//       }
//       if (j === cq && i !== rq) {
//         result += 1;
//         if (k > 0) {
//           obstacles.forEach((a) => {
//             if (
//               (a[1] === cq && a[0] > rq && i >= a[0]) ||
//               (a[1] === cq && a[0] < rq && i <= a[0])
//             )
//               result -= 1;
//           });
//         }
//       }
//       if (Math.abs(i - rq) === Math.abs(j - cq)) {
//         result += 1;
//         if (k > 0) {
//           obstacles.forEach((a) => {
//             if (Math.abs(a[0] - rq) === Math.abs(a[1] - cq)) {
//               if (i >= a[0] && j >= a[1] && a[0] > rq && a[1] > cq) result -= 1;
//               if (i <= a[0] && j <= a[1] && a[0] < rq && a[1] < cq) result -= 1;
//               if (i >= a[0] && j <= a[1] && a[0] > rq && a[1] < cq) result -= 1;
//               if (i <= a[0] && j >= a[1] && a[0] < rq && a[1] > cq) result -= 1;
//             }
//           });
//         }
//       }
//     }
//   }
//   return result - 1;
// };
//--------------------third answer-------------
function position(row, col) {
  if (row < col) {
    return row;
  } else {
    return col;
  }
}
function queensAttack(n, k, r_q, c_q, obstacles) {
  let result =
    2 * (n - 1) +
    position(n - c_q, n - r_q) +
    position(c_q - 1, r_q - 1) +
    position(n - c_q, r_q - 1) +
    position(n - r_q, c_q - 1);

  if (obstacles) {
    for (let z = 0; z < obstacles.length; z++) {
      // for evry obstacle
      r_o = obstacles[z][0];
      c_o = obstacles[z][1];
      // if in the same row
      if (r_o === r_q && c_o > c_q) {
        result -= n - c_o + 1;
      }
      if (r_o === r_q && c_o < c_q) {
        result -= c_o;
      }

      // if in the same column
      if (c_o === c_q && r_o > r_q) {
        result -= n - r_o + 1;
      }
      if (c_o === c_q && r_o < r_q) {
        result -= r_o;
      }

      // if diaogonal
      if (Math.abs(r_o - r_q) === Math.abs(c_o - c_q)) {
        // if upper right sector
        if (r_o > r_q && c_o > c_q) {
          result -= position(n - r_o + 1, n - c_o + 1);
        }
        // if down left sector
        if (r_o < r_q && c_o < c_q) {
          result -= position(r_o, c_o);
        }
        // if upper left sector
        if (r_o > r_q && c_o < c_q) {
          result -= position(n - r_o + 1, c_o);
        }
        // if right down sector
        if (r_o < r_q && c_o > c_q) {
          result -= position(r_o, n - c_o + 1);
        }
      }
    }
  }
  return result;
}

//------------examples--------------
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
