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
              <Form.Label>Apellido P</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Apellido M</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Grupo</Form.Label>
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
              <Form.Label>Número de Control</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Númereo de Semestre</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col>
              <Form.Label>Correo Institucional</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Correo Electronico 2</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Correo Electronico 3</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            
            <Row>
            <Col>
              <Form.Label>Correo Electronico 4</Form.Label>
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
              <Form.Label>Telefono de Casa</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            
            </Row>
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
              <Form.Label>Apellido P</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Apellido M</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Row>
            <Col>
              <Form.Label>Telefono 2</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col>
              <Form.Label>Correo Electronico 2</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            </Row>
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
              <Form.Label>Apellido P</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Apellido M</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Correo Electronico 2</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            </Row>
        </Form.Group>
        <br></br>
        <h5>Datos del proyecto</h5>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Nombre del Proyecto</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Número de Revisión</Form.Label>
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
            <Col>
              <Form.Label>Fecha 1 de Revisión</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            </Row>
            <Row>
            <Col>
              <Form.Label>Fecha 2 de Revisión</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Número de Oficio</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
          <Col>
              <Form.Label>Inicio de Residencia</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Finalización de Residencia</Form.Label>
              <Form.Control
                type="text"
              ></Form.Control>
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
          Registrar Alumno
        </Button>
        
        <Col>
        <Button
          variant="success"
          onClick={() => {
            
          }}
        >
          Subir Archivos
        </Button>
        </Col>
      </Form>
    </Container>
  );
}
