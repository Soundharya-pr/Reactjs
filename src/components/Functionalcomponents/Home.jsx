// const Home = () =>{
//     return(
//         <>
//             <h3>This Home Page </h3>
//         </>
//     )

// }
// export default Home


import { useReducer } from "react"
const value ={count:0}
function countFunction(state,action){
    switch(action.type){
        case 'sub':{
            return {count:state.count -1}}
        case 'add':{
            return{count:state.count +1}
        }
        case 'reset':{
            return{count:value.count }}
        default:{
            return {count:value.count}
        }

    }

}
const Home =()=>{
    const [countVal,updateCount]=useReducer(countFunction,value)
   return( <div>
        <h1>
            This is useReducer example
        </h1>
        <h2>Count:{countVal.count} </h2>
        <button onClick={()=>updateCount({type:"sub"})}>Subtract</button>
        <button onClick={()=>updateCount({type:"add"})}>
            Add
        </button>

        <button onClick={()=>updateCount({type:"reset"})}>Reset</button>
    </div>);
};
export default Home