import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button } from '@mui/material';

export default function Login(props) {
    const paperStyle = {
        padding:'50px 20px',
        width: 300,
        margin : "20px auto"
    }
    const ButtonStyle ={
        margin : '20px'
    }
  
    const [user,setUser] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    function handleSubmit(e){

        if(user.password === password && user.username === "admin"){
            props.onLinkClick("admin");
        }else if(user.password === password){
            props.onLinkClick("user");
        } else{
            setIsLoggedIn(true);
        }
    }

    async function handleChange (e){
        setUsername(e.target.value)
        console.log(username)
        try {
            const response = await axios.get("http://localhost:8080/user/" + username)
            setUser(response.data)
          } catch (error) {
            console.error(error);
          }
    }
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
        <h2>Login</h2>
      <TextField id="standard-basic" label="E-mail/ Username" variant="standard" required
      value = {username} type = "text" onChange = {handleChange}
      />
      <TextField id="standard-basic" label="password" variant="standard" required
      value = {password} type = "password" onChange = {(e) => setPassword(e.target.value)}/>
      
      <Button variant = "contained" color = "primary" style = {ButtonStyle} onClick = {handleSubmit}>Submit</Button>
      {
      isLoggedIn && <h6 color = "secondary"> Invalid Credentials</h6>
      }
      </Container>
    </Box>
  );
}