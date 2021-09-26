// ============ Function maskify, which changes all but the last four characters into '#'.

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

// ============ Determining the largest number in the array

// const arr = [1, 10, 100, 1000, 10000, 5, 30, 2000, 30000];

// function findLongest(arr) {
//   let max = String(arr[0]).length;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findLongest(arr));

// ============ Definition of the first letter of the text in the alphabet

// const string = "Z LKCQYEM WRPGNI UJ SER DVUD IFX R IPVUTU MCTYKTmx";

// function connotation(str) {
//   let arr = str.toLowerCase().split(" ");
//   arr = arr.filter((el) => el.length > 0);
//   const m = "m".charCodeAt();
//   const num = arr.map((el) => (el.slice(0, 1).charCodeAt() < m ? 1 : 0));
//   const sum = num.reduce((sum, a) => sum + a, 0);
//   const half = Math.round(num.length / 2);
//   const result = sum >= half;

//   console.log(arr);
//   console.log(arr.map((el) => el.slice(0, 1)));
//   console.log(num);
//   console.log(sum);
//   console.log(half);
//   console.log(result);
//   return result;
// }

// connotation(string);

// ============ Definition of the first letter of the text in the alphabet
