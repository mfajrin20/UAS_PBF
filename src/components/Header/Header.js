import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";


const Header = () => {
  return (
    <header className="container-header mb-5">
      <Container fluid>
        <div className="text-center">
        <h1>Pokemon Kingdom</h1>
          <Link to="/">
            
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
