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
      <div className="container py-5 px-5 detail">
        <div className="row justify-content-evenly align-items-center">
        <div className="me-3 col-lg-4">
        <img
          src={architecture.image}
          alt={architecture.name}
          className="img-fluid rounded mb-4"
        />
        </div>
        <div className="ms-4 col-lg-6">
        <h1 className="sub-title pb-3">{architecture.name}</h1>
        <p className="detail-text"><b className="h5">Period</b> : {architecture.period}</p>
        <p className="detail-text"><b className="h5">Category</b> : {architecture.category}</p>
        <p className="detail-text"><b className="h5">Location</b> : {architecture.location}</p>
        <p className="detail-text"><b className="h5">Region</b> : {architecture.region}</p>
        <p className="detail-text"><b className="h5">Built By :</b> {architecture.builtBy}</p>
        <p className="detail-text"><b className="h5">Built In :</b> {architecture.builtIn}</p>
        </div>
        </div>
        <div className="detail-down">
        <h4 className="section-title">Description</h4>
        <p className="detail-text">{architecture.description}</p>
        {architecture.historicalSignificance && renderSection("Historical Significance", architecture.historicalSignificance)}
        {architecture.architecturalFeatures && renderList("Architectural Features", architecture.architecturalFeatures)}
        </div>
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
      <p className="detail-text">{content}</p>
    </div>
  );
}

function renderList(title, items) {
  return (
    <div className="my-4">
      <h4 className="section-title">{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
