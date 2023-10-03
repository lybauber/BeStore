import Navitem from "./Navitem";
import { NavLink } from "react-router-dom";
import '../App.css'

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg bg-body-secondary ">
            <div className="container-fluid ">
        
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="container text-center">
                <ul className="navbar-nav justify-content-evenly">
                <li className="nav-item">
                    <NavLink className="nav nav-link"  aria-current="page" to="/smartphones">
                         Smartphones
                    </NavLink>
                </li>
              
                <li className="nav-item">
                   
                   <NavLink className="nav nav-link" aria-current="page" to="/decoration">
                        Home-Decoration
                    </NavLink>
                </li>
                
                
                <li className="nav-item">
                    <Navitem name="Fragances" />
                </li>
                <li className="nav-item">
                    <Navitem name="Laptops" />
                </li>
                </ul>
                </div>
            </div>
            
            </div>
        
        </nav>

    
        
    )
}

export default Navbar;
