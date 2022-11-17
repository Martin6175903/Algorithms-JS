//Алгоритм работает по называемому принципу - "Разделяй и властвуй"
//Суть в том, что мы делим массивы на подмассивы и каждый раз рекурсивно мы выбираем опорный элемент
//у каждого массива, его берут случайно, но чаще всего берут центральный
//Пробегаемся по массиву и все элементы, которые по значение меньше, чем опорный,добавляем в один массив,
//все которые больше добавляем в другой массив. После такой операции получаем два массива: с меньшими и
//большими числами. Для каждого из этих массивов выполняется такая же операция. В каждом из этих массивов выбирается опорный элемент
//и происходит сортировка и так делается до тех пор, пока длина массива не станет равна единице

const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32];
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (i === pivotIndex)
            continue;
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log('length', arr.length);
console.log(quickSort(arr));
console.log('count = ', count);