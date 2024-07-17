// Заполните массив случайными числами из промежутка от 1 до 100.
let newArray = [];
for(let i = 0; i<10; i++){
    let randomNum = Math.floor(Math.random() * 100) + 1;
    newArray.push(randomNum);
}

console.log(newArray);

//12345
// Выведите в консоль все его символы с конца.

let num = 12345;
let numStr = num.toString();
let reversedStr = numStr.split('').reverse().join('');

console.log(reversedStr);

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:

// [1, 2]
// [3, 4]
// [5, 6]

let newArray2 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < newArray2.length; i += 2) {
    let subArray = newArray2.slice(i, i + 2);
    console.log(subArray);
}

// Слейте эти массивы в новый массив:

// [1, 2, 3, 4, 5, 6]
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);

console.log(arr3);
