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

// ============ Returns a name based on the user's birthday. The birthday will be passed as "May 3"
// ============ The first name will come from the month, and the last name will come from the last digit of the date:

function getVillainName(birthday) {
  const m = [
    "Evil",
    "Vile",
    "Cruel",
    "Trashy",
    "Despicable",
    "Embarrassing",
    "Disreputable",
    "Atrocious",
    "Twirling",
    "Orange",
    "Terrifying",
    "Awkward",
  ];
  const d = [
    "Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket",
  ];
  const mon = String(birthday).split(" ")[1];
  const dd = Number(String(birthday).split(" ")[2].slice(1));
  const mm = birthday.getMonth();
  const firstName = m[mm];
  const lastName = d[dd];
  // const result1 = `The ${firstName} ${lastName}`;
  const result = m[birthday.getMonth()] + " " + d[birthday.getDate() % 10];

  console.log(mm, dd);
  console.log(result);


  return result;
}

getVillainName(new Date("May 13"));
