import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import NavBarSection from "./navbar";
import Footer from "./footer";


function ArchitectureDetail(){
    const {id} = useParams();
    const archData = useSelector((state) => state.architectures);
    const architecture = archData.find((item) => item.id === Number(id));
    if(!architecture){
        return <h2 className="text-center mt-5">Architecture not found</h2>
    }
    return(
        <div>
      <NavBarSection />
      <div className="container my-5 p-5 detail">
        <div className="d-flex ">
        <div className="me-3">
        <img
          src={architecture.image}
          alt={architecture.name} width="550px"
          className="img-fluid rounded mb-4"
        />
        </div>
        <div className="ms-4">
        <h1 className="architecture-title">{architecture.name}</h1>
        <p><b>Period</b> : {architecture.period}</p>
        <p><b>Category</b> : {architecture.category}</p>
        <p><b>Location</b> : {architecture.location}</p>
        <p><b>Region</b> : {architecture.region}</p>
        <p><b>Built By :</b> {architecture.builtBy}</p>
        <p><b>Built In :</b> {architecture.builtIn}</p>

        </div>
        </div>
        <p><b>Description:</b> <br />{architecture.description}</p>
        {architecture.historicalSignificance && renderSection("Historical Significance", architecture.historicalSignificance)}
        {architecture.architecturalFeatures && renderList("Architectural Features", architecture.architecturalFeatures)}
      </div>
      <Footer/>
    </div>
    )
}

export default ArchitectureDetail


function renderSection(title, content) {
  return (
    <div className="my-4">
      <h4 className="section-title">{title}</h4>
      <p>{content}</p>
    </div>
  );
}

function renderList(title, items) {
  return (
    <div className="my-4">
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
