function mySlice(arr, start = 0, end = arr.length) {
    let result = [];

    // Если start отрицательный, считаем с конца массива
    if (start < 0) start = Math.max(arr.length + start, 0);

    // Если end отрицательный, считаем с конца массива
    if (end < 0) end = Math.max(arr.length + end, 0);

    // Перебираем элементы массива от start до end (не включая end)
    for (let i = start; i < end && i < arr.length; i++) {
        result.push(arr[i]); // Добавляем элемент в массив
    }

    // Возвращаем новый массив с выбранными элементами
    return result;
}

function myIndexOf(arr, item, from = 0) {
    // Если from отрицательный, начинаем отсчет от конца массива
    if (from < 0) from = Math.max(arr.length + from, 0);

    // Перебираем массив, начиная с позиции from
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) return i; // Если элемент найден, возвращаем его индекс
    }

    return -1; // Если элемент не найден, возвращаем -1
}

function myIncludes(arr, item, from = 0) {
    // Проверяем, содержится ли элемент в массиве, используя myIndexOf
    return myIndexOf(arr, item, from) !== -1;
}

console.log(mySlice([1, 2, 3, 4, 5], 1, 3));
console.log(mySlice([1, 2, 3, 4, 5], -3, -1));
console.log(myIndexOf([1, 2, 3, 4, 2], 2));
console.log(myIndexOf([1, 2, 3, 4, 2], 2, -2));
console.log(myIncludes([1, 2, 3, 4, 2], 3));
console.log(myIncludes([1, 2, 3, 4, 2], 5));
