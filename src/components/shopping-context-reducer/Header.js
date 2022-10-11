import { Container, FormControl } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        {/* for logo */}
        <Navbar.Brand>
          <a href="/">Shopping cart</a>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            className="m-auto"
            placeholder="Search a product"
            style={{ width: 500 }}
          ></FormControl>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};
export default Header;
