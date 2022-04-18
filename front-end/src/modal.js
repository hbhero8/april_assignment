import {Modal, Button,Form} from 'react-bootstrap'
import { useState } from 'react';
import addBook from './table'

function Modals(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const {render, setRender} = props.baatraaRender
console.log(props)
   if(props.type == "edit"){
    const editBook = (e) => {
      console.log(e)
      e.preventDefault()
      const putMethod = { 
        method: "PUT", // Method itself
        headers: {
          "Content-type": "application/json", // Indicates the content
        },
        body: JSON.stringify({
          name : e.target[0].value,
          price: e.target[1].value,
          author: e.target[2].value,
          isbn : e.target[3].value,
          published_date: e.target[4].value
        }
        ), // We send data in JSON format
      }
      fetch(`http://13.251.156.158:3000/api/updateBooks/id/${props.data._id}`, putMethod)
      .then((response) => response.json())
      .then((data) => setRender(!render)) // Manipulate the data retrieved back, if we want to do something with it
      .catch((err) => (err))
    };
     return (
       <>
         <div className='iconButton' variant="primary" onClick={handleShow}>
         <img src="/img/edit.svg" alt="svg" />
         </div>
         <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
             <Modal.Title className="center">Add Book</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <Form onSubmit={editBook}>
               <Form.Group className="mb-3" name="test" controlId="exampleForm.ControlInput1">
                 <Form.Control
                   type="text"
                   placeholder="Name"
                   defaultValue={props.data.name}
                   autoFocus
                 />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Control
                   type="number"
                   placeholder="Price"
                   defaultValue={props.data.price}
                   autoFocus
                 />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Control
                   type="text"
                   placeholder="Author"
                   defaultValue={props.data.author}
                   autoFocus
                 />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Control
                   type="number"
                   placeholder="ISBN"
                   defaultValue={props.data.isbn}
                   autoFocus
                 />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Control
                   type="date"
                   placeholder="Published On"
                   defaultValue={props.data.published_date}
                   autoFocus
                 />
               </Form.Group>
               <Button variant="secondary" onClick={handleClose}>
               Close
             </Button>
             <Button type='submit' variant="primary" onClick={handleClose} >
               Apple Changes
             </Button>
             </Form>
           </Modal.Body>
           <Modal.Footer>
            
           </Modal.Footer>
         </Modal>
       </>
     );

   }
   else if(props.type == "delete"){
    const deleteBook = (e) => {
      e.preventDefault()
      console.log(e.target)
      const deleteMethod = { 
        method: "DELETE", // Method itself
        headers: {
          "Content-type": "application/json", // Indicates the content
        },
        body: JSON.stringify({
        }
        ), // We send data in JSON format
      }
      fetch(`http://13.251.156.158:3000/api/deleteBooks/id/${props.data._id}`, deleteMethod)
      .then((response) => response.json())
      .then((data) => (data)) // Manipulate the data retrieved back, if we want to do something with it
      .catch((err) => (err))
      .finally(()=> setRender(!render))
    };
    return (
      <>
        <div className='iconButton' variant="primary" onClick={handleShow}>
        <img src="/img/delete.svg" alt="svg" />
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="center"> Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Want to delete???
          </Modal.Body>
          <Modal.Footer onClick={handleClose}>
          <Button variant="secondary" >
              No
            </Button>
            <Button type='submit' variant="primary" onClick={deleteBook} >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
   }
   else if(props.type == "submit"){
    const addBook = (e) => {
      e.preventDefault()
      const postMethod = { 
        method: "POST", // Method itself
        headers: {
          "Content-type": "application/json", // Indicates the content
        },
        body: JSON.stringify({
          name : e.target[0].value,
          price: e.target[1].value,
          author: e.target[2].value,
          isbn : e.target[3].value,
          published_date: e.target[4].value
        }
        ), // We send data in JSON format
      }
      fetch(`http://13.251.156.158:3000/api/createBooks`, postMethod)
      .then((response) => response.json())
      .then((data) => (data)) 
      .then((data) => setRender(!render)) // Manipulate the data retrieved back, if we want to do something with it
      .catch((err) => (err));
    };
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          + Add Book
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="center">Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={addBook}>
              <Form.Group className="mb-3" name="test" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="number"
                  placeholder="Price"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Author"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="number"
                  placeholder="ISBN"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="date"
                  autoFocus
                />
              </Form.Group>
              <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary" onClick={handleClose} >
              Add Book
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
           
          </Modal.Footer>
        </Modal>
      </>
    );
   }
  }
  
export default Modals
