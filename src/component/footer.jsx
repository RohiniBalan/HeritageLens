import { NavLink } from "react-router-dom"
import Logo from "../assets/logo.png";

function Footer(){

    return(
        <div className="footer d-flex justify-content-evenly py-3">
            <div>
                <NavLink to="/"><img src={Logo} alt="" height="60px" className='mx-2 me-3 rounded-pill logo' /></NavLink>
                <h6>About Us</h6>
                <p>naoepe</p>
            </div>
            <div className="footer-page">
                <NavLink to="/" className="page-link">Home</NavLink>
                <NavLink to="/art-culture" className="page-link">Art & Culture</NavLink>
                <NavLink to="/architecture" className="page-link">Architecture</NavLink>
                <NavLink to="/festival" className="page-link">Festival</NavLink>
                <NavLink to="/handicraft" className="page-link">Handicrafts</NavLink>
                <NavLink to="/about" className="page-link">About</NavLink>
            </div>
        </div>
    )
}

export default Footer
