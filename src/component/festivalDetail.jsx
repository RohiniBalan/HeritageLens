import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import NavBarSection from "./navbar";
import Footer from "./footer";


function FestivalDetail(){
    const {id} = useParams();
    const fesData = useSelector((state) => state.festivals);
    const festival = fesData.find((item) => item.id === Number(id));
    if(!festival){
        return <h2 className="text-center mt-5">Festival not found</h2>
    }
    return(
        <div>
      <NavBarSection />
      <div className="container my-5 p-5 detail detail-fes">
        <div className="d-flex ">
        <div className="me-3">
        <img
          src={festival.image}
          alt={festival.name}
          className="img-fluid rounded mb-4"
        />
        </div>
        <div className="ms-4">
        <h1 className="festival-title">{festival.name}</h1>
        <p><b>Category</b> : {festival.category}</p>
        <p><b>Religion</b> : {festival.religion}</p>
        <p><b>State</b> : {festival.state}</p>
        <p><b>Month :</b> {festival.month}</p>
        <p><b>Description:</b> <br />{festival.shortDescription}</p>
        </div>
        </div>
        
        {festival.significance && renderSection("Significance", festival.significance)}
        {festival.rituals && renderSection("Rituals", festival.rituals)}
        {festival.highlights && renderSection("HighLights", festival.highlights)}
        {festival.traditionalFood && renderSection("Traditional Foods", festival.traditionalFood)}
        {festival.attire && renderSection("Attire", festival.attire)}



      </div>
      <Footer/>
    </div>
    )
}

export default FestivalDetail


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
