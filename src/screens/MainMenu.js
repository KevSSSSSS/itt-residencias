import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillPersonPlusFill } from "react-icons/bs";
import {MdGroups} from "react-icons/md"

export default function MainMenu() {
  return (
    <Container>
      <Row style={{ marginTop: 10 }}>
        <Col />
        <Col>
          <h2>Consultas</h2>
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }} className="justify-content-md-center">
        <Col>
          <Link to={"/add"}>
            <Button
              variant="warning"
              style={{
                color: "#FFF",
                width: "50vh",
                height: "15vh",
                fontSize: 22,
              }}
            >
              <BsFillPersonPlusFill size={34}/>
                {" Altas de residencias"}
            </Button>
          </Link>
        </Col>
        <Col>
          <Link to={"/groups"}>
            <Button
              variant="primary"
              style={{
                color: "#FFF",
                width: "50vh",
                height: "15vh",
                fontSize: 22,
              }}
            >
                <MdGroups size={34}/>
              {" Grupos"}
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
