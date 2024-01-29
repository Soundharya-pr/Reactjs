import { useRef, useState,useEffect } from "react"
const Reference = ()=>
{
const[batchSize,updateBatchSize] = useState(0)
const prevBatch = useRef("")
useEffect(()=>{
    prevBatch.current=batchSize
},[batchSize])
return(
    <div>
    <h2>Reference</h2>
    <input type="text" onChange={(event) => {updateBatchSize(event.target.value)}}/>
    <h3>The text typed is {batchSize} and its previous text is {prevBatch.current}</h3>
    </div>
    
)
}
export default Reference;