import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';
import { toggleTheme } from './themeSlice';
import { IoIosSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Logo from "./assest/logo.png";
function NavBarSection() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode)

  const handleTheme = (()=>{
    dispatch(toggleTheme())
  });

  

  return (
    <Navbar expand="lg" className="nav-section">
      <Container fluid>
        <img src={Logo} alt="" height="60px" className='mx-2 me-3 rounded-pill' />
        <Navbar.Brand href="#" style={{color:'white'}}>HeritageLens</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0t mx-3"
            style={{ maxHeight: '100px',color:'white' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/" className='nav-page me-3'>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/art-culture" className='nav-page me-3'>Art & Culture</Nav.Link>
            <Nav.Link as={NavLink} to="/architecture" className='nav-page me-3'>Architecture</Nav.Link>
            <Nav.Link as={NavLink} to="/festival" className='nav-page me-3'>Festival</Nav.Link>
            <Nav.Link as={NavLink} to="/handicraft" className='nav-page me-3'>Handicrafts</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className='nav-page me-3'>About</Nav.Link>
          </Nav>
          <div>
            <button onClick={handleTheme} className='nav-btn me-3'>{darkMode? <IoMdMoon /> : <IoIosSunny />}</button>
            <FaHeart className='nav-btn me-3 pb-1'/>
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

export default NavBarSection;
