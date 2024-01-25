import React from "react";
// import "../../CSS/styling.css"
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
                <h3>Now , You are learning about State Components</h3>
                <h3>Hello, {this.state.name}<br></br>This is {this.state.course} class </h3>
                <h4>I am changing the state of {this.state.name} to {this.ChangeState()}</h4>
                <button onMouseOver={this.ChangeState}>Click me to change state</button>
            </div>
        )
        }
    
} 
export default StateComponent;    