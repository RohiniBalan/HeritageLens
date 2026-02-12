import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div className="container text-center category my-5">
      <h1 className="mb-4 mt-2">Explore India's Heritage</h1>
      <div className="d-flex justify-content-evenly flex-wrap">
      <Card style={{ width: "17rem" }} className="category-card">
        <Card.Img variant="top" src="https://i.pinimg.com/1200x/f4/07/1f/f4071f1d1c28db441f8992bdcbc83f72.jpg" className="rounded-pill card-img" />
        <Card.Body>
          <Card.Title>Art & Culture</Card.Title>
          <NavLink to="/art-culture" ><Button className="category-btn">View More</Button></NavLink>
        </Card.Body>
      </Card>
      <Card style={{ width: "17rem" }} className="category-card">
        <Card.Img variant="top" src="https://i.pinimg.com/736x/45/f6/99/45f699d4e51aae4769859070f1eac4b3.jpg" className="rounded-pill card-img" />
        <Card.Body>
          <Card.Title>Architecture</Card.Title>
          <NavLink to="/architecture"><Button className="category-btn">View More</Button></NavLink>
        </Card.Body>
      </Card>
      <Card style={{ width: "17rem" }} className="category-card">
        <Card.Img variant="top" src="https://i.pinimg.com/736x/ae/1b/d4/ae1bd4b68eb350ca3630f1636fd1df55.jpg" className="rounded-pill card-img" />
        <Card.Body>
          <Card.Title>Festival</Card.Title>
          <NavLink to="/festival"><Button className="category-btn">View More</Button></NavLink>
        </Card.Body>
      </Card>
      <Card style={{ width: "17rem" }}  className="category-card">
        <Card.Img variant="top" src="https://i.pinimg.com/1200x/7e/38/be/7e38be3bbd89036ec244acc4b7d82ae2.jpg" className="rounded-pill card-img" />
        <Card.Body>
          <Card.Title>Handicraft</Card.Title>
          <NavLink to="/handicraft"><Button className="category-btn">View More</Button></NavLink>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default Category;
