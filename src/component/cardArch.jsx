import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CardArch({id, img, name, description, isFavorite, handleLike }) {
  const navigate = useNavigate()
  return(
  <>
    <div className="cards">
      <Card
        style={{ width: "18rem", borderRadius: "10px"}}
        className="main-card"
      >
        <Card.Img
          variant="top"
          src={img}
          height="200px"
          style={{ width: "17rem", borderRadius: "10px", marginLeft:'8px', marginTop:'5px' }}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center", fontSize: "22px" }}>
            {name}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify" }} className="mx-3">
            {description}
          </Card.Text>
          <div className="d-flex  justify-content-between mx-5">
            <FaHeart
              className="fs-2 like"
              style={{ color: isFavorite ? "rgb(237, 72, 72)" : "rgb(207, 204, 204)" }}
              onClick={handleLike}
            />
            <Button className="card-btn" onClick={()=> navigate(`/architecture/${id}`)}>Read More</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  </>
  );
}
export default CardArch;
