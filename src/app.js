function gameSecretNumber() {
    let maxNumber = 100; // Максимальное возможное число, которое может быть загадано
    let minNumber = 1; // Нижняя граница поиска
    let secretNumber = Math.floor(Math.random() * maxNumber) + 1; // Генерация случайного числа от 1 до 100
    let attempts = 0; // Счётчик попыток

    console.log(`Компьютер 1 загадал секретное число: ${secretNumber}`);

    // Цикл для поиска
    while (minNumber <= maxNumber) {
        let proposedNumber = Math.floor((minNumber + maxNumber) / 2); // Определяем середину диапазона
        attempts++; // Увеличиваем количество попыток

        console.log(`Попытка №${attempts}`);
        console.log(`Компьютер 2: ${proposedNumber}`);

        if (proposedNumber > secretNumber) { // Если число больше загаданного
            console.log(`Компьютер 1: меньше`);
            maxNumber = proposedNumber - 1; // Сужаем диапазон поиска сверху
        } else if (proposedNumber < secretNumber) { // Если число меньше загаданного
            console.log(`Компьютер 1: больше`);
            minNumber = proposedNumber + 1; // Сужаем диапазон поиска снизу
        } else { // Если число угадано
            console.log(`Компьютер 2 угадал число ${secretNumber} за ${attempts} попыток!`);
            break; // выход из цикла
        }
    }
}

gameSecretNumber();

