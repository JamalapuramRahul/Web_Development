import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Paper } from '@mui/material';
// import { Button } from 'bootstrap';

export default function SignUp(props) {
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
        const user = {name, age, username,password}
        
        console.log(JSON.stringify(user));
        fetch("http://localhost:8080/signup",{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body : JSON.stringify(user)}).then(()=>{
                console.log("New User added");
            }
            )
            props.onLinkClick("login");
    }
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPwd] = useState('');

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
    <TextField id="standard-basic" label="Age" variant="standard" fullWidth
    value = {age} onChange ={(e) => setAge(parseInt(e.target.value,10))} type = "number"/>
    <TextField id="standard-basic" label="E-mail" variant="standard" fullWidth
    value = {username} onChange ={(e) => setUsername(e.target.value)} type = "email"/>
    
    <TextField id="standard-basic" label="Password" variant="standard" fullWidth
    value = {password} onChange ={(e) => setPwd(e.target.value)} type = "password"/>
    {/* <Button type = "Submit">Submit</Button> */}
    <Button variant = "contained" color = "primary" style = {ButtonStyle} onClick = {handleSubmit}>Submit</Button>
    </Container>
    
    </Box>

  );
}
