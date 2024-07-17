// 'abcde'
// Получите массив букв этой строки.

let str = 'abcde';
let newArray = [];
for(element of str){
    console.log(element)
    newArray.push(element)
}
console.log(newArray)

// 12345
// Получите массив цифр этого числа.
let number = 12345;
let numberString = number.toString();
let digitArray = numberString.split('').map(Number);
console.log(digitArray);

// Дано некоторое число: 12345
// Переверните его: 54321
let number2 = 12345;
let reversedNumber = parseInt(number2.toString().split('').reverse().join(''));
console.log(reversedNumber);

// Дано некоторое число: 12345
// Найдите сумму цифр этого числа.
let number3 = 12345;
let sum = 0;
let numberString2 = number.toString();

for (let digit of numberString2) {
    sum += parseInt(digit);
}

console.log(sum);


