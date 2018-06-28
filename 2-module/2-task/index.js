/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {

    let keys = []

    for (let key in obj){

        let nestedStructure = []

        if(typeof obj[key] === "object" && obj[key] !== null){

            let result = find(obj[key], value)

            if(result !== null){
                nestedStructure.push(key)
                nestedStructure.push(result)
            }else{
                nestedStructure = []
            }

        }else{

            if(obj[key] === value){
                nestedStructure.push(key)
            }else{
                nestedStructure = []
            }
        }

        if(nestedStructure.length){
            keys.push(nestedStructure.join('.'))
        }
    }

    if( ! keys.length){
        return null
    }

    return (keys.length === 1)
        ? keys[0]
        : keys
}
