import React, { useState } from "react";
import {
  Col,
  Row,
  Container,
  Form,
  Button,
  InputGroup,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {
  BsFillArrowLeftSquareFill,
  BsFillPersonPlusFill,
} from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

//Datos de ejemplo
import { careers, semesters } from "../test/DataExample";

const radios = [
  { name: "Hombre", value: "1" },
  { name: "Mujer", value: "2" },
];

export default function AddResident() {
  const [groupSelected, setGroupSelected] = useState("Elige una carrera");
  const [semester, setSemester] = useState("Elige un semestre");
  const [period, setPeriod] = useState("Elige un periodo");
  const [startDateR1, setStartDateR1] = useState(null);
  const [startDateR2, setStartDateR2] = useState(null);
  const [startDateR3, setStartDateR3] = useState(null);
  const [startDateStart, setStartDateStart] = useState(null);
  const [startDateFinish, setStartDateFinish] = useState(null);
  const [radioValue, setRadioValue] = useState(1);
  const [approved, setApproved] = useState(null);

  const location = useLocation();
  const group = location.state.group;

  return (
    <Container style={{ marginTop: 10 }}>
      <Link to={"/groups"}>
        <BsFillArrowLeftSquareFill size={36} />
      </Link>
      {/*Datos del alumno*/}
      <h1>
        <BsFillPersonPlusFill size={45}></BsFillPersonPlusFill>
        Agregar un residente al grupo {group}
      </h1>
      <br></br>
      <h5>Datos del alumno</h5>
      <Form>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col>
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col>
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Form.Label>Carrera</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      {groupSelected}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {careers.map((i) => {
                        return (
                          <Dropdown.Item
                            key={i}
                            onClick={() => {
                              setGroupSelected(i);
                            }}
                          >
                            {i}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                  <Form.Label>Semestre</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      {semester}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {semesters.map((i) => {
                        return (
                          <Dropdown.Item
                            key={i}
                            onClick={() => {
                              setSemester(i);
                            }}
                          >
                            {i}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Label>Número de Control</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col>
              <div>
                <Form.Label>Sexo</Form.Label>
              </div>
              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? "outline-primary" : "outline-danger"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Correo institucional</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Alumno"
                  aria-label="Alumno"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  @toluca.tecnm.mx
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col>
              <Form.Label>Correo personal</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col>
              <Form.Label>Correo opcional</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Telefono de Casa</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col>
              <Form.Label>Telefono celular</Form.Label>
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
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col>
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col>
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Row>
              <Col>
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
              <Col>
                <Form.Label>Correo electronico 2</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
              <Col>
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
              <Col>
                <Form.Label>Telefono 2</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
            </Row>
          </Row>
        </Form.Group>
        <br />
        <h5>Datos del proyecto</h5>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Nombre del Proyecto</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col>
              <Form.Label>Número de Revisión</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col>
              <Form.Label>Empresa</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col>
              <Form.Label>Periodo</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  {period}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      setPeriod("Enero - Junio");
                    }}
                  >
                    Enero - Junio
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setPeriod("Agosto - Diciembre");
                    }}
                  >
                    Agosto - Diciembre
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              <Form.Label>Fecha 1 de Revisión</Form.Label>
              <DatePicker
                selected={startDateR1}
                onChange={(date) => setStartDateR1(date)}
                placeholderText={"Agregue una fecha"}
              />
            </Col>
            <Col md="auto">
              <Form.Label>Fecha 2 de Revisión</Form.Label>
              <DatePicker
                selected={startDateR2}
                onChange={(date) => setStartDateR2(date)}
                placeholderText={"Agregue una fecha"}
              />
            </Col>
            <Col md="auto">
              <Form.Label>Fecha 3 de Revisión</Form.Label>
              <DatePicker
                selected={startDateR3}
                onChange={(date) => setStartDateR3(date)}
                placeholderText={"Agregue una fecha"}
              />
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              <Form.Label>Inicio de Residencia</Form.Label>
              <DatePicker
                selected={startDateStart}
                onChange={(date) => setStartDateStart(date)}
                placeholderText={"Agregue una fecha"}
              />
            </Col>
            <Col md="auto">
              <Form.Label>Finalización de Residencia</Form.Label>
              <DatePicker
                selected={startDateFinish}
                onChange={(date) => setStartDateFinish(date)}
                placeholderText={"Agregue una fecha"}
              />
            </Col>
          </Row>
        </Form.Group>
        <br></br>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <ButtonGroup>
            <Button
              variant="outline-success"
              size="lg"
              active={approved}
              onClick={() => {
                setApproved(true);
              }}
            >
              Aprobar
            </Button>
            <Button
              variant="outline-danger"
              size="lg"
              active={approved == false}
              onClick={() => {
                setApproved(false);
              }}
            >
              Rechazar
            </Button>
          </ButtonGroup>
        </div>
        <Col>
          <Form.Label>Subir archivos</Form.Label>
          <Form.Control type="file" multiple></Form.Control>
        </Col>
        <br></br>
        <Form.Label>Comentarios</Form.Label>
        <Form.Control  as="textarea" rows={3}></Form.Control>
        {approved && (
          <>
            <h5>Datos del asesor interno</h5>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Nombre(s)</Form.Label>
                  <Form.Control type="text"></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Apellido Paterno</Form.Label>
                  <Form.Control type="text"></Form.Control>
                </Col>
                <Col>
                  <Form.Label>Apellido Materno</Form.Label>
                  <Form.Control type="text"></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Correo electronico</Form.Label>
                  <Form.Control type="text"></Form.Control>
                </Col>
              </Row>
            </Form.Group>
            <Row>
              <Col md="2">
                <Form.Label>Número de Oficio</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
            </Row>
          </>
        )}
        <br></br>
        <Button
          variant="outline-success"
          size="lg"
          onClick={() => {
            alert("Se registro un usuario");
          }}
        >
          Registrar
        </Button>
      </Form>
    </Container>
  );
}
