(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
const checkF = require('./check');

$(document).ready(checkF.init);

},{"./check":2}],2:[function(require,module,exports){
const check = {
    init() {
        console.log('Hola bundle!!');
        $('#todo-form').submit(check.addTodo);
    },
    addTodo(event) {
        event.preventDefault();
        const { value: todo } = document.getElementById('todo');

        let todoId = `todo-${check.counter + 1}`;

        const $todoContainer = $('<div />').addClass('col s12 m6 todo');
        const $todoCard = $('<div />').addClass('card-panel');
        const $todoCheckbox = $('<input type="checkbox" />').attr('id', todoId);
        const $todoText = $('<label />').attr('for', todoId).text(todo);

        $todoCard.append($todoCheckbox);
        $todoCard.append($todoText);
        $todoContainer.append($todoCard);

        $('#todos').append($todoContainer);

        check.counter = check.counter + 1;
    },
    counter: 0
};

module.exports = check;

},{}]},{},[1]);
