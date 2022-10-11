import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { colors } from "../Constants/Colors";

export default function Resident() {
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.resident);
  const resident = location.state.resident;

  useEffect(() => {
    if (resident.status === "Aceptado") {
      setStatus(true);
    }
  }, []);

  return (
    <Container style={{ marginTop: 10 }}>
      <BsFillArrowLeftSquareFill
        style={{ cursor: "pointer" }}
        color={colors.blueSecondary}
        onClick={() => {
          navigate(-1);
        }}
        size={36}
      />
      <div className="d-flex">
        <h2>#{resident.id}-</h2>
        <h2></h2>
        <h2>{resident.name}</h2>
      </div>
      <Row>
        <Col>
          <Row>Proyecto: {resident.proyectName}</Row>
          <Row>Semestre: {resident.semester}</Row>
          <Row>Sexo: {resident.gender}</Row>
        </Col>
        <Col>
          <Row>Correo: {resident.email}</Row>
          <Row>Telefono personal: {resident.phone}</Row>
          <Row>Telefono de casa: {resident.homePhone}</Row>
        </Col>
        <Col>
          <Button
            variant={status ? "outline-success" : "outline-danger"}
            size="lg"
            style={{ borderWidth: 3 }}
            onClick={() => {
              setStatus(!status);
            }}
          >
            {status ? "Aceptado" : "Rechazado"}
          </Button>
        </Col>
      </Row>
      {/*-------------------------------------------*/}
      <br></br>
      <Row>
        <Col>
          <Row>Revision 1</Row>
          <Row
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Aún sin revisiones
          </Row>
          <Button variant="outline-success">Revisar</Button>
        </Col>
        <Col>
          <Row>Revision 2</Row>
          <Row
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Aún sin revisiones
          </Row>
          <Button variant="outline-success">Revisar</Button>
        </Col>
        <Col>
          <Row>Revision 3</Row>
          <Row
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Aún sin revisiones
          </Row>
          <Button variant="outline-success">Revisar</Button>
        </Col>
      </Row>
    </Container>
  );
}
