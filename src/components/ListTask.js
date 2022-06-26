import React, { useState, useEffect } from "react";
import "./ListTask.css";
import Axios from "axios";


import { ItemCard } from "./ItemCard";
import { Filter } from "./Filter";

export const ListTask = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  

  

    useEffect(() => {
      Axios
      .get("http://localhost:3002/taskData").then((res) => {
        setUsers(res.data.reverse());
      });
      console.log(users);
    },[]);

  return (
    <>
    <div id="header">
      <input type="text" placeholder="Search task.." 
      onChange={event=>setSearch(event.target.value)}/>

      <Filter statusData={users}/>
      
    </div>
      <div className="list-items" key={users.id}>
        {users &&
          users.filter((val)=>{
            if(search == ""){
              return val;
            }else if (val.taskName.toLowerCase().includes(search.toLowerCase())){
              return val;
            }
          }).map((user, index) => {
            console.log(`Index: ${index}`);
            return (
              <>
              <ItemCard key={index} taskData={user} />
                  
              </>
            );
          })}
      </div>
    </>
  );
};
