  // Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
  let nums = 122345678;
  let nums2 = 13725657;
  let arr = [];
  let str_nums = nums2.toString().split('');
  
  for (let i = 0; i < str_nums.length; i++) {
      arr.push(Number(str_nums[i]));
  }
  

  
  let isAscending = true;
  
  for (let i = 0; i < arr.length - 1; i++) { 
      if (arr[i] >= arr[i + 1]) {
          isAscending = false;
          break; 
      }
  }
  
  if (isAscending) {
      console.log('Число расположено по возрастанию');
  } else {
      console.log('Число не по возрастанию');
  }

//   Дан массив:

// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.
let arr2 = [1, '', 2, 3, '', 5]
for(let i = 0; i < arr2.length; i++) {
    if (arr2[i] === '') {
        arr2.splice(i, 1);
        i--;
    }
}
console.log(arr2)

// Дан массив:

// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.

let arr3 = [
    	[2, 1, 4, 3, 5],
    	[3, 5, 2, 4, 1],
    	[4, 3, 1, 5, 2],
    ]

  
   let newarray = arr3.map(item => item.sort((a,b) => a-b))
   console.log(newarray)



//    Даны два массива:

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
  