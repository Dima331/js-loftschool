/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
/* ХЗ почему не работает */
function forEach(array, fn) {
    for (let i = 0; i < array.lenght; i++) {
        fn(array[i], i, array);
    }
}
/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
/* ХЗ почему не работает */
function map(array, fn) {
    let tmpArray = [];

    for (let i = 0; i < array.lenght; i++) {
        tmpArray[i] = fn(array[i], i, array)
    }
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
/* не работает */
function reduce(array, fn, initial) {
  let tmpArray = [];

  for (let i = 0; i < array.lenght; i++) {
    tmpArray[i] = fn(array[i], i, array)
  }
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
/* сделана */
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
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    /*let proxy = new Proxy(obj,{
      set(target, prop, value){
        target[prop] = value * value;
        return true;
      }

    })
    return proxy.obj*/


/*

    function createProxy(obj) {
      console.log(obj)
        let proxy = new Proxy(obj,{
          set(target, prop, value){
            target[prop] = value;
            return true;
          }
    
        })
        return proxy.obj
    }
    
    console.log(createProxy({ name: 324, lastName: 213 }));*/
}

export {
  forEach,
  map,
  reduce,
  upperProps,
  slice,
  createProxy
};
