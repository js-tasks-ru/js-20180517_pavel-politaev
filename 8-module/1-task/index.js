'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavods'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');

    this.columns = [
        'name',
        'age',
        'salary',
        'city'
    ]

    this.data = items

    this.itemsArr = []

    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {

        this._sortItemsArr(column, desc)
        this.el = document.createElement('table')
        this._render()
    };

    this._sortItemsArr = function (column, desc = false) {
        this.itemsArr.sort(function(a, b) {
            return (desc) ? a[column] < b[column] : a[column] > b[column];
        });
    }

    this._setItemsArray = function () {
        for (let i = 0; i < this.data.length; i++) {

            let item = []

            for (let ii = 0; ii < this.columns.length; ii++) {
                item.push(this.data[i][this.columns[ii]])
            }

            this.itemsArr.push(item)
        }
    }

    this._render = function () {

        console.log(this.el)

        let items = this.itemsArr
        let thead = document.createElement('thead')
        let tr = document.createElement('tr')

        for (let i = 0; i < this.columns.length; i++) {
            let td = document.createElement('td')
            let text = document.createTextNode(`${this.columns[i]}`)

            td.appendChild(text)
            tr.appendChild(td)
        }

        thead.appendChild(tr)
        this.el.appendChild(thead)

        let tbody = document.createElement('tbody')

        for (let i = 0; i < items.length; i++) {
            let tr = document.createElement('tr')

            for (let ii = 0; ii < this.columns.length; ii++) {
                let td = document.createElement('td')
                let text = document.createTextNode(`${items[i][this.columns.indexOf(this.columns[ii])]}`)

                td.appendChild(text)
                tr.appendChild(td)
            }

            tbody.appendChild(tr)
        }

        this.el.appendChild(tbody)
    }

    this._setItemsArray()
    this._render()
}

