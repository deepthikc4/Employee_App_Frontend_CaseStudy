import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Home = () => {

   const [dataset,setData]=useState([])
   useEffect(()=>{
    
axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
  console.log(res);
  setData(res.data);
},[])

   })

  return (
    <TableContainer style={{border:'1px solid blue',backgroundColor:'beige', marginTop:'50px',width:'1000px',margin:'100px',padding:'20px',paddingLeft:'100px'}} component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow style={{}}>
          
          <TableCell align='left' style={{ fontFamily:'Roboto',fontSize: '20px',color:'blue'}} >ID</TableCell>
          <TableCell align="left" style={{ fontFamily:'Roboto',fontSize: '20px',color:'blue'}}>NAME</TableCell>
          <TableCell align="left" style={{ fontFamily:'Roboto',fontSize: '20px',color:'blue'}}>EMAIL</TableCell>
         
        </TableRow>
      </TableHead>
      <TableBody>
        {dataset.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >            
            <TableCell align="left">{row.id}</TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.email}</TableCell>
            
          
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Home