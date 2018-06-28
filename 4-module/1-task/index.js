'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {

    let ulList = document.createElement('ul')

    for (let i = 0; i < friends.length; i++){
        let li = document.createElement('li')
        let text = document.createTextNode(`${friends[i]['firstName']} ${friends[i]['lastName']}`)

        li.appendChild(text)
        ulList.appendChild(li)
    }

    return ulList
}


