import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { question } from "../data";

const FormInput = ({onAdd}) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");
  // to push data to array
  const addNewItem = () => {
    question.push({ id: Math.random() , q:qu, a:an });
    setQu('')
    setAn('')
    onAdd();
    console.log(question);
  };
  return (
    <Row className="py-2 my-2">
      <Col sm="5">
        <Form.Control
          value={qu} onChange={(e) => setQu(e.target.value)} type="text" placeholder="Questions"/>
      </Col>

      <Col sm="5">
        <Form.Control
          value={an}
          onChange={(e) => setAn(e.target.value)}
          type="text"
          placeholder="Answers"
        />
      </Col>

      <Col sm="2">
        <button onClick={addNewItem} className="btn-color w-100" type="submit">
          Add
        </button>
      </Col>
    </Row>
  );
};

export default FormInput;
