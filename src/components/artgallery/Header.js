import React from "react";
import {
  Container,
  FormControl,
  Navbar,
  Badge,
  Dropdown,
  Nav,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar variant="dark" style={{ height: 70 }} bg="dark">
        <Container>
          <Navbar.Brand variant="light">
            Arts
            <Link to="/"></Link>
          </Navbar.Brand>

          <Navbar.Text>
            <FormControl
              placeholder="Search an art"
              style={{ width: 500 }}
            ></FormControl>
          </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <Badge>Cart</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Button style={{ width: "95%", margin: "0 10px" }}>
                  Go To Cart
                </Button>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
