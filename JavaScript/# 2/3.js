// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

let str = "sessd";
let str2 = "sesdf";

if (str[str.length - 1] == str2[0]) {
    console.log("true");
} else{
    console.log('false')
}

// Дана некоторая строка. Найдите позицию третьего нуля в строке.

function findThirdZeroPosition(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            count++;
            if (count === 3) {
                return i;
            }
        }
    }
    return -1;
}

// Пример использования
let s = "100200300400500";
let position = findThirdZeroPosition(s);
console.log("Position of the third zero:", position);


// Даны числа, разделенные запятыми:

// '12,34,56'
// Найдите сумму этих чисел.
let numbers = '12,34,56';
let sum = numbers.split(',').reduce((acc, curr) => acc + parseInt(curr), 0);
console.log("Sum of the numbers:", sum);


// Дана дата в следующем формате:

// '2025-12-31'
// Преобразуйте эту дату в следующий объект:

// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }
let date = '2025-12-31';
let dateObj = {
    year: date.split('-')[0],
    month: date.split('-')[1],
    day: date.split('-')[2]
};
console.log(dateObj)