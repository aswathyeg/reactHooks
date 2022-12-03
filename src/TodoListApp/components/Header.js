import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar variant="dark" bg="dark" style={{ height: 60 }}>
        <Container>
          <Navbar.Brand variant="light">TodoApp</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
