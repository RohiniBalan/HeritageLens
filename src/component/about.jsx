import Card from "react-bootstrap/Card";
import NavBarSection from "./navbar";
import AboutImg from "../assets/image1.png"
import Footer from "./footer";

function About() {
  return (
    <div>
      <NavBarSection />
      <div className="container text-center">
        <Card>
          <Card.Img variant="top" src={AboutImg} className="about-img"/>
        </Card>
        <div className="slogan about-content mt-3">
          <h1>About Us</h1>
          <h6>"Exploring India's Heritage Through a Cultural Lens"</h6>
          <div className="text-start about mt-5">
            <h3>Our Story</h3>
            <p>HeritageLens was created with a passion for preserving and celecrating India's rich cultural legacy. 
                From ancient art forms to magnificent architectural wonders, India's heritage tells stories of tradition, creativity,
                and unity. This platform brings together art & culture, architecture, festivals, and handicrafts in one place, allowing
                users to explore cultural knowledge in a visual and engaging way. HeritageLens aims to make learning about heritage
                simple, meaningful, and accessible for everyone.
            </p>
            <div className="row d-flex justify-content-evenly about mt-3">
                <h3>Mission and Vision</h3>
                <div className="col-lg-5 col-md-12 about-container mt-2 px-3">
                    <h4>Our Mission</h4>
                    <p>To prevent India's cultural heritage in a structured and user-friendly digital platform, encouraging 
                        awareness, appreciation, and learning through modern web technologies.
                    </p>
                </div>
                <div className="col-lg-5 col-md-12 about-container mt-2 px-3">
                    <h4>Our Vision</h4>
                    <p>To become a trusted digital space for exploring Indian heritage, connecting tradition with technology, and 
                        inspiring future generations to value and preserve cultural history.
                    </p>
                </div>
            </div>
            <div className="mt-4">
                <h3>Why Choose HeritageLens?</h3>
                <ul>
                    <li>Authentic cultural information.</li>
                    <li>Visual stroytelling through images and descriptions.</li>
                    <li>Timeline-based architectural explorations.</li>
                    <li>Categorized art, festivals, and handicrafts.</li>
                    <li>Easy navigation with filters and search.</li>
                    <li>Light and Dark mode for better accessibility.</li>
                </ul>
            </div>
            <div className="mt-3">
                <h3>What You'll Discover</h3>
                <ul>
                    <li><b>Art & Culture : </b>Traditional paintings, dance forms, and folk arts.</li>
                    <li><b>Architecture : </b>Ancient, medieval, and modern monuments.</li>
                    <li><b>Festivals : </b>Cultural, religious, harvest, and regional celebrations.</li>
                    <li><b>Handicrafts : </b>Handmade creations by Indian artisans.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
