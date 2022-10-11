import React from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {BsFillArrowLeftSquareFill} from "react-icons/bs";

export default function AddResident() {
  return (



    <Container style={{marginTop: 10}}>
      <Link to={"/"}>
      <BsFillArrowLeftSquareFill size={36}/>
      </Link>
      <h1>Agregar un residente</h1>
      <br></br>
      <h5>Datos del alumno</h5>
      <Form>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Apellido paterno</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Apellido materno</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Sexo</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Número de control</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Semestre</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col>
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Telefono de casa</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <br></br>
        <h5>Datos del asesor interno</h5>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Apellido paterno</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Apellido materno</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <br></br>
        <h5>Datos del asesor externo</h5>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Apellido paterno</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Apellido materno</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <br></br>
        <h5>Datos del proyecto</h5>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Nombre del proyecto</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Empresa</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Periodo</Form.Label>
              <Form.Control type="text" ></Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <br></br>
        <Button
          variant="success"
          onClick={() => {
            alert("Se registro un usuario");
          }}
        >
          Registrar alumno
        </Button>
      </Form>
    </Container>
  );
}
