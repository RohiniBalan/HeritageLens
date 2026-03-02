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
      <div className="container py-5 px-5 detail">
        <div className="row justify-content-evenly align-items-center">
        <div className="me-3 col-lg-4">
        <img
          src={festival.image}
          alt={festival.name}
          className="img-fluid rounded mb-4"
        />
        </div>
        <div className="ms-4 col-lg-6">
        <h1 className="sub-title pb-3">{festival.name}</h1>
        <p className="detail-text"><b className="h5">Category</b> : {festival.category}</p>
        <p className="detail-text"><b className="h5">Religion</b> : {festival.religion}</p>
        <p className="detail-text"><b className="h5">State</b> : {festival.state}</p>
        <p className="detail-text"><b className="h5">Month :</b> {festival.month}</p>
        </div>
        </div>
        <div className="detail-down">
        <h4 className="section-title">Description</h4>
        <p className="detail-text">{festival.description}</p>
        {festival.significance && renderSection("Significance", festival.significance)}
        {festival.rituals && renderSection("Rituals", festival.rituals)}
        {festival.highlights && renderSection("HighLights", festival.highlights)}
        {festival.traditionalFood && renderSection("Traditional Foods", festival.traditionalFood)}
        {festival.attire && renderSection("Attire", festival.attire)}
        </div>
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
