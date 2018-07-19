(function () {

    class Tooltip {

        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Обязательный отступ
         */
        get indent() {
            return 5;
        }

        constructor() {
            /**
             * Данное свойство содержит ссылку на
             * елемент содержащий подсказку
             * @type {HTMLDivElement}
             */
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';

            this.el.classList.add(this.name);
            document.body.appendChild(this.el);


            // !!! Хорошая ли это практика?
            this.handleMouseover = this._handleMouseover.bind(this)
            this.handleMouseout = this._handleMouseout.bind(this)
        }

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */
        attach(root) {

            /**
             * !!! Хорошая ли это практика?
             *     В метода attach уставливать root, может быть root
             *     нужно устанавливать в конструкторе?
             *
             * @type {Element}
             */
            this.root = root


            root.addEventListener( "mouseover" ,this.handleMouseover);
            root.addEventListener( "mouseout" ,this.handleMouseout)
        }
        _handleMouseover(e){
            let target = e.target;

            let tooltip = target.getAttribute('data-tooltip')

            if (!tooltip) {
                return
            }

            let clientHeight = document.documentElement.clientHeight
            let coordinates = target.getBoundingClientRect()
            let left = coordinates.left
            let top = coordinates.bottom + this.indent

            if (clientHeight < target.offsetHeight + this.indent + coordinates.bottom) {
                top = coordinates.top - target.offsetHeight - this.indent * 2
            }

            this.el.style.left = left + 'px'
            this.el.style.top = top + 'px'
            this.el.innerHTML = tooltip
            this.el.classList.add('tooltip_active')
        }
        _handleMouseout(e){
            let target = e.target;

            let tooltip = target.getAttribute('data-tooltip')
            if (!tooltip) {
                return
            }

            this.el.classList.remove('tooltip_active')
        }

        /**
         * Удаляет все обработчики событий
         */
        detach() {
            this.root.removeEventListener( "mouseover", this.handleMouseover);
            this.root.removeEventListener( "mouseout", this.handleMouseout);
        }
    }

    window.Tooltip = Tooltip;
})();