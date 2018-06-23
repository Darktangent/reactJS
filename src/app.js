
console.log('App.js is running')


//JSX Javascript XML
const app={
    title:'Indecision APP',
    subtitle : 'Put your life in the hands of my App',
    options : ['One',"Two"]
}

const onFormSubmit=(e)=>{
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option)
        e.target.elements.option.value = ''
        rederFunction();
    }
}
const onRemoveAll = ()=>{

    app.options = []
    rederFunction()
}
const appRoute= document.getElementById('app')


const rederFunction= ()=>{
    const template = (
        <div>
            <h1>App Name: {app.title.toLocaleUpperCase()}</h1>
           {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length>0) ? 'Here are the options':'No options'}</p>
           <p>{app.options.length}</p>
           <button onClick={onRemoveAll}>Remove all</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
    
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name='option' />
            <button>Add Option</button>
            
            
            
            </form>
        </div>
    );
    ReactDOM.render(template,appRoute)
}
rederFunction();