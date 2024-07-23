// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
let str = "abc123";
let firstDigitPosition = str.search(/\d/);
console.log(firstDigitPosition)


// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

let obj = {a: 1, b: 2, c: 3};
let keysArray = Object.keys(obj);
let valuesArray = Object.values(obj);
console.log(keysArray);
console.log(valuesArray);


// Дано число. Выведите в консоль количество четных цифр в этом числе.
let number = 1234;
let count = 0;
let strNumber = number.toString();
for (let i = 0; i < strNumber.length; i++) {
    // Check if the digit is even
    if (parseInt(strNumber[i]) % 2 === 0) {
        count++;
    }
}
console.log(count)

// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:

// 'AbCdE'


let str2 = 'abcde';
let newStr = '';
for(let i = 0; i < str2.length; i++){
    if(i % 2 == 0){
        console.log(str2[i])
        newStr += str2[i].toUpperCase();
    } else{
        newStr += str2[i];
    }
 
}
console.log(newStr)

// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

// 'Aaa Bbb Ccc'
let str3 = 'aaa bbb ccc';
let words = str3.split(' '); // Разделить строку на слова по пробелу
let result = '';

for (let i = 0; i < words.length; i++) {
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' ';
    console.log(result)
}

result = result.trim(); // Удалить лишние пробелы в конце строки

console.log(result); 
