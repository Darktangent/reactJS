class IndecisionApp extends React.Component{
    render(){
        const title="Indecision Title"
        const subTitle= "Put your life in the hands of my app"
        const options = ['thing one', 'thing two', 'thing four']
        return (

            <div>
            <Header title={title} subTitle={subTitle} />
            <Action />
            <Options options = {options}/>
            <AddOption />
            
            
            </div>
        )
    }

}


class Header extends React.Component{

    render(){
       
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
            
            </div>


        )

    }

}
class Action extends React.Component {
render(){
    return (<div>
    <button>What Should I do?</button>
    
    </div>
    )
}

}

class Options extends React.Component{
    render(){
        return (
            <div>
            {this.props.options.length}
            {this.props.options.map((options)=> <OptionComponent key={options} optionText={options} />)}
            
            </div>

        )
    }

}
class OptionComponent extends React.Component{
    render(){
        return (
            <div>Option: {this.props.optionText}</div>

        )

    }


}
class AddOption extends React.Component{
    render(){
        return (
            <div>
            <p>AddOptions Component here</p>
            </div>

        )
    }

}

// const jsx = (

//     <div>
       
//         <Header/>
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
   

// )

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
// console.log('App.js is running')


// //JSX Javascript XML
// const app={
//     title:'Indecision APP',
//     subtitle : 'Put your life in the hands of my App',
//     options : ['One',"Two"]
// }

// const onFormSubmit=(e)=>{
//     e.preventDefault();

//     const option = e.target.elements.option.value;

//     if(option){
//         app.options.push(option)
//         e.target.elements.option.value = ''
//         rederFunction();
//     }
// }
// const onRemoveAll = ()=>{

//     app.options = []
//     rederFunction()
// }
// const appRoute= document.getElementById('app')


// const rederFunction= ()=>{
//     const template = (
//         <div>
//             <h1>App Name: {app.title.toLocaleUpperCase()}</h1>
//           {app.subtitle && <p>{app.subtitle}</p>}
//             <p>{(app.options.length>0) ? 'Here are the options':'No options'}</p>
//           <p>{app.options.length}</p>
//           <button onClick={onRemoveAll}>Remove all</button>
//             <ol>
//                 <li>Item one</li>
//                 <li>Item two</li>
    
//             </ol>
//             <form onSubmit={onFormSubmit}>
//             <input type="text" name='option' />
//             <button>Add Option</button>
            
            
            
//             </form>
//         </div>
//     );
//     ReactDOM.render(template,appRoute)
// }
// rederFunction();