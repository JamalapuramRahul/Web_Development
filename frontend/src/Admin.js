import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, TextField } from '@mui/material';
import NewForm from './NewForm';
export default function Admin(props){
    const [admin, setAdmin] = useState([]);
    const [displayFlights, setDisplayFlights] = useState(false)
    const [displayDetails, setDisplayDetails] = useState(false)
    const [isUpdateClicked, setIsUpdateClicked] = useState(false)
    const [curData, setCurData] = useState('');
    const [name, setName] = useState('');
    const [hub, setHub] = useState('');
    const [no_aircrafts, setNo_aircrafts] = useState('');
    const [addNewAirlines,setAddNewAirlines] =  useState(false);
    const [viewUsers, setViewUsers] = useState(false);
    const [users, setUsers] = useState([])
    const [isNoFlyListClicked, setIsNoFlyListClicked] = useState(false)
    const [aircrafts, setAircrafts] = useState([])
    const [viewAircrafts, setViewAircrafts] = useState(false)
    useEffect(()=>{
        admins()
        dispUsers()
        getAircrafts()
    },[])

    const admins = async() => {
        const res = await fetch('http://localhost:8080/details')
        setAdmin(await res.json())
    }

    const dispUsers = async() => {
        const res = await fetch('http://localhost:8080/users')
        setUsers(await res.json())
    }
    const getAircrafts = async() => {
        const res = await fetch('http://localhost:8080/aircrafts')
        setAircrafts(await res.json())
    }


    const ButtonStyle ={
        margin: '2px'
    }
    const paperStyle = {
        padding:'50px 20px',
        width: 300,
        margin : "20px auto"
    }
    function rowUpdateClicked(r) {
        setIsUpdateClicked(true)
        setName(r.name)
        setHub(r.hub)
        setNo_aircrafts(r.no_aircrafts)
    }

    const handleSubmit = () =>{
        setIsUpdateClicked(false)
        console.log(name)
        console.log(hub)
        console.log(no_aircrafts)

        const admin = {name,hub,no_aircrafts}
        fetch("http://localhost:8080/update",{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body : JSON.stringify(admin)}).then(()=>{
            }
            )

            setIsUpdateClicked(false);
    }

    const toggleOnSubmit = (r) => {
        setAddNewAirlines(r)
    }

    async function handleDelete(name){
        console.log("Delete clicked")
        try {
            const response = await axios.delete("http://localhost:8080/remove/" + name)
            setAdmin((previousAdmin) => previousAdmin.filter((item) => item.name !== name))
          } catch (error) {
            console.error(error);
          }

    }
    const newFormClicked = () =>{
        setAddNewAirlines(true)
    }
    const viewUsersClicked =() => {
        setViewUsers(true)

    }

    const handleBack =() =>{
        setViewUsers(false)
    }

    const handleBackNoFly =() =>{
        setIsNoFlyListClicked(false)
    }

    const viewNoFlyList =() =>{
        setIsNoFlyListClicked(true)
    }

    const viewAircraftClicked = () =>{
        setViewAircrafts(true)
    }

    const handleBackView = () => {
        setViewAircrafts(false)
    }

return(
<div>
<h1>Welcome, Admin!</h1>

<span>
    <Button variant = "contained" style = {ButtonStyle} onClick = {newFormClicked} color = "primary"> Add new Airlines</Button>
    {
    addNewAirlines && <NewForm onAddNewClick = {toggleOnSubmit}/>
    }
    <Button variant = "contained" style = {ButtonStyle} onClick = {viewUsersClicked} color = "primary"> View Users</Button>
    <Button variant = "contained" style = {ButtonStyle} color = "primary"> Add Employee</Button>
    <Button variant = "contained" style = {ButtonStyle} onClick = {viewAircraftClicked} color = "primary"> View Aircrafts</Button>
    <Button variant = "contained" style = {ButtonStyle} color = "primary" onClick = {viewNoFlyList}> View No Fly List</Button>     
</span>
{!isUpdateClicked && !addNewAirlines && !viewUsers && !isNoFlyListClicked && !viewAircrafts &&
<Container>
<table className = "table table-striped">
    <thead>
        <th>Name</th>
        <th>Hub</th>
        <th> Number of Aircrafts</th>
        <th>Action</th>
    </thead>

{admin.map((data) =>{
    return (
        <tbody>
        <tr key = {data.name}>
            <td>{data.name}</td>
            <td>{data.hub}</td>
            <td>{data.no_aircrafts}</td>
            <td><span><Button variant = "contained" style = {ButtonStyle} color = "primary" onClick = {() => rowUpdateClicked(data)}>Update</Button>
                <Button variant = "contained" style = {ButtonStyle} onClick = {() => handleDelete(data.name)} color = "primary">Delete</Button>
                </span>
            </td>
        </tr>
        </tbody>
    )
})}
</table>
</Container>
}
{/* 
{
    addNewAirlines &&
    <NewForm />
} */}
{
    viewUsers && !isUpdateClicked && !isNoFlyListClicked && !viewAircrafts &&
    <Container>
<table className = "table table-striped">
    <thead>
        <th>Name</th>
        <th>Age</th>
        <th>UserName</th>
        <th>Is on No Fly?</th>
    </thead>

{users.map((data) =>{
    return (
        <tbody>
        <tr key = {data.name}>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.username}</td>
            <td>{data.no_fly ?<Button variant = "contained" color = "primary">Remove from list</Button>:<Button variant = "contained" color = "primary">Add to list</Button>} </td>
            {/* <td><span><Button variant = "contained" style = {ButtonStyle} color = "primary" onClick = {() => rowUpdateClicked(data)}>Update</Button>
                <Button variant = "contained" style = {ButtonStyle} onClick = {() => handleDelete(data.name)} color = "primary">Delete</Button>
                </span>
            </td> */}
        </tr>
        </tbody>

    )
})}
</table>
<Button variant="text" color = "primary" onClick = {handleBack}>Back to home page</Button>
</Container>
}
{
    isUpdateClicked && !viewUsers && !isNoFlyListClicked && !viewAircrafts &&
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
      <TextField id="standard-basic" label="Name" variant="standard" required
      value = {name} type = "text" onChange = {(e) =>setName(e.target.value)}
      />
      <TextField id="standard-basic" label="Hub" variant="standard" required
      value = {hub} type = "text" onChange ={(e) => setHub(e.target.value)}/>

<TextField id="standard-basic" label="Number of Aircrafts" variant="standard" required
      value = {no_aircrafts} type = "number" onChange = {(e)=>setNo_aircrafts(parseInt(e.target.value,10))} />
      
      <Button variant = "contained" color = "primary" style = {ButtonStyle} onClick = {handleSubmit}>Submit</Button>
      </Container>
    </Box>
}
{
    isNoFlyListClicked && !isUpdateClicked && !viewUsers && !viewAircrafts &&
    <Container>
    <table className = "table table-striped">
        <thead>
            <th>Name</th>
            <th>Age</th>
            <th>UserName</th>
            {/* <th>Is on No Fly?</th> */}
        </thead>
    
    {users.map((data) =>{
        
        return (
            
            <tbody>
            {data.no_fly &&
            <tr key = {data.name}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.username}</td>
            </tr>
            }
            </tbody>
        )
    })}
    </table>
    <Button variant="text" color = "primary" onClick = {handleBackNoFly}>Back to home page</Button>
    </Container>
}
{
    !isNoFlyListClicked && !isUpdateClicked && !viewUsers && viewAircrafts &&

    <Container>
    <table className = "table table-striped">
        <thead>
            <th>Aircraft Name</th>
            <th>From Airport</th>
            <th>To Airport</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Total Seats</th>
            <th>Action</th>
            {/* <th>Is on No Fly?</th> */}
        </thead>
    
    {aircrafts.map((data) =>{
        
        return (
            
            <tbody>
            <tr key = {data.name}>
                <td>{data.aircraftname}</td>
                <td>{data.from_airport}</td>
                <td>{data.to_airport}</td>
                <td>{data.departure}</td>
                <td>{data.arrival}</td>
                <td>{data.total_seats}</td>
                <td><Button variant="contained">Edit Flight</Button></td>
            </tr>
            </tbody>
        )
    })}
    </table>
    <Button variant="text" color = "primary" onClick = {handleBackView}>Back to home page</Button>
    </Container>
}
</div> 
)
}