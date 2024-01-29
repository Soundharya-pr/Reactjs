import { useState} from "react";
const About = () =>{
    const [college,updateCollege] = useState("KEC")
    const updatingClg =()=>{
        updateCollege("Kongu Engineering College")
    }
    return(
        <>
            <h3> Welcome to {college}</h3>
            <button onDoubleClick={(updatingClg)}>Update</button>
        </>
    )

}
export default About