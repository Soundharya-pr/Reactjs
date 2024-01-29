import "../../CSS/NavBar.css"
import {Link} from "react-router-dom"
const NavBar =()=>{
    return(
        <ol class="bar">
            <li><Link to ="/home"><b>Home</b></Link></li>
            <li><Link to ="/About"><b>About</b></Link></li>
            <li><Link to ="/Project"><b>Project</b></Link></li>
            <li><Link to ="/Login"><b>Login</b></Link></li>
            <li><Link to ="/Reference"><b>Reference</b></Link></li>
            <li><Link to ="/Map"><b>Map</b></Link></li>
        </ol>
    )
}
export default NavBar