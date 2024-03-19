
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EmployeeForm from './components/EmployeeForm';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/e' element={<EmployeeForm/>}/>    
     </Routes>
    </div>
  );
}

export default App;
