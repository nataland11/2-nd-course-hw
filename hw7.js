//Задание 1
let str = 'Преобразуем в верхний регистр';
console.log(str.toUpperCase());

// Задание 2
const products = ['Конфеты Москвичка', 'Печенье Курабье', 'Лаваш армянский', 'Конфеты Южная ночь'];
const search = 'конфеты';
products.forEach((product) => {
    if (product.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(product);
    }
});

// Другой способ
function filterStrings(array, startStr) {
    return array.filter(item => item.toLowerCase().startsWith(startStr.toLowerCase()));
}

// Задание 3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

// Задание 4
let numbs = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbs));
console.log(Math.max(numbs));

// Задание 5
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(1, 10));

// Другой способ
function randomOneToTen() {
    console.log(Math.floor(Math.random() * 10) + 1);
}

// Задание 6
function randomNumbers(n) {
    let result = [];
    for (let i = 0; i < n/2; i++) {
        result.push(Math.floor(Math.random() * n));
    }
    return result;
}
// Задание 7
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Задание 8
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let fullDate = "Сегодня:" + " " + myDate.getDate() + " " + months[myDate.getMonth()] + " " +  myDate.getFullYear() + ", " + days[myDate.getDay()];
console.log(fullDate);

// Другой способ
console.log(new Date());

// Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
function formaDate(date) {
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDate()]}\nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
console.log(formatDate(new Date()));
