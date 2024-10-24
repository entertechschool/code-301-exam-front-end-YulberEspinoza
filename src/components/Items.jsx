import { Accordion, Card, Button } from "react-bootstrap";

function Items(props) {
  return (
    <section>
      <h2>Items...</h2>
      <Accordion>
        {props.itemsList.map((item) => (
          <Item
            key={item._id}
            itemData={item}
            handleUpdateItem={props.handleUpdateItem}
            handleDeleteItem={props.handleDeleteItem}
          />
        ))}
      </Accordion>
    </section>
  );
}

function Item(props) {
  const itemData = props.itemData;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(itemData);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.handleUpdateItem(itemData._id, updatedItem);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUpdatedItem({ ...updatedItem, [e.target.name]: e.target.value });
  };

  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={itemData._id}>
        {itemData.name}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={itemData._id}>
        <Card.Body>
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={updatedItem.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="description"
                value={updatedItem.description}
                onChange={handleChange}
              />
              <Button onClick={handleSave}>Save</Button>
            </>
          ) : (
            <>
              <p>{itemData.description}</p>
              <Button onClick={handleEdit}>Edit</Button>
              <Button onClick={() => props.handleDeleteItem(itemData._id)}>
                Delete
              </Button>
            </>
          )}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default Items;
