// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

let str = '14dfggdsf3d32f2g';
let arr = [];

for(let i = 0; i < str.length; i++){
    if(parseInt(str[i])){
        arr.push(i);
    }
}
console.log(arr)


// Дан массив с некоторыми числами, например, вот такой:

// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:

// [321, 654, 987]
let numbers = [123, 456, 789];
for(let i = 0; i < numbers.length; i++){
    numbers[i] = parseInt(numbers[i].toString().split('').reverse().join(''));
}
console.log(numbers)

// '1234567'
// '1 234 567'

let strNums = '1234567';
function formatNumber(str){
    const arr = str.split('');
    for(let i = arr.length - 3;i > 0; i -=3){
        arr.splice(i, 0, ' ');
    }
    return arr.join('');
}

console.log(formatNumber(strNums))