//Задание 1
let i = 0;
while (i < 2) {
    console.log ('Привет');
    i++;
}
//Другой способ:
for (let i=0; i < 2; i++) {
    console.log ('Привет');
}

//Задание 2
let i = 1;
while (i <= 5) {
    console.log (i);
    i++;
}
//Другой способ:
for (let i=1; i <= 5; i++) {
    console.log (i);
}
//Задание 3
let i = 7;
while (i <= 22) {
    console.log (i);
    i++
}
//Другой способ:
for (let i=7; i <= 22; i++) {
    console.log (i);
}

//Задание 4
let obj = {
    'Коля':200,
    'Вася':300,
    'Петя':400
};
for (let key in obj) {
    console.log (`${key} - зарплата ${obj[key]} долларов.`);
}

//Задание 5
let n=1000;
let num = 0;
while (n >= 50) {
n /= 2;
num++;
}
console.log (n);
console.log (num);

//Задание 6
let firstFriday = 1;
for (let i = firstFriday; i <= 31; i += 7) {
    console.log (`Сегодня пятница, ${i}-е число. Необходимо подготовить отчёт.`);
}