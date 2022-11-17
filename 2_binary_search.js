const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

//бинарный поиск элемента в массиве со сложностью алгоритма O(log2 n)

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;        // центральный элемент массива
    let found = false; // некий флаг, который будет отображать нашли ли мы элемент в массиве или нет
    let position = -1; // позиция самого элемента которого мы будем возвращать из функции
    while (found === false && start <= end) {
        count++;
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

console.log(binarySearch(array, 7));
console.log(count);