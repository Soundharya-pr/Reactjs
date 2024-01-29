import { useState} from "react";
import { useEffect } from "react";
const Project = () =>{
    const [tabName,setTabName] = useState("")
    const updateTablet =()=>{
        setTabName("You have been cured")
    }
    const updateDisease =()=>{
        setTabName("You have COLD")
    }
    const updateDoctor =()=>{
        setTabName("Call @ 123456789 to book appointment")
    }
    useEffect(()=>{
        console.log("Side effects are --> Drowsiness,Kidney Failure")
    },[tabName])
    return(
        <>
            <h3>{tabName} </h3>
            <button onClick={updateTablet}>Click if you have visited the hospital</button>
            <button onClick={updateDisease}>Click to check the disease</button>
            <button onClick={updateDoctor}>Call a doctor</button>
        </>
    )

}
export default Project