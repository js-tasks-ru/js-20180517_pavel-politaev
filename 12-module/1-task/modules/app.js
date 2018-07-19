import Input from './input'

(function () {
    'use strict';

    window.app = {};

    window.addEventListener('DOMContentLoaded', function () {
       window.app.input = new Input();
    });

})();
