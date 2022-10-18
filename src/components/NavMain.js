import React from "react";
import Nav from "react-bootstrap/Nav";
import { Container, Image } from "react-bootstrap";
import logo from "../assets/logo.png";
import home_icon from "../assets/home-icon.png";
import add_icon from "../assets/add-icon.png";
import document_icon from "../assets/document-icon.png";
import { colors } from "../Constants/Colors";
// Navegación
import { Link } from "react-router-dom";

export default function NavMain() {
  return (
    <Container fluid style={{width: "100%", background: colors.orangePrimary, justifyContent: "center", alignItems: "center", display: "flex"}}>
      <Image src={logo} style={{height: "10vh"}}></Image>
      <h1 style={{color: colors.white, marginLeft: 30}}>Ingeníerias</h1>
    </Container>
  );
}
