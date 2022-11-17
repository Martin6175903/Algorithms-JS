// Сортировка пузырьком

const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32];
let count = 0;

// Сортировка элементов со сложностью алгоритма O(n*n)

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j + 1 ] < array[j]) {
                let tmp = array[j];             //Создание временной переменной для перестановки элементов
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            count += 1;
        }
    }
    return array;
}

console.log('length', arr.length);
console.log(bubbleSort(arr));
console.log('count = ', count);

