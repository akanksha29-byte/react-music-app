import React from "react";
import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { searchAlbum } from "../../actions/actions";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const style = { borderBottom: "2px solid rgb(69,178,133)" };

  const handleSearch = () => {
    dispatch(searchAlbum(search));
  };
  const handleClick = () => {
    dispatch(searchAlbum(""));
  };

  return (
    <Navbar className={styles.nav__bar}>
      <Container>
        <Navbar.Brand href="#home">
          <i
            className="fas fa-music"
            style={{ fontSize: "35px", color: "rgb(69,178,133)" }}
          ></i>
        </Navbar.Brand>
        {location.pathname === "/" || location.pathname === "/favorites" ? (
          ""
        ) : (
          <Form className={styles.search_bar}>
            <FormControl
              type="search"
              placeholder="Search..."
              className="mr-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
              onClick={handleClick}
            />
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        )}

        <Nav className="ml-auto">
          <Link
            to="/"
            className="nav-link active"
            style={location.pathname === "/" ? style : { borderBottom: "none" }}
          >
            Home
          </Link>
          <Link
            to="/music"
            className="nav-link"
            style={
              location.pathname === "/music" ? style : { borderBottom: "none" }
            }
          >
            Music
          </Link>
          <Link
            to="/favorites"
            className="nav-link"
            style={
              location.pathname === "/favorites"
                ? style
                : { borderBottom: "0px" }
            }
          >
            Favorites
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
