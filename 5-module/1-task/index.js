'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

    const NUMBER_COLUMN_GENDER = 5
    const NUMBER_COLUMN_AGE = 3

    const MALE_VALUE = 'm'
    const MALE_CLASS = 'male'
    const FEMALE_VALUE = 'f'
    const FEMALE_CLASS = 'female'

    const AVAILABLE_CLASS = 'available'
    const UNAVAILABLE_CLASS = 'unavailable'

    const MIN_AGE_STYLE = ['textDecoration','line-through'];

    const MIN_AGE = 18

    for (let i = 0; i < table.tBodies[0].childNodes.length; i++) {

        let trNode = table.tBodies[0].childNodes[i]

        if(trNode.nodeType !== 1){
            continue
        }

        let hasAttributeAvailable = false

        for(let ii = 0; ii < trNode.childNodes.length; ii++){

            let tdNode = trNode.childNodes[ii]

            if(tdNode.nodeType !== 1){
                continue
            }

            hasAttributeAvailable = tdNode.hasAttribute('data-available')

            if(hasAttributeAvailable){
                trNode.classList.add((tdNode.getAttribute('data-available') === 'true' ) ? AVAILABLE_CLASS : UNAVAILABLE_CLASS)
            }

            if(ii == NUMBER_COLUMN_GENDER){
                if(tdNode.textContent == MALE_VALUE){
                    trNode.classList.add(MALE_CLASS)
                }

                if(tdNode.textContent == FEMALE_VALUE){
                    trNode.classList.add(FEMALE_CLASS)
                }
            }

            if(ii == NUMBER_COLUMN_AGE){
                let age = parseInt(tdNode.textContent)

                if(age < MIN_AGE){
                    trNode.style[MIN_AGE_STYLE[0]] = MIN_AGE_STYLE[1]
                }
            }
        }

        if(!hasAttributeAvailable){
            trNode.setAttribute("hidden",true)
        }
    }
}

