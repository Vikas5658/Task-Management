import './App.css';
import { Login } from './components/Login';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Home } from './components/Home';
import { UpdateTask } from './components/UpdateTask';

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Home/>}/>  
    <Route path="update/:id" element={<UpdateTask/>}/>  
    </Routes>
    </Router>
      
  
  );
}

export default App;
