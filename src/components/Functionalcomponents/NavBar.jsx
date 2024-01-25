import "../../CSS/NavBar.css"
import {Link} from "react-router-dom"
const NavBar =()=>{
    return(
        <ol>
            <li><Link to ="/home">Home</Link></li>
            <li><Link to ="/About">About</Link></li>
            <li><Link to ="/Project">Project</Link></li>
            <li><Link to ="/Login">Login</Link></li>
        </ol>
    )
}
export default NavBar