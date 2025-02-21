/**
 Логгер:
 Напишите функцию createLogger(), которая должна возвращать объект с методами:
 log(message): сохраняет сообщение в массив.
 getLogs(): выводит все сохраненные сообщения.
 Массив с сообщениями должен быть доступен только внутри замыкания.
 Посторонние функции не должны иметь прямого доступа к этому массиву.
 */

function createLogger() {
    let logs = [];

    return {
        log(message) {
            logs.push(message);
        },
        getLogs() {
            return logs.slice(); // Возвращаем копию массива, чтобы защитить оригинал
        }
    };
}

const logger = createLogger();
logger.log("First log message");
logger.log("Second log message");

console.log(logger.getLogs());

/**
 Генератор случайных чисел из диапазона
 Напишите функцию `createRandomGenerator(min, max), которая возвращает новую функцию.
 Каждое время, когда возвращенная функция вызывается, она должна генерировать случайное число в пределах от min до max.
 Значения min и max должны сохраняться внутри замыкания, и быть недоступными извне.
 */

const createRandomGenerator = (min, max) => {
    const history = []; // Массив для сгенерированных чисел

    const generator = (command = 'generate') => {
        if (command === 'getHistory') {
            return [...history]; // Возвращаем копию массива истории
        }
        if (command === 'clearHistory') {
            history.length = 0; // Очищаем массив истории
            return 'История очищена';
        }

        // Генерируем случайное число
        const randomNum = Math.random() * (max - min) + min;
        history.push(randomNum);
        return randomNum;
    };

    return generator;
};

const randomGen = createRandomGenerator(10, 100);

console.log(randomGen()); // Сгенерирует число и положит его в массив истории
console.log(randomGen());
console.log(randomGen());
console.log(randomGen('getHistory')); // Вернет массив с историей
console.log(randomGen('clearHistory')); // Очистит историю
console.log(randomGen('getHistory')); // Вернет пустой массив, потому-что история очищена
