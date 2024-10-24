import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Form from "./components/AddItem";
import Items from "./components/Items";

const API_SERVER = import.meta.env.VITE_APP_API;

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  async function addItem(item) {
    await axios.post(`${API_SERVER}/items`, item);
    getItems();
  }

  async function getItems() {
    const response = await axios.get(`${API_SERVER}/items`);
    const items = response.data;
    setItems(items);
  }

  async function updateItem(id, updatedItem) {
    await axios.put(`${API_SERVER}/items/${id}`, updatedItem);
    getItems();
  }

  async function deleteItem(id) {
    await axios.delete(`${API_SERVER}/items/${id}`);
    getItems();
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">301 Final!</Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row>
          <Col>
            <h1>Our Items</h1>
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <Form handleAddItem={addItem} />
          </Col>
          <Col>
            <Items
              itemsList={items}
              handleUpdateItem={updateItem}
              handleDeleteItem={deleteItem}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
