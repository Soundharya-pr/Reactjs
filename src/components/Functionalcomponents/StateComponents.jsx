import React from "react";
class StateComponent extends React.Component{
    constructor(){ //kind of function 
        super()
            this.state ={
                name:"Soundharya",
                course: "MERN"

            }
    }
    ChangeState =()=>{
        console.log("Kongu Engineering College")
    }
    render(){
        return(
            <div>
                <h1>Now , You are learning about State Components</h1>
                <h2>Hello, {this.state.name}<br></br>This is {this.state.course} class </h2>
                <h2>I am changing the state of {this.state.name} to {this.ChangeState()}</h2>
                <button onMouseOver={this.ChangeState}>Click me to change state</button>
            </div>
        )
        }
    
} 
export default StateComponent;    