import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ListTask } from './ListTask';
import './Home.css';
import { CreateTask } from './CreateTask';
import {
    Button
} from "reactstrap";

export const Home = () => {
    const [popUp, setPopUp] = useState(false);
    const navigate = useNavigate();
    const [name, setName] = useState();
    // console.log(localStorage.getItem('token'))
    useEffect(()=>{       
        console.log("Hello"); 
        if(!localStorage.getItem('token')){
            navigate('/login')            
        }
    },[])
  return (
    <>
        <div className="">
        
        
            <header className="header">
            <h2>Task management</h2>
            <CreateTask/> 
            <Button color="danger" onClick={()=>{
                localStorage.removeItem('token')
            }}>Log out</Button> 
            </header>   
            
            <div className='tasklist'>
                <ListTask/>
            </div>        

        </div>
    
    </>
  )
}
