// Дана некоторая строка. Найдите позицию первого нуля в строке.
let str = "dfas0dfg0q"
let position = str.indexOf("0");
console.log(position); // Выведет позицию первого нуля в строке

// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
for (let i = 10; i <= 1000; i++) {
    let firstDigit = Math.floor(i / 100);
    let secondDigit = Math.floor(i / 10) % 10;
    if (firstDigit + secondDigit === 5) {
        console.log(i);
    }
}


// Дан массив. Удалите из него элементы с заданным значением.
let arr = [1, 2, 3, 4, 5, 5, 6, 7];
let valueToRemove = 5;
arr = arr.filter(item => item !== valueToRemove);
console.log(arr);


// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.
let array = [1, 2, 3, 4, 5, 6];
let sumFirstHalf = array.slice(0, Math.ceil(array.length / 2)).reduce((acc, curr) => acc + curr, 0);
console.log(sumFirstHalf);