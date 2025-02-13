/**
 Подготовьте простой калькулятор simpleCalculate, который будет выполнять нужную
 операцию из четырех стандартных: * / + -. Без использования операторов ветвления (if/else)
 */

let firstNumber = 10;
let secondNumber = 4.2;

// Объект с математическими функциями
const operations = {
    multiply: function (firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    },
    divide: function (firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    },
    add: function (firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    },
    subtract: function (firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }
};
// Функция самого калькулятора, принимает два числа и математическую функцию
const simpleCalculate = function (firstNumber, secondNumber, operation) {
    return operation(firstNumber, secondNumber);
}
// Объявление нужного нам оператора
const selectedOperation = 'multiply';

/**
 Вызываем в консоль функцию, в которую передаем два числа и выбранный оператор.
 */
console.log(simpleCalculate(firstNumber, secondNumber, operations[selectedOperation]));

/**
 * Можно сократить и написать через стрелочную функцию, дам другие имена функциям
 */

const mathOperators = {
    multiplied: (firstNumber, secondNumber) => firstNumber * secondNumber,
    divided: (firstNumber, secondNumber) => firstNumber / secondNumber,
    plus: (firstNumber, secondNumber) => firstNumber + secondNumber,
    minus: (firstNumber, secondNumber) => firstNumber - secondNumber
}
const calculate = (firstNumber, secondNumber, operation) => operation(firstNumber, secondNumber);
const selectedMathOperators = 'plus'

console.log(calculate(firstNumber, secondNumber, mathOperators[selectedMathOperators]));
