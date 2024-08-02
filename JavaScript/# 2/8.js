// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
let str = 'DfDfd';

function checkCase(str){
    let arr = str.split('');
    let count = 0;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] == arr[i].toUpperCase()){
            count++;
        }

    }
    if(count >= 3){
        console.log("В строке больше двух заглавных букв.")
    } else{
        console.log('В строке меньше двух заглавных букв');
    }
}

checkCase(str)


// '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
// '1 22 333 22 1'

let str2 = '1 22 333 4444 22 5555 1';

function checkLength(str){
    let arr = str.split(' ');
    arr.forEach(item =>{
       if(item.length > 3){
        arr.splice(arr.indexOf(item), 1);
       }
    })
    console.log(arr);
}
checkLength(str2)


// Слейти 2 массива [1, 2, 'a', 'b', 'c', 3]

// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];

// let result = [...arr1];
// console.log(result);
//  // Создаем новый массив на основе arr1
// result.splice(2, 0, ...arr2); // Вставляем элементы arr2 начиная с индекса 2

// console.log(result); // Вывод: [1, 2, 'a', 'b', 'c', 3]

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

let result = [];
for (let i = 0; i < arr1.length; i++) {
    if (i === 2) {
        result.push(...arr2);
    }
    result.push(arr1[i]);
}

console.log(result); 