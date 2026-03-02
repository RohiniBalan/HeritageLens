import { NavLink } from "react-router-dom";

function Cta() {
  return (
    <div className="cta mt-4 mb-5 text-center">
      <h1 className="sub-title pb-2">Start Exploring India's Heritage</h1>
      <p>
        "Explore art, architecture, festivals, and handicrafts that reflect
        India's rich and diverse heritage."
      </p>
      <div className="row justify-content-evenly pt-2">
          <button className="btn my-3 btn1 col-lg-6 col-md-12" onClick={() =>
              document
                .getElementById("category-section")
                .scrollIntoView({ behavior: "smooth" })
            }>Explore heritage</button>

        <NavLink to="/architecture" className="col-lg-6 col-md-12">
          <button
            className="btn my-3 btn2" > View Timeline</button>
        </NavLink> 
      </div>
    </div>
  );
}

export default Cta;
