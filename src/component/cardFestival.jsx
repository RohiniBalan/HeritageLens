import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CardFestival({id, img, name, description, isFavorite, handleLike }) {
  const navigate = useNavigate()
  return(
  <>
    <div className="cards">
      <Card
        style={{ width: "18rem", borderRadius: "15px"}}
        className="main-card"
      >
        <Card.Img
          variant="top"
          src={img}
          height="200px"
          className="card-img"
          style={{ width: "16rem", borderRadius: "15px" }}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center", fontSize: "22px" }}>
            {name}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify" }} className="mx-3">
            {description}
          </Card.Text>
            <Button className="card-btn" onClick={()=> navigate(`/festival/${id}`)}>Read More</Button>
        </Card.Body>
      </Card>
    </div>
  </>
  );
}
export default CardFestival;
