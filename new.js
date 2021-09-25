// Создание перемменних
const st = new String();
console.log(st);

const obj = new Object();
console.log(obj);

const arr = new Array();
console.log(arr);

//  rest - Синтаксис оставшихся параметров функции позволяет представлять неограниченное множество аргументов в виде массива.
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/rest_parameters
function newPerson(name, ...rest) {
  console.log(name);
  return rest;
}

const bill = newPerson("Bill", 32, "tesla", "dog");
console.log(bill);

// Объекты Set представляют коллекции значений, по которым вы можете выполнить
// обход в порядке вставки элементов. Значение элемента в Set может присутствовать
// только в одном экземпляре, что обеспечивает его уникальность в коллекции Set.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set
var arr1 = [1, 2, 3, 4, 5, 5, 4, 3, 3, 4, 5];
var set = new Set(arr1);
console.log(set);
console.log(set.has(5));
console.log(set.delete(5));
console.log(set.size);
console.log([...set]);

// Об'єкт Map містить пари ключ-значення і запам'ятовує початковий порядок вставки ключів. Будь -яке значення (як об'єкти, так і примітивні значення) може використовуватися як ключ, так і значення.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map?retiredLocale=uk
const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete("b");

console.log(map1.size);
// expected output: 2
