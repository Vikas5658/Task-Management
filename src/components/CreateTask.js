import React,{useRef, useState}from 'react';
import DatePicker from "react-datepicker";
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import { Form} from "react-bootstrap";



export const CreateTask = () => {

    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);

    const[taskName, setTaskName]=useState("")
    const[description, setDescription]=useState("")
    const[status, setStatus]=useState("Completed")
    

    let data={taskName,description,status}

    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch("http://localhost:3002/taskData",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.log(result)
            result.json().then((resp)=>{
                console.log(resp)
            })
        })

    }

  return (
    <div>
    <Button color="primary"
        onClick={toggle}>Create new task
    </Button>
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sample Modal Title</ModalHeader>
      <ModalBody>

        <form className="form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Name</Form.Label>
          <Form.Control type="text" placeholder="Enter task name" 
          name="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Description</Form.Label>
          <Form.Control type="textarea" placeholder="Enter task description"          
          name="description" value={description} onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Description</Form.Label>
          
        </Form.Group>  
          <Form.Select aria-label="Default select example" value={status} onChange={e=>setStatus(e.target.value)}>          
          <option>Completed</option>
          <option>Pending</option>          
          </Form.Select>   
   
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </form>
        </ModalBody>        
    </Modal>
    </div>
  )
}
