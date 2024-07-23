// Дана некоторая строка, например, вот такая: Получите массив позиций всех нулей в этой в строке.
let str = '023m0df0dfg0';
let newStrArray = [];
for(let i = 0; i < str.length; i++){
    if(str[i] == "0"){
        newStrArray.push(i)
    }
}
console.log(newStrArray)


// Дана некоторая строка:

// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'

let str2 =  'abcdefg'; 
let newStr2 = '';
for(let i = 0; i<str2.length; i++){
    if((i+1) % 3 !== 0){
        newStr2 += str2[i];
    }
  
}
console.log(newStr2)
