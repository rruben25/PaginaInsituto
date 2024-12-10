
import { IoIosContact } from "react-icons/io";
import {FaHome} from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
// import Defensa from "./Defensa";
function Nav() {
  return (
    <nav>
        <a href="#"><FaHome/>Inicio</a> - 
        <a href="#"><FaNewspaper/>Noticias</a> - 
        <a href="#"><IoIosContact />Contacto</a> -
        <a href="#">Defensa</a> - 
    </nav>
  )
}

export default Nav