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
      <div className="container my-5 p-5 detail">
        <div className="d-flex ">
        <div className="me-3">
        <img
          src={art.image}
          alt={art.name} width="750px"
          className="img-fluid rounded mb-4"
        />
        </div>
        <div className="ms-4">
        <h1 className="art-title">{art.name}</h1>
        <p><b>Category</b> : {art.category}</p>
        <p><b>State</b> : {art.state}</p>
        <p><b>Period</b> : {art.period}</p>
        <p><b>Type</b> : {art.type}</p>
        <p>{art.origin && renderSection("Origin", art.origin)}</p>
        <p><b>Description:</b> <br />{art.description}</p>
        </div>
        </div>
        
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
      <Footer/>
    </div>

  );
}

export default ArtDetail;

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
