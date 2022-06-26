
import { Form} from "react-bootstrap";
import React,{useEffect, useRef, useState}from 'react';
import { CreateTask } from "./CreateTask";
import {useNavigate, useParams} from 'react-router-dom'
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap";
import EditIcon from "@mui/icons-material/Edit";
import  axios  from "axios";


export const UpdateTask = () => {
    const navigate = useNavigate()
    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);
    
    

    const[taskName, setTaskName]=useState("")
    const[description, setDescription]=useState("")
    const[status, setStatus]=useState("Completed")
    const[id, setId]=useState("")
    
    let data={taskName,description,status,id}
    useEffect(()=>{
        loadFormData()
    },[])
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3002/taskData",data)
        
    }
    const loadFormData = async () =>{
        const result = await axios.get(`http://localhost:3002/taskData ${id}` )
        console.log(`result: ${result}`)
        setTaskName(taskName)
    }
    return(
        <>
    <i color="primary"
        onClick={toggle}><EditIcon/>
    </i>
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sample Modal Title</ModalHeader>
      <ModalBody>
      <form className="form" onSubmit={e => onSubmit(e)} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task name</Form.Label>
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
       
        <Form.Select aria-label="Default select example" > value={status} onChange={e=>setStatus(e.target.value)}         
        <option>Completed</option>
        <option>Pending</option>          
        </Form.Select>   
 
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </form>
        
        </ModalBody>        
    </Modal>
    </>
    )
    
}



