(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
     *
     * Пример одного элемента, описывающего строку таблицы
     *
     *      {
     *          id: 1
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
     *
     * @constructor
     */
    class ClearedTable {

        constructor(data) {
            this.el = document.createElement('table');
            this.items = data;
            this.tbody = null
            this.columns = [
                'id',
                'name',
                'age',
                'salary',
                'city',
            ]

            document.onclick = (event) => {
                let target = event.target;

                let id = target.getAttribute('data-id');
                if (!id) return;

                this.removeItem(id)

                return false;
            };

            this._render()
        }

        /**
         * Метод который вызывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {
            console.log(id)
        }

        removeItem(index){
            let removedItem = this.items.splice(parseInt(index), 1);
            this._renderTbody()
            this.onRemoved(parseInt(removedItem[0]['id']))
        }
        _getLinkElem(dataId) {
            let linkForDelete = document.createElement('a')
            linkForDelete.setAttribute('data-id', dataId)
            linkForDelete.setAttribute('href', '#')
            linkForDelete.innerHTML = 'X'

            return linkForDelete
        }
        _renderThead() {

            let thead = document.createElement('thead')
            let tr = document.createElement('tr')

            for (let columnIndex = 0; columnIndex < this.columns.length; columnIndex++) {
                let td = document.createElement('td')
                let text = document.createTextNode(`${this.columns[columnIndex]}`)

                td.appendChild(text)
                tr.appendChild(td)
            }

            let td = document.createElement('td')
            let text = document.createTextNode('Действие')

            td.appendChild(text)
            tr.appendChild(td)

            thead.appendChild(tr)
            this.el.appendChild(thead)
        };

        _renderTbody() {
            let items = this.items
            let tbody = document.createElement('tbody')

            for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
                let tr = document.createElement('tr')

                for (let columnIndex = 0; columnIndex < this.columns.length; columnIndex++) {
                    let td = document.createElement('td')
                    let text = document.createTextNode(`${items[itemIndex][this.columns[columnIndex]]}`)

                    td.appendChild(text)
                    tr.appendChild(td)
                }

                let linkElem = this._getLinkElem(itemIndex)
                let td = document.createElement('td')

                td.appendChild(linkElem)
                tr.appendChild(td)

                tbody.appendChild(tr)
            }

            if (this.tbody) {
                this.el.replaceChild(tbody, this.tbody)
            } else {
                this.el.appendChild(tbody)
            }

            this.tbody = (items.length) ? tbody : null

            console.log(tbody)
        };
        _render() {
            this._renderThead()
            this._renderTbody()
        }
    }

    window.ClearedTable = ClearedTable;
})();
