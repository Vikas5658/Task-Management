import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostStart } from "../redux/app.actions";
import {Link} from 'react-router-dom'

export const FetchPost = () =>{

    

    const dispatch = useDispatch()
    const fetchPost = () =>{
        dispatch (loadPostStart())
    }
    const state = useSelector((state)=>({...state.app}))
    console.log(state)
    return(
        <>     
        <button onClick={fetchPost}>Fetch Post</button> 
        
        <div style={{padding:"20px"}}>
        {!state.loading && state.posts.jokes.map((post)=>(
            <div style={{margin:"20px"}}>
            <p>{post.joke}</p>
            </div>
        ))}

        
        </div>
        </>
    )
}
