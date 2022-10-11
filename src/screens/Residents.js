import React, { useRef, useEffect } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

//Data de ejemplo
//import { residents } from "../test/DataExample";

export default function Residents() {
  const location = useLocation();
  const residents = location.state.residents;
  const group = location.state.group;
  
  return (
    <Container style={{ marginTop: 10 }}>
      <Link to={"/groups"}>
        <BsFillArrowLeftSquareFill size={36} />
      </Link>
      <h1>Grupo {group}</h1>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Table borderless hover>
        <thead>
          <tr>
            <th style={{ opacity: 0.5, fontWeight: "normal" }}>N</th>
            <th style={{ opacity: 0.5, fontWeight: "normal" }}>Alumno</th>
            <th style={{ opacity: 0.5, fontWeight: "normal" }}>Sexo</th>
            <th style={{ opacity: 0.5, fontWeight: "normal" }}>Semestre</th>
            <th style={{ opacity: 0.5, fontWeight: "normal" }}>Email</th>
            <th style={{ opacity: 0.5, fontWeight: "normal" }}>Celular</th>
            <th style={{ opacity: 0.5, fontWeight: "normal" }}>
              Teléfono de casa
            </th>
            <th style={{ opacity: 0.5, fontWeight: "normal" }}>
              Nombre del proyecto
            </th>
            <th style={{ opacity: 0.5, fontWeight: "normal" }}>Status</th>
            <th style={{ opacity: 0.5, fontWeight: "normal" }}>Ver</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((e) => {
            return (
              <tr key={e.id} >
                <td>{e.id}</td>
                <td
                  style={{ cursor: "pointer" }}
                >
                  {e.name}
                </td>
                <td
                  style={{ cursor: "pointer" }}
                >
                  {e.gender.charAt(0)}
                </td>
                <td
                  style={{ cursor: "pointer" }}
                >
                  {e.semester}
                </td>
                <td
                  style={{ cursor: "pointer" }}
                >
                  {e.email}
                </td>
                <td
                  style={{ cursor: "pointer" }}
                >
                  {e.phone}
                </td>
                <td
                  style={{ cursor: "pointer" }}
                >
                  {e.homePhone}
                </td>
                <td
                  style={{ fontSize: 14, cursor: "pointer" }}
                >
                  {e.proyectName}
                </td>
                <td
                  style={{
                    color: e.status === "Aceptado" ? "#008000" : "#FF0000",
                    cursor: "pointer",
                  }}
                >
                  {e.status}
                </td>
                <td>
                  <Link to={"/resident"} state={{ resident: e}}>
                  <Button
                    variant="outline-primary"
                  >
                    Ver
                  </Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
