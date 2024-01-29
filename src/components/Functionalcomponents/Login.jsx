// const Login = () =>{
//     return(
//         <>
//             <h3>Login using Username and Password </h3>
//         </>
//     )

// }
// export default Login


import "../../CSS/Login.css"
const Login = ()=>{
    return(
        <>
           <form class ="log">
            <label>Username</label><br></br>
            <input type ="text"></input><br />
            <label>Password</label><br></br>
            <input type ="password" ></input> <br></br><br></br>
            <input type="submit"></input>                           
            </form>
        </>
    )
}
export default Login