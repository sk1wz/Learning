// 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:

// 12 + 34 + 56

let num = 123456;
let sum = 0;

let newNum = num.toString();
for(let i = 0; i<newNum.length;i +=2){
    console.log(newNum[i])
    let pairSum = parseInt(newNum[i]) * 10 + parseInt(newNum[i + 1]);
    console.log(pairSum)
    sum += pairSum
}
console.log(sum)


// Дан массив с числами:

// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

let arr = [1,2,3,4,5];

console.log(arr.reverse())

