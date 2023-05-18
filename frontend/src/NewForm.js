import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Paper } from '@mui/material';
// import { Button } from 'bootstrap';

export default function NewForm(props) {
    const paperStyle = {
        padding:'50px 20px',
        width: 300,
        margin : "20px auto"
    }
    const ButtonStyle ={
        margin : '20px'
    }
  
    const handleSubmit =(e) =>{
        e.preventDefault();
        const add = {name, hub, no_aircrafts}
        
        // console.log(JSON.stringify(user));
        fetch("http://localhost:8080/update",{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body : JSON.stringify(add)}).then(()=>{
                console.log("New Airline added");
            }
            )
            props.onAddNewClicked(false);
            console.log(props)
    }
    const [name, setName] = useState('');
    const [hub, setHub] = useState('');
    const [no_aircrafts, setNo_aircrafts] = useState('');

    return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >


    <Container style = {paperStyle}>
        <h2> New User Signup</h2>   
    <TextField id="standard-basic" label="Name" variant="standard" fullWidth
    value = {name} onChange ={(e) => setName(e.target.value)} type = "text"/>
    <TextField id="standard-basic" label="Hub" variant="standard" fullWidth
    value = {hub} onChange ={(e) => setHub(e.target.value,10)} type = "text"/>
    <TextField id="standard-basic" label="Number of Aircrafts" variant="standard" fullWidth
    value = {no_aircrafts} onChange ={(e) => setNo_aircrafts(parseInt(e.target.value))} type = "number"/>
    
    {/* <Button type = "Submit">Submit</Button> */}
    <Button variant = "contained" color = "primary" style = {ButtonStyle} onClick = {handleSubmit}>Submit</Button>
    </Container>
    
    </Box>

  );
}
