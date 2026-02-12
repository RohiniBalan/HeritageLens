import { MdDoubleArrow } from "react-icons/md";
import {useNavigate} from 'react-router-dom'


function Highlight() {
  const navigate = useNavigate()
  return (
    <>
      <h1 className="text-center my-5">Featured Highlights</h1>
      <div className="container my-5 highlight ">
        <div className="row align-items-center justify-content-evenly">
        <img
          src="https://i.pinimg.com/1200x/69/2f/e6/692fe6518686fca20d9c134cc9073445.jpg"
          alt=""
          width="450px" className="col-lg-4 col-md-6"
        />
        <MdDoubleArrow className="arrow-icon col-lg-1" />
        <div className="high-des col-lg-4 col-md-6">
          <h3>🏛️ Monument of the Week</h3>
          <h4>Lotus Temple, New Delhi</h4>
          <p>
            An architectural marvel known for its striking lotus-shaped design.
          </p>
          <button className="btn" onClick={()=> navigate(`/architecture/218`)}>Read More</button>
        </div>
      </div>
       </div>

       <div className="container my-5 highlight ">
        <div className="row align-items-center justify-content-evenly">
        <div className="high-des col-lg-4 col-md-6">
          <h3>🪔 Festival Spotlight</h3>
          <h4>Diwali - Festival of Lights</h4>
          <p>
            A vibrant celebrations of lights, joy, and togetherness.
          </p>
          <button className="btn" onClick={()=> navigate(`/festival/307`)}>Read More</button>
        </div>
        <MdDoubleArrow className="arrow-icon col-lg-1" />
        <img
          src="https://i.pinimg.com/736x/3d/90/db/3d90dbb4149550816d87fc9ae82b5a6c.jpg"
          alt=""
          width="450px" className="col-lg-4 col-md-6"
        />
      </div>
       </div>

       <div className="container my-5 highlight ">
        <div className="row align-items-center justify-content-evenly">
        <img
          src="https://storeassets.im-cdn.com/media-manager/channapatnatoysin/280eU8ASIK3BTw3yHkER_channapatna%20toys%20banner%2015_621x375_webp.jpg"
          alt=""
          width="450px" className="col-lg-4 col-md-6"
        />
        <MdDoubleArrow className="arrow-icon col-lg-1" />
        <div className="high-des col-lg-4 col-md-6">
          <h3>🧵 Craft of the Month</h3>
          <h4>Channapatna Toys, Karnataka</h4>
          <p>
            Colorful wooden toys crafted using traditional techniques.
          </p>
          <button className="btn" onClick={()=> navigate(`/handicraft/417`)}>Read More</button>
        </div>
      </div>
       </div>
    </>
  );
}

export default Highlight;
