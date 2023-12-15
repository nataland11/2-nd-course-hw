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

let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruits = fruits.sort(() => Math.random() - 0.5);
alert(fruits);

let firstGuess = prompt("Чему равнялся первый элемент массива?");
let lastGuess = prompt("Чему равнялся последний элемент массива?");

if (firstGuess === fruits[0] && lastGuess === fruits[fruits.length - 1]) {
    alert("Поздравляем! Вы угадали оба слова.");
}
else if (firstGuess === fruits[0] || lastGuess === fruits[fruits.length - 1]) {
    alert("Вы были близки к победе!");
}
else {
    alert("Вы не угадали ни одного слова.");
}