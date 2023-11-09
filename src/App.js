import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./Components/FormInput";
import Q_A_List from "./Components/Q_A_List";
import { question } from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(question);
  // to add new item
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify("Added successfully" , "Success");
  };
  // to delete item
  const deleteAllItem = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([]);
    notify("Delete successfully" , "Success");
  };
  // to delete one item from array
  const deleteOneItem = (item) => {
    localStorage.setItem("items", JSON.stringify([...item]));
    setData([...item]);
    notify("deleteItem successfully" , "Success");
    if (item.length <= 0) {
      deleteAllItem();
    }
  };

  //to push notifaction
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") toast.success(message);
  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">questions and answers</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} />
            <Q_A_List data={data} deleteOneItem={deleteOneItem} />

            {localStorage.getItem("items") != null ? (
              <button onClick={deleteAllItem} className="btn-color w-100 my-4">
                Delete All
              </button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
