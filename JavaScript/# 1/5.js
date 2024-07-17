// Найдите сумму всех целых чисел от 1 до 100.
let sum = 0;
for(let i = 1; i<=100; i++){
    sum += i;
}
console.log(sum)

// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

let sum2 = 0;
for(let i = 1; i<=100; i++){
    if(i % 2 == 0){
        sum2 += i;
    }
    
    
}
console.log(sum2)

// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

let sum3 = 0;
for(let i = 1; i<=100; i++){
    if(i % 2 !== 0){
        sum3 += i;
    }
}
console.log(sum3)


// Даны два целых числа. Найдите остаток от деления первого числа на второе.

let num1 = 10
let num2 = 110
let num3 = num1 % num2;
console.log(num3)

// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

let str = 'denchik';
for(let i=0; i<=str.length;i++){
    console.log(str.at(-i))
}







