const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];

// Implement a logic that finds difference between "first" and "secord" lists
// and prints the result to the console:
// [1, 2, 4]

function getArraysDifference(a1, a2) {
  const unique = [];
  for (let i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      unique.push(a1[i]);
    }
  }
  for (let i = 0; i < a2.length; i++) {
    if (a1.indexOf(a2[i]) === -1) {
      unique.push(a2[i]);
    }
  }

  let result = [];

  for (let str of unique) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result.sort((a, b) => a - b);
}

console.log("Solution 1", getArraysDifference(first, second));

// ===== Solution 2

const diff2 = first
  .filter((x) => !second.includes(x))
  .concat(second.filter((x) => !first.includes(x)));

let result2 = [];

for (let str of diff2) {
  if (!result2.includes(str)) {
    result2.push(str);
  }
}

result2.sort((a, b) => a - b);

console.log("Solution 2", result2);
