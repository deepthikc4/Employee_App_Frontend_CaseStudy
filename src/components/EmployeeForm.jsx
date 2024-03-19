import { Box, Button, TextField, Typography, colors } from '@mui/material'
import React from 'react';
import './EmployeeForm.css';


const EmployeeForm = () => {
  return (
    <div>  
     <form className="employeeform" >
      <div className='form-row'>
     <label className="employeelabel">Name:</label>
     <TextField  id="fieldsinput"label="Please enter Name" variant="outlined"/>
     </div>
    
    <div className='form-row'>
    <label className="employeelabel">Designation:</label>
    <TextField id="fieldsinput" label="Please Enter Designation" variant="outlined"  />
    </div>
    <div className='form-row'>
    <label className="employeelabel">Location:</label>    
    <TextField id="fieldsinput" label="Please Enter Location" variant="outlined" />
    </div>
    <div className='form-row'>
    <label className="employeelabel">Salary:</label>
    <TextField id="fieldsinput" label="Please Enter Salary" variant="outlined" />
    </div>
    <Button color="inherit"style={{color:'white' ,backgroundColor:'blue'}}>Submit</Button>
    </form>
 </div>
  )
}

export default EmployeeForm