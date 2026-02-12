import { NavLink } from "react-router-dom";

function Cta(){
  return(
    <div className="cta my-5 text-center">
    <h1>Start Exploring India's Heritage</h1>
      <p>Explore art, architecture, festivals, and handicrafts that reflect India's
      rich and diverse heritage.
      </p>
      <div className="row justify-content-evenly">
      <div className="col-md-12>
      <NavLink to="/architecture"><button className="btn my-3">Explore heritage</button></NavLink>
      </div>
    <div className="col-md-12>
      <NavLink to="/architecture"><button className="btn my-3">View Timeline</button></NavLink>
      </div>
      </div>
    </div>
  )
}

export default Cta;
