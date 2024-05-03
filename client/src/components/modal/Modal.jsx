import { useContext, useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { DataContext } from '../../context/DataContext';

function TodoModal({show, handleClose, title, description,status}) {
  const {dispatch,activeCard,tasks} = useContext(DataContext)
  const [input,setInput] = useState({title,description,status})  
  const [error,setError] = useState()
  const handleChange = ({e,parameter}) =>{
    switch (parameter){
      case "title":
        setInput({...input,title:e.target.value})
        return;
      case "description":
        setInput({...input,description:e.target.value})
        return;
        case "status":
        setInput({...input,status:e.target.value})
        return;
      default:
        return ;
    }
  }
  const handleSave = () =>{
    if (validateForm()) {
      dispatch({type:"ADD_TASK",payload:{...input}})
      handleClose();
    }
    
  }
  const handleDelete = (id) =>{

      dispatch({type:"DELETE_TASK",payload:{id:activeCard.id}})
      handleClose();
    
  }

  const validateForm = () =>{
    if (!/^[a-zA-Z\s]+$/.test(input.title)) {
      setError('Title must contain only alphabets.');
      return false;
    }
    if (input.description.length < 25) {
      setError('Description must be at least 25 characters long.');
      return false;
    }
    setError(null);
    return true;
  }

  useEffect(() => {
    setInput({ ...activeCard });
    setError(null)
  }, [activeCard]);


 
  return (
    <>      
      <Modal show={show} onHide={handleClose}>        
        <Modal.Header closeButton>
          <Modal.Title>{title===""?"Add Task":"Edit Task"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" value={input.title} onChange={(e)=>handleChange({e,parameter:"title"})} />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter description" value={input.description} onChange={(e)=>handleChange({e,parameter:"description"})} />
            </Form.Group>

            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" value={input.status} onChange={(e)=>handleChange({e,parameter:"status"})}>
                <option>To Do</option>
                <option>Doing</option>
                <option>Done</option>
              </Form.Control>
            </Form.Group>
          </Form>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </Modal.Body>
        <Modal.Footer>
          {title!==""&&<Button variant="secondary" onClick={handleDelete}>
           Delete
          </Button>}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>  
    </>
  );
}

export default TodoModal;