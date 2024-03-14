alert("1-masala");
(function () {
  console.log("1-masala");
})();
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
let bushOby = {};
let tolaOby = { name: "John", age: 30 };

console.log(isEmpty(bushOby));

console.log(isEmpty(tolaOby));
//2
alert("2-masala");
(function () {
  console.log("2-masala");
})();

let salaries = { John: 100, Ann: 160, Pete: 130 };

function totalSalaries(obj) {
  let total = 0;
  for (let key in obj) {
    total += obj[key];
  }
  return total;
}

console.log(totalSalaries(salaries));
//3
alert("3-masala");
(function () {
  console.log("3-masala");
})();

let menu = {
  width: 200,
  height: 300,
  title: "My mates",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

console.log(menu);
//4
alert("4-masala");
(function () {
  console.log("4-masala");
})();
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

console.log(arr);
//5
alert("5-masala");
(function () {
  console.log("5-masala");
})();
function inputNumber() {
  let numbers = [];

  while (true) {
    let input = prompt("Iltimos, raqam kiriting:");

    if (input === null || isNaN(input)) {
      break;
    }

    numbers.push(Number(input));
  }

  return numbers;
}

let numbersArray = inputNumber();
console.log(numbersArray);
