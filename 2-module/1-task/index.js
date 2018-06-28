/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {

    let newObj = {}

    for (let key in obj){
        if(typeof obj[key] === "object" && obj[key] !== null){
            newObj[key] = clone(obj[key])
        }else{
            newObj[key] = obj[key]
        }
    }

    return newObj
}

