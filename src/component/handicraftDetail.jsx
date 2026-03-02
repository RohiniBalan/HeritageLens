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
      <div className="container py-5 px-5 detail">
        <div className="row justify-content-evenly align-items-center">
        <div className="me-3 col-lg-4">
        <img
          src={handicraft.image}
          alt={handicraft.name}
          className="img-fluid rounded mb-4"
        />
        </div>
        <div className="ms-4 col-lg-6">
        <h1 className="sub-title pb-3">{handicraft.name}</h1>
        <p className="detail-text"><b className="h5">Category</b> : {handicraft.category}</p>
        <p className="detail-text"><b className="h5">State</b> : {handicraft.state}</p>
        <p className="detail-text"><b className="h5">Origin Type</b> : {handicraft.originType}</p>
        <p className="detail-text"><b className="h5">Historical Period</b> : {handicraft.historicalPeriod}</p>
        <p className="detail-text"><b className="h5">GI Status</b> : {handicraft.giStatus}</p>
        <p className="detail-text"><b className="h5">Craft Type</b> : {handicraft.craftType}</p>
        </div>
        </div>
        <div className="detail-down">
          <h4 className="section-title">Description</h4>
          <p className="detail-text">{handicraft.description}</p>
        {handicraft.significance && renderSection("Significance", handicraft.significance)}
        {handicraft.materials && renderList("Material", handicraft.materials)}
        {handicraft.techniques && renderSection("Techniques", handicraft.techniques)}
        {handicraft.usage && renderSection("Usage", handicraft.usage)}
        {handicraft.attire && renderSection("Attire", handicraft.attire)}
</div>


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