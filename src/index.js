/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}
/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let tmpArray = [];

    for (let i = 0; i < array.length; i++) {
        tmpArray.push(fn(array[i], i, array));
    }

    return tmpArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let value = initial || array[0];
    let index = initial ? 0 : 1;

    for (let i = index; i < array.length; i++) {
        value = fn(value, array[i], i, array)
    }

    return value;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let tmpArrayLower = [],
        tmpArrayUpper = [];

    for (let item in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, item)) {
            tmpArrayLower.push(item)
        }
    }
    for (let i = 0; i < tmpArrayLower.length; i++) {
        tmpArrayUpper.push(tmpArrayLower[i].toUpperCase());
    }

    return tmpArrayUpper;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    var arr = [1, 2, 3, 4, 67, 8];

    console.log(slice(arr, 1, 5));

    function slice(array, from, to) {
        if (!from && !to) {
            return array;
        }
        if (from && !to) {
            to = array.length;
            var tmp = [];
            for (i = from; i < to; i++) {
                tmp.push(array[i]);
            }
            return tmp;
        } else {
            var tmp = [];
            for (i = from; i < to; i++) {
                tmp.push(array[i]);
            }
            return tmp;
        }
        return tmp;
    }
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    let proxy = new Proxy(obj, {
        set(target, prop, value) {
            target[prop] = value * value;
            return true;
        }
    })

    return proxy;
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};