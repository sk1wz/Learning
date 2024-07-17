// Заполните массив целыми числами от 1 до 10.
let newArray = [];
for (let i = 1; i <= 10; i++) {
    newArray.push(i);
}
console.log(newArray)

// Заполните массив четными числами из промежутка от 1 до 100.

let newArray2 = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        newArray2.push(i);
    }
}
console.log(newArray2)

// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.

let newArray3 = [1.456, 2.125, 3.32, 4.1, 5.34];
let roundedArray = newArray3.map(num => Math.round(num * 10) / 10);

console.log(roundedArray);

