'use strict';

console.log('App.js is running');

//JSX Javascript XML
var app = {
    title: 'Indecision APP',
    subtitle: 'Put your life in the hands of my App',
    options: ['One', "Two"]
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        rederFunction();
    }
};
var onRemoveAll = function onRemoveAll() {

    app.options = [];
    rederFunction();
};
var appRoute = document.getElementById('app');

var rederFunction = function rederFunction() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'App Name: ',
            app.title.toLocaleUpperCase()
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are the options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'Item two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoute);
};
rederFunction();
