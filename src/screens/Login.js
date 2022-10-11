import React from "react";
import { Button, Container, Form, FormLabel } from "react-bootstrap";

export default function Login(props) {
  const { width } = props;

  const user = {
    email: "kevin.kdfl@gmail.com",
    password: "admin123",
  };

  return (
    <Container
      style={{
        display: "block",
        position: "relative",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Form>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: "40vh",
          }}
        >
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese el correo" />
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
            <Button style={{ marginTop: 20 }} variant="outline-success">
              Ingresar
            </Button>
          </Form.Group>
        </div>
      </Form>
    </Container>
  );
}
