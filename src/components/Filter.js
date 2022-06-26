import React,{useState} from 'react'
import { DropdownButton, Dropdown} from "react-bootstrap";
export const Filter = ({statusData}) => {
    
  return (
    <div>    
    <DropdownButton className="filter-btn"  title="Filter task">
    {
        statusData.map((status)=>{
            return <><Dropdown.Item >{status.status}</Dropdown.Item></>
             
        })
    }
    
         
    </DropdownButton>
    </div>
  )
}
