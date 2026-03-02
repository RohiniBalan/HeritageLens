import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBarSection from "./navbar";
import Footer from "./footer";

function ArtDetail() {
  const { id } = useParams();
  const artData = useSelector((state) => state.arts);

  const art = artData.find((item) => item.id === Number(id));

  if (!art) {
    return <h2 className="text-center mt-5">Art not found</h2>;
  }

  return (
    <div>
      <NavBarSection />
      <div className="container py-5 px-5 detail">
        <div className="row justify-content-evenly align-items-center">
        <div className="me-3 col-lg-4">
        <img
          src={art.image}
          alt={art.name} 
          className="img-fluid rounded mb-4"
        />
        </div>
        <div className="ms-4 col-lg-6">
        <h1 className="sub-title pb-3">{art.name}</h1>
        <p className="detail-text"><b className="h5">Category</b> : {art.category}</p>
        <p className="detail-text"><b className="h5">State</b> : {art.state}</p>
        <p className="detail-text"><b className="h5">Period</b> : {art.period}</p>
        <p className="detail-text"><b className="h5">Type</b> : {art.type}</p>
        <p className="detail-text"><b className="h5">Origin</b> : {art.origin}</p>
        </div>
        </div>
        
        <div className="detail-down">
          <h4 className="section-title">Description</h4>
          <p className="detail-text">{art.description}</p>
        {art.keyFeatures && renderList("Key Features", art.keyFeatures)}
        {art.materialsUsed && renderList("Materials Used", art.materialsUsed)}
        {art.instruments && renderList("Instruments", art.instruments)}
        {art.performanceStyle &&
          renderSection("Performance Style", art.performanceStyle)}
        {art.themes && renderList("Themes", art.themes)}
        {art.culturalSignificance &&
          renderSection("Cultural Significance", art.culturalSignificance)}
        {art.modernPresence &&
          renderSection("Modern Presence", art.modernPresence)}
        </div>
      </div>
      <Footer/>
    </div>

  );
}

export default ArtDetail;

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
      <h4  className="section-title">{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
