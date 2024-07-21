// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
let numbers = [1, -2, 3, -4, 5];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        count++;
    }
}
console.log(count);

// Дан массив с числами. Оставьте в нем только положительные числа.
let numbers2 = [1, -2, 3, -4, 5];
let positiveNumbers = numbers2.filter(num => num > 0);
console.log(positiveNumbers)


// Дана строка. Удалите предпоследний символ из этой строки.
let str = "example";
str = str.slice(0, -2) + str.slice(-1);
console.log(str)


