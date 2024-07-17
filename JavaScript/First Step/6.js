// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

let arr = [1,2,3,4,5,6];
let newArray = arr.map(elem => elem*elem);
console.log(newArray)



// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

let arr2 = [1,2,3,4,5,6];
let newArray2 = arr2.reduce((acc, elem) => acc + Math.sqrt(elem), 0);
console.log(newArray2)

// Дан массив с числами. Найдите сумму положительных элементов этого массива.

let arr3 = [2,-3,5,6,-20,5];
let sum = 0;
for(let i = 0; i<arr3.length; i++){
    if(arr3[i] > 0){
        sum += arr3[i];
    }
    
}
console.log(sum)


// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

let arr4 = [-10,-20,5,5,10,20];
let sum2 = 0;
for(let i = 0; i<arr4.length; i++){
    if(arr4[i] > 0 && arr4[i] < 10){
        sum2 += arr4[i];
    }
    
}
console.log(sum2)