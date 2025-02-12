/**
 Написать метод, который на вход получает объект, а на выходе возвращает число, соответствующее сумме всех числовых полей.
 Задача со звездочкой - то же самое. Но вместо просто числа с суммой полей метод возвращает массив с названиями полей,
 причем эти названия полей отсортированы по убыванию.
 Например, для объекта {name: 'Vasya', friends: 5, likes: 19, projects: 7} вернется массив [likes, projects, friends].
 Задание весьма искусственное, но крайне полезное для закрепления материала.
 */

const testObj = {name: 'Vasya', friends: 5, likes: 19, projects: 7, age: 25, comments: 3};

function sumNumericFields(obj) {
    let sum = 0;
    // Перебираем все ключи объекта
    for (let key in obj) {
        // Проверяем, является ли значение числом
        if (typeof obj[key] === 'number') {
            sum += obj[key]; // Если да, добавляем его к сумме
        }
    }
    return sum; // Возвращаем итоговую сумму

}

function sortedNumericFields(obj) {

    let numericFields = []; // Создаём массив для хранения числовых полей
    // Перебираем все ключи объекта
    for (let key in obj) {
        // Проверяем, является ли значение числом
        if (typeof obj[key] === 'number') {
            numericFields.push([key, obj[key]]); // Добавляем в массив пару [ключ, значение]
        }

    }
    // Сортируем массив по значениям в порядке убывания

    numericFields.sort((a, b) => b[1] - a[1]);
    // Извлекаем только ключи из отсортированного массива и возвращаем их
    return numericFields.map(([key]) => key);

}

console.log(sumNumericFields(testObj)); // 59 - сумма всех числовых значений
console.log(sortedNumericFields(testObj)); // вернет ['age', 'likes', 'projects', 'friends', 'comments']
