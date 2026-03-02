import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer py-3">
      <div className="d-flex justify-content-evenly">
        <div className="py-3">
          <NavLink to="/">
            <img
              src={Logo}
              alt=""
              height="55px"
              className="mx-2 me-3 rounded-pill logo"
            />
          </NavLink>
          <h5 className="mt-2">About Us</h5>
          <p className="footer-about">
            HeritageLens explores India’s cultural heritage through art,
            architecture, festivals, and handicrafts in a modern digital space.
          </p>
        </div>
        <div className="py-3">
          <h5>Links</h5>
          <div className="footer-page">
            <NavLink to="/" className="page-link">
              Home
            </NavLink>
            <NavLink to="/art-culture" className="page-link">
              Art & Culture
            </NavLink>
            <NavLink to="/architecture" className="page-link">
              Architecture
            </NavLink>
            <NavLink to="/festival" className="page-link">
              Festival
            </NavLink>
            <NavLink to="/handicraft" className="page-link">
              Handicrafts
            </NavLink>
            <NavLink to="/about" className="page-link">
              About
            </NavLink>
            <NavLink to="/contact" className="page-link">
              Contact
            </NavLink>
          </div>
        </div>
        <div>
          <div>
            <h5 className="text-center py-3">Quick Links</h5>
            <div className="d-flex justify-content-evenly gap-4">
              <FaInstagramSquare className="insta footer-icon fs-3" />
              <FaYoutube className="youtube footer-icon fs-3" />
              <FaFacebookF className="facebook-icon footer-icon fs-4" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">© 2026 HeritageLens. All rights reserved.</p>
    </div>
  );
}

export default Footer;
