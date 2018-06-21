'use strict';

console.log('App.js is running');

//JSX Javascript XML
var app = {
    title: 'Indecision APP',
    subtitle: 'Put your life in the hands of my App'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'App Name: ',
        app.title.toLocaleUpperCase()
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
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
    )
);
var user = {
    name: 'Rohan',
    age: 27,
    location: 'Texas'

};
var userName = 'Ron Ganguly';
var userAge = 34;
var userLocation = 'Texas';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        'Age:',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

// var template = React.createElement(
//     "p",
//     { id: "someid" },
//     "This is JSX from app.js"
// );
var appRoute = document.getElementById('app');
ReactDOM.render(template, appRoute);
