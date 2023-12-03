//Задание 1
function getMin(a, b) {
    return a < b ? a : b;
}

getMin(7, 11);

//Другой способ:
if (a < b) {
    return a;
} else {
    return b;
}

//Задание 2
function checkParity(num) {

    if (num % 2 === 0) {
        return "Число чётное";
    } else {
        return "Число нечётное";
    }
}

//Задание 3.1
function printSquare (num) {
    console.log (num * num);
}

printSquare(7);

//Другой способ
function printSquare (num) {
    let result = num * num;
    console.log (result);
}

//Задание 3.2
function getSquare (num) {
    return (num * num);
}

console.log(getSquare(7));

//Задание 4
function greetUser () {
    let age = prompt("Сколько Вам лет?");

    if (age < 0) {
        console.log("Вы ввели неправильное значение");
    } else if (age <= 12){
        console.log("Привет, друг!");
    } else {
        console.log("Добро пожаловать!");
    }
}

greetUser();

//Задание 5
function multiplyNumbers (a, b) {

    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return "Одно или оба значения не являются числом";
    } else {
        return a * b;
    }
}

multiplyNumbers();

//Задание 6
function cubeNumber() {
    let num = prompt("Введите число от 0 до 10");

    if (isNaN(Number(num))) {
        return "Вы ввели не число";
    } else {
        return `${num} в кубе равняется ${num ** 3}`;
    }
}

console.log(cubeNumber());

//Задание 7
function getArea() {
    return Math.PI * this.radius * this.radius;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 5,
    getArea: getArea,
    getPerimeter,
};

const circle2 = {
    radius: 10,
    getArea: getArea,
    getPerimeter,
};

circle1.getArea();
circle2.getArea();

//Задание 8
function getSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Лето";
    } else if (month >= 9 && month <= 11) {
        return "Осень";
    } else if (month == 12 || month == 1 || month == 2) {
        return "Зима";
    } else {
        return "В году 12 месяцев";
    }
}

alert(getSeason(prompt("Введите порядковый номер месяца")));

<button onclick="alert(getSeason(prompt('Введите порядковый номер месяца')))"></button>