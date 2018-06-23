'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid (name) {

    if(!name){
        return false
    }

    let lengthDirtyName = name.length
    let hasNotSpaces = (name.indexOf(' ') === -1) ? true : false

    if(hasNotSpaces && lengthDirtyName > 3){
        return true
    }

    return false
}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();

