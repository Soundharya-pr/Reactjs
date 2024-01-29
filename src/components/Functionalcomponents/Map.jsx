const Map=()=>{
    const array=["Puvitha"]
    const array1=[...array,"Ramanan","Mukund","Soundharya"]
    return(
        <div>
    <ul type="None">
                {array1.map((val,index)=>(
                <li key={index}>{val}</li>
                ))}
            
            </ul>
        </div>
    )
}
export default Map;