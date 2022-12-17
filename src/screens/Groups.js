import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { groups } from "../test/DataExample";
import { BsFillArrowLeftSquareFill, BsFillNodePlusFill } from "react-icons/bs";

//Datos de ejemplo
import { residents } from "../test/DataExample";

export default function Groups() {
  const [show, setShow] = useState(false);
  const [newGroup, setNewGroup] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container style={{ marginTop: 10 }}>
        <Link to={"/"}>
          <BsFillArrowLeftSquareFill size={36} />
        </Link>
        <h2>2022</h2>
        <Container>
          <Row>
            {groups.map((e) => {
              return (
                <Col>
                  <h4 style={{ margin: 10, width: "80%" }}>{e.mounth}</h4>
                  {e.groups.map((i) => {
                    return (
                      <Col>
                        <Link to={"/add"} state={{ group: i }}>
                          <Button
                            variant="primary"
                            style={{ marginBottom: 8, width: "100%" }}
                          >
                            Grupo {i}
                          </Button>
                        </Link>
                      </Col>
                    );
                  })}
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Button variant="outline-success" onClick={handleShow}>
                      Agregar grupo{" "}
                      <BsFillNodePlusFill size={24}></BsFillNodePlusFill>
                    </Button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Numero del grupo</Form.Label>
              <Form.Control
                type="number"
                placeholder="Grupo 00"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Agregar grupo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
