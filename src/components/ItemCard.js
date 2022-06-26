import React,{useState} from 'react';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

import './ItemCard.css';
import { Link } from 'react-router-dom';
import { UpdateTask } from './UpdateTask';


export const ItemCard = ({taskData,index}) => {
  console.log(`Props: ${taskData.data}`)
  const deleteItem = (id) =>{
    fetch(`http://localhost:3002/taskData/${id}`,{
      method:"DELETE"
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
      })
    })  
  }
  return (
    <>

    <div className='card-item' key={index}>
      <div className="card" key={index}>      
      <div className="card-header">{taskData.taskName}</div>
      <div className="card-main">
        <div className="main-description">{taskData.description}</div>
      </div>
      <div className="card-footer">
      <div className="status">
      <p style={{color:taskData.status === 'Pending' ? '#D32F2F' : 'green'}}>{taskData.status}</p>
      </div>
      <div className="icons">
      
      <UpdateTask formData={taskData} key={taskData.id}/>
      <i onClick={()=>deleteItem(taskData.id)}><DeleteOutlineIcon/></i>
      </div>      
      </div>
    </div>
    </div>
    </>
  )
}
