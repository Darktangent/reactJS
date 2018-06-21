
console.log('App.js is running')


//JSX Javascript XML
var app={
    title:'Indecision APP',
    subtitle : 'Put your life in the hands of my App'
}
var template = (
    <div>
        <h1>App Name: {app.title.toLocaleUpperCase()}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>

        </ol>
    </div>
);
var user ={
    name :'Rohan',
    age:27,
    location:'Texas'

}
let userName = 'Ron Ganguly'
let userAge = 34
 let userLocation = 'Texas'
let templateTwo=(
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age:{user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);


// var template = React.createElement(
//     "p",
//     { id: "someid" },
//     "This is JSX from app.js"
// );
var appRoute= document.getElementById('app')
ReactDOM.render(template, appRoute);