class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne=this.handleAddOne.bind(this)
        this.handleMinusOne=this.handleMinusOne.bind(this)
        this.handleReset=this.handleReset.bind(this)
        this.state= {
            count : 0,
            
        }
    }
    handleAddOne(){

       this.setState((prevState)=>{
           return {
               count:prevState.count+1
           }
       })
    }
    handleMinusOne(){

        this.setState((prev)=>{
            return {
                count : prev.count-1
            }
        })
    }
    handleReset(){
        this.setState(()=>{
            return {
                count:0
            }
        })
    }


    render(){

        return (
            <div>
                
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            
            </div>


        )






    }



}




ReactDOM.render(<Counter />, document.getElementById('app'))
















// const user ={
//     name :'Robin',
//     age:90,
//     location:'Texas'

// };
// function getLocation(location){
//     if (location){
//         return <p>Location: {location}</p>;
//     }else {

//         return undefined
//     }
// }
// // let userName = 'Ron Ganguly'
// // let userAge = 34
// //  let userLocation = 'Texas'
// let count =0
// const addOne=()=>{
//     count++;
//     renderCounterApp();

// }
// const minusOne=()=>{
//     count--
//     renderCounterApp()

// }
// const reset=()=>{
//     count=0
//     renderCounterApp()
// }




// // var template = React.createElement(
// //     "p",
// //     { id: "someid" },
// //     "This is JSX from app.js"
// // );
// const appRoute= document.getElementById('app')


// const renderCounterApp=()=>{

//     const templateTwo=(
//         // <div>
//         //     <h1>{user.name ? user.name : 'Anonymous'}</h1>
    
//         //   {(user.age && user.age>=18) &&   <p>Age:{user.age}</p>}
            
//         //     {getLocation(user.location)}
//         // </div>
//         <div>
//             <h1>Count: {count}</h1>
        
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoute);
// }
// renderCounterApp();