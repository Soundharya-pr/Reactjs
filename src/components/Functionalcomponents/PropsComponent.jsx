import React from "react"
import "../../CSS/styling.css"
function PropsComponent(props){
 
    return(
        <div>
        <h3>Hello, <b>{props.name}</b><br></br> This is {props.course} class</h3>
        </div>
    )
}
export default PropsComponent