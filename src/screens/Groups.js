import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { groups } from "../test/DataExample";
import {BsFillArrowLeftSquareFill} from "react-icons/bs";

//Datos de ejemplo
import { residents } from "../test/DataExample";

export default function Groups() {
  let newArray = [];
  return (
    <Container style={{ marginTop: 10 }}>
      <Link to={"/"}>
        <BsFillArrowLeftSquareFill size={36}/>
      </Link>
      {groups.map((e) => {
        return (
          <>
            <h3>{e.mounth}</h3>
            {e.groups.map((i) => {
              newArray = [];
              residents.map((r)=>{
                if (i == r.group) {
                  newArray.push(r);
                }
              })
              return (
                <Link to="/home" state={{ residents: newArray, group: i }}>
                  <Button
                    variant="outline-secondary"
                    style={{ color: "#000", width: "100%", marginTop: 10 }}
                  >
                    Grupo {i}
                  </Button>
                </Link>
              );
            })}
          </>
        );
      })}
    </Container>
  );
}
