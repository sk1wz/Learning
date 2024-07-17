//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
let newArray = ['http://vk.com', 'http:/dfwe', 'dfdf//:https', 'dfdfdfdf'];
let filteredArray = newArray.filter(str => str.startsWith('http://'));

console.log(filteredArray);

// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
let newArray2 = ['http://vk.com', 'http:/dfwe.html', 'dfdf//:httpsdfd.html', 'dfdfdfdf..html.'];
let filteredArray2 = newArray2.filter(str => str.endsWith('.html'));

console.log(filteredArray2);


