import Carousel from "react-bootstrap/Carousel";
import Image1 from "../assets/image1.png"
import ArtImg from "../assets/imgArt.png"
import ArchImg from "../assets/imgArchi.png"
import FesImg from "../assets/imgFes.png"
import HandiImg from "../assets/imgHandi.png"



function CarouselSection(){
    return(
        <div className="container carousel-section mb-5">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ArtImg}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ArchImg}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={FesImg}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={HandiImg}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="text-center m-3">
        <h1>Welcome to HeritageLens</h1>
        <p className="fs-5">HeritageLens is a gateway to exploring the rich tapestry of India's cultural heritage, showcasing art, 
          architecture,<br />festivals, and handicrafts. Discover timeless traditions, stories, and artistry curated for 
          easy <br /> exploration.
        </p>
        </div>
      </div>
    )
}

export default CarouselSection