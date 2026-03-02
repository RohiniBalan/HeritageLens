import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import NavBarSection from "./navbar";
import Footer from "./footer";

function Contact(){
  return(
    <div>
      <NavBarSection/>
      <div className="container my-4 contact-container">
        <div className=" text-center title">
      <h1>Connect with HeritageLens</h1>
      <p className="slogan">"Follow us to explore and celebrate India's rich cultural heritage"</p>
      <p>Join our community to stay updailed with vibrant stories, visuals, and insights
        about India's heritage.
      </p>
        </div>
      <h3 className="text-center py-3">Follow Us On</h3>
      <div className="row justify-content-evenly pt-2">
        <div className="col-lg-3 colg-md-12 text-center contact-box">
          <FaInstagramSquare className="contact-icon insta"/>
          <h4>Instagram</h4>
          <p>Visual stories and cultural highlights</p>
        </div>
        <div className="col-lg-3 colg-md-12 text-center contact-box">
          <FaYoutube className="contact-icon youtube"/>
          <h4>YouTube</h4>
          <p>Heritage videos and documentaries</p>
        </div>
        <div className="col-lg-3 colg-md-12 text-center contact-box">
          <FaFacebookF className="contact-icon facebook"/>
          <h4>Facebook</h4>
          <p>Community updates and discussions</p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;
