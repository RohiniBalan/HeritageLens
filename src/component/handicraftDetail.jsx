import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBarSection from "./navbar";
import Footer from "./footer";

function HandicraftDetail(){
    const {id} = useParams()
    const handiData = useSelector((state)=> state.handicrafts);
    const handicraft = handiData.find((item) => item.id === Number(id));

    if(!handicraft){
        <h2 className="text-center mt-4">Handicraft not found</h2>
    }
    return(
         <div>
      <NavBarSection />
      <div className="container my-5 p-5 detail detail-fes">
        <div className="d-flex ">
        <div className="me-3">
        <img
          src={handicraft.image}
          alt={handicraft.name}
          className="img-fluid rounded mb-4"
        />
        </div>
        <div className="ms-4">
        <h1 className="handicraft-title">{handicraft.name}</h1>
        <p><b>Category</b> : {handicraft.category}</p>
        <p><b>State</b> : {handicraft.state}</p>
        <p><b>Description:</b> <br />{handicraft.shortDescription}</p>
        </div>
        </div>
        
        {handicraft.significance && renderSection("Significance", handicraft.significance)}
        {handicraft.materials && renderList("Material", handicraft.materials)}
        {handicraft.techniques && renderSection("Techniques", handicraft.techniques)}
        {handicraft.usage && renderSection("Usage", handicraft.usage)}
        {handicraft.attire && renderSection("Attire", handicraft.attire)}



      </div>
      <Footer/>
    </div>
    )
}

export default HandicraftDetail

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