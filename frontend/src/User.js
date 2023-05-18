import { Construction } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
export default function User(props){

    useEffect(()=>{
        getAircrafts()
    },[])

    const getAircrafts = async() => {
        const res = await fetch('http://localhost:8080/aircrafts')
        setAircrafts(await res.json())
    }
    const [aircrafts, setAircrafts] = useState([])
    // const viewFlights = () =>{
    //     console.log("View Flights clicked")
    //     setViewFlightsClicked(true)
    // }
    

    return (
        <>
        <h2>Welcome!</h2>
        <h1> View Flights</h1> 
        <Container>
    <table className = "table table-striped">
        <thead>
            <th>Aircraft Name</th>
            <th>From Airport</th>
            <th>To Airport</th>
            <th>Departure</th>
            <th>Arrival</th>
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
                <td><Button variant = "contained" color = "primary" >Book Flight</Button></td>
            </tr>
            </tbody>
        )
    })}
    </table>
    {/* <Button variant="text" color = "primary" onClick = {handleBackView}>Back to home page</Button> */}
    </Container>       
        </> 
            
    )
}