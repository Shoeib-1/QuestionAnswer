import React from "react";
import { Accordion, Row } from "react-bootstrap";
import { question } from "../data";

const Q_A_List = ({ data, deleteOneItem }) => {
  const dataLocal = JSON.parse(localStorage.getItem("items"));
  const onDeleteItem = (ID) => {
    if (localStorage.getItem("items") != null) {
      const index = question.findIndex((item) => item.id === ID);
      question.splice(index, 1);
      deleteOneItem(question);
    }
  };
  return (
    <Row>
      <Accordion>
        {localStorage.getItem("items") != null ? (
          dataLocal.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className="m-auto">{item.q}</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-inline p-3">{item.a}</div>
                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="btn-color"
                  >
                    Delete the first question
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2>The Question Not Found</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default Q_A_List;
