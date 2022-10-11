import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand>
          <a href="/">Shopping cart</a>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
