function getSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && <= 8) {
        return "Лето";
    } else if (month >= 9 && <= 11) {
        return "Осень";
    } else if (month == 12 || month == 1 || month == 2) {
        return "Зима";
    } else {
        return "В году 12 месяцев";
    }
}

alert(getSeason(prompt("Введите порядковый номер месяца")));