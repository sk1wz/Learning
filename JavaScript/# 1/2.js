// Дано число. Выведите в консоль первую цифру этого числа.

let number = 12345;
number = parseInt(number.toString()[0]);
console.log(number)

// Дано число. Выведите в консоль последнюю цифру этого числа.

let number2 = 12345;
number2 = parseInt(number2.toString().at(-1));
console.log(number2)

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

let number3 = 12345;
let firstDigit = parseInt(number3.toString().at(0));
let secondDigit = parseInt(number3.toString().at(-1));
console.log(firstDigit + secondDigit)

// Дано число. Выведите количество цифр в этом числе.

let number4 = 23454;
let digitsCount = number4.toString().length;
console.log(digitsCount);


// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let number5 = 2900;
let number6 = 2000;
let digitFirst = parseInt(number5.toString()[0]);
let digitSecond = parseInt(number6.toString()[0]);
digitFirst === digitSecond ? console.log("Первые цифры совпадают") : console.log("Первые цифры не совпадают");


