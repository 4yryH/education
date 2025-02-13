/**
 Самое простое - это иногда мы исправляем за пользователем его ввод данных и хотим, чтобы наша строка
 начиналась с большой буквы, независимо от того, что ввел пользователь.
 Необходимо реализовать такую функцию.
 */

let person = {
    firstName: 'andrey',
    lastName: 'ivanov'
};

let transformToUpperCase = function (firstName, lastName) {
    // Делаем первый символ заглавным для имени
    let firstSymbolFirstName = firstName[0].toUpperCase();
    // К первому символу прибавляем подстроку со второго символа, можно написать через .slice(1)
    let correctFirstName = firstSymbolFirstName + firstName.substring(1);
    let firstSymbolLastName = lastName[0].toUpperCase();
    let correctLastName = firstSymbolLastName + lastName.substring(1);
    // Возвращаем обратно поправленные Имя и Фамилию
    return correctFirstName + ' ' + correctLastName;
}

console.log(transformToUpperCase(person.firstName, person.lastName));

/**
 Часто в интерфейсах программ мы видим какую-то длинную строку, которая не помещается и обрезана через троеточие.
 Давайте напишем аналогичный метод.
 На вход получаем длинную или не очень строку и размер ограничения (например, то что у нас влезает 40 символов).
 На выходе возвращает, по необходимости укороченную строку, в конце которой стоит троеточие.
 Усложняем задание тем, что строка не должна обрезаться посредине слова. Обрезаем строку по пробелу
 или по символу знака препинания (,.!?:;)/
 */

let someBigText = 'Море — это символ свободы и приключений. Шум прибоя успокаивает, а крики чаек создают атмосферу романтики. Волны накатывают на берег, оставляя после себя пену и ракушки.';
let givenLength = 40;

let truncationText = function (text, maxLength) {
    // проверяем длину текста, если меньше длины ограничения, то возвращаем исходный текст
    if (text.length <= maxLength) {
        return text;
    } else {
        // Обрезаем исходный текст до заданной длины
        let truncated = text.slice(0, maxLength);
        // Находим максимальный индекс каждого знака препинания с конца и забираем этот индекс
        let lastSpaceIndex = Math.max(
            truncated.lastIndexOf(' '),
            truncated.lastIndexOf(','),
            truncated.lastIndexOf('.'),
            truncated.lastIndexOf('!'),
            truncated.lastIndexOf('?'),
            truncated.lastIndexOf(':'),
            truncated.lastIndexOf(';')
        )
        // делаем проверку, что такой знак препинания был найден
        if (lastSpaceIndex !== -1) {
            // обрезаем до индекса препинания
            let truncatedText = truncated.slice(0, lastSpaceIndex);
            // Возвращаем готовый, обрезанный текст
            return truncatedText + '…';
        }
    }
}

console.log(truncationText(someBigText, givenLength));

/**
 Небольшое практическое задание по работе с подстроками.
 Функция на вход получает 2 строки, а на выходе возвращает true/false в зависимости от того, является хотя бы одна
 из строк (не важно какая) подстрокой другой строки. Если да, то возвращается true. В противном случае - false.
 */

let firstString = 'Вот и лето прошло, словно и не бывало'
let secondString = 'Вот и лето'

let isSubstring = function (firstString, secondString) {
    /**
     Просто делаем поиск в первой строке второй подстроки через indexOf и наоборот и сравнение к -1, возвращаем true,
     если положительный ответ от indexOf, иначе возвращаем false */
    if (secondString.indexOf(firstString) > -1) {
        return true;
    } else if (firstString.indexOf(secondString) > -1) {
        return true;
    } else {
        return false;
    }
};

console.log(isSubstring(firstString, secondString));
