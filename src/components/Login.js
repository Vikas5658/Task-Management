import React,{useState} from 'react';
import{Link, useNavigate} from 'react-router-dom';
import './Login.css';
import axios from 'axios';
export const Login = () => {

    const navigate = useNavigate()
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    
    const handelEmailChange = (e) =>{
        setEmail(e.target.value)
        console.log(email)
    }
    const handelPasswordChange = (e) =>{        
            setPassword(e.target.value)
            console.log(password)      
    }
    const handleClick = () =>{
        console.log({email, password});
        axios.post('https://reqres.in/api/login',{
            email:email,
            password:password
        })
        .then(result =>{
            console.log(result)
            localStorage.setItem('token',result.data.token);
            navigate('/')
        })
        .catch(err=>{
            console.log(err);
        })
    }
  return (
    
    <form id="form_login">       
    <div className="form-outline mb-4">
    <label className="form-label" for="form2Example1">Email address: eve.holt@reqres.in</label>
    <input type="email" id="username" className="form-control" value={email} onChange={handelEmailChange}/>
    
  </div>

  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example2">Password: cityslicka</label>
    <input type="password" id="form2Example2" class="form-control" value={password} onChange={handelPasswordChange}/>
    
  </div>
         
  <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleClick}>Sign in</button>
                
    </form>  
    
  )
}
