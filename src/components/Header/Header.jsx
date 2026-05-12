import { Link } from "react-router-dom"
import { Nav } from "../Nav/Nav"
import "./Header.css"


export const Header = ()=>{
    
    return(<header>

        <div className="logo-container">
            <Link to={"/"}>
                <img src="./img/ChatGPT_Image_10_may_2026__22_08_20-removebg-preview.png"/>
                <span>Limpia Hogar</span>
            </Link>
        </div>
        <Nav></Nav>
    </header>)
}