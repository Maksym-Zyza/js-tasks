// // Function maskify, which changes all but the last four characters into '#'.

// const code = 1234567890;

// // function maskify(cc) {
// //   const arr = String(cc).split("");

// //   let sum = "";
// //   for (let i = 0; i < arr.length - 4; i++) {
// //     if (arr.length > 4) {
// //       sum += "#";
// //     }
// //   }

// //   const last = String(cc)
// //     .split("")
// //     .reverse()
// //     .splice(0, 4)
// //     .reverse()
// //     .join("")
// //     .toString();
// //   // console.log(sum+last);
// //   return sum + last;
// // }

// function maskify(cc) {
//   console.log(
//     String(cc).slice(0, -4).replace(/./g, "#") + String(cc).slice(-4)
//   );
// }

// console.log(maskify(code));

const arr = [1, 10, 100, 1000, 10000, 5, 30, 2000, 30000];

function findLongest(arr) {
  let max = String(arr[0]).length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findLongest(arr));

// my test
