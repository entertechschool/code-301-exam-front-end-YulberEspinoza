import { useState } from 'react';

import { Card, Form, Button } from 'react-bootstrap';

function AddNewItem(props) {

  const [formData, setFormData] = useState({});

  function handleChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    const newFormData = { ...formData };
    newFormData[field] = value;
    setFormData(newFormData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleAddItem(formData);
  }

  return (
    <Form data-testid="add-form" onSubmit={handleSubmit}>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Add Item</Card.Header>
        <Card.Body>
          <Form.Group>
            <Form.Label>Item</Form.Label>
            <Form.Control type="text" placeholder="To Do Item" data-testid="add-form-name" name="name" onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" data-testid="add-form-description" name="description" onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">Add Item</Button>
        </Card.Body>
      </Card>
    </Form>
  );
}

export default AddNewItem;
