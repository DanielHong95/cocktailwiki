import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>The Cocktail Wiki</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/homepage">Home</Nav.Link>
            <Nav.Link href="/spiritspage">Spirits</Nav.Link>
            <Nav.Link href="/cocktaillistpage">Cocktails List</Nav.Link>
            <Nav.Link href="/ingredientsearchpage">
              Search by Ingredient
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
