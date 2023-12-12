//Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 10) break;
    console.log(numbs[i]);
}

//Задание 1. Другой способ
const arr = [1, 5, 4, 10, 0, 3];
for (let value of arr) {
    console. log(value);
    if (value === 10) {
        break;
    }
}

//Задание 2
const numbs = [1, 5, 4, 10, 0, 3];
numbs.forEach((el, index) => {
    console.log(`${index}: ${el}`);
});

//Задание 2. Другой способ
const numbs = [1, 5, 4, 10, 0, 3];
console.log(numbs.indexOf(4));

//Задание 3
let numbs = [1, 3, 5, 10, 20];
numbs = numbs.join(' ');
console.log(numbs);

//Задание 4
let arr = [];
for (let i = 0; i < 3; i++) {
    let innerArr = [];
	for (let j = 0; j < 3; j++) {
		innerArr.push(1);
	}
    arr.push(innerArr);
}
console.log(arr);

//Задание 5
let numbs = [1, 1, 1];
numbs.push(2, 2, 2);
console.log(numbs);

//Задание 6
let arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort();
console.log(arr.pop());
console.log(arr);

//Задание 7
let numbers = prompt("Угадай число");
let arr = [9, 8, 7, 6, 5];
if (numbers < 5) {
        alert("Не угадал");
    } else if (numbers > 9) {
        alert("Не угадал");
    } else {
        alert("Угадал");
    }

//Задание 8
let order = 'abcdef';
let arrayOrder = order.split('');
let arrayBackwards = arrayOrder.reverse();
let arrayNeworder = arrayBackwards.join('');

console.log(arrayNeworder);

//Задание 9
let arr = [[1, 2, 3],[4, 5, 6]];
arr = arr.join();
console.log(arr);

//Задание 10
const arr = [1, 3, 5, 7, 9];
for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i + 1]);
}

//Задание 11
const nums = [1, 2, 3, 4, 5, 6];
const squares = nums.map(function (num) {
    return num * num
})
console.log(squares)

//Задание 12
const getLength = source => source.map(str => str.length);

console.log(getLength(['звук', 'картофель', 'мошкара']));

//Задание 13
let array = [-1, 0, 5, -10, 56, -25, 25, 0, -1000, -2];
let res = array.filter(elem => elem < 0);
  
console. log(res);

