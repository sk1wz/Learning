// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:

// 'A BC DEF ghij'
let str = 'a bc def ghij';

console.log(str)
function formatStr(str){
    const arr = str.split(" ");
   
   for(let i = 0; i< arr.length;i++){
    if(arr[i].length <= 3){
        arr[i] = arr[i].toUpperCase();
    } else{
        return arr.join(' ');
    }

   }
    
}
console.log(formatStr(str))


// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

function checkRegister(sm){
    if(sm === sm.toUpperCase()){
        console.log("Символ в верхнем регистре.")
    }
    if(sm === sm.toLowerCase()){
        console.log('Символ в нижнем регистре.')
    }
}
checkRegister('F')
checkRegister('a')


function checkIncludes(str){
    let strWords = 'Widget'
    if(strWords.includes(str)){
       return true;
    } else{
       return false;
    }
}
console.log(checkIncludes("Wid"))

// Дано некоторое число, например, такое:

// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:

// 28
let num = 123789;
function checkNum(num){
    let numStr = num.toString();
    let numArr = numStr.split('').filter(Number => Number % 2 == 0 );
    if(numArr){
        return numArr.join('')
    } else{
        throw new Error('Произошла ошибка!')
        
    }
}
 console.log(checkNum(num));
 


