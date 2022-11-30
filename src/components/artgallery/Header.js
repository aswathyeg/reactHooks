import React, { useContext } from "react";
import {
  Container,
  FormControl,
  Navbar,
  Badge,
  Dropdown,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cart } from "./context/Context";
const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <div>
      <Navbar variant="dark" style={{ height: 70 }} bg="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand variant="light">Arts</Navbar.Brand>
          </Link>
          <Navbar.Text>
            <FormControl
              placeholder="Search an art"
              style={{ width: 500 }}
            ></FormControl>
          </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <Badge> {cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to="/cart" style={{ width: "95%", margin: "0 10px" }}>
                  {" "}
                  Go To Cart
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
