import React from 'react'
import pic1 from './Images/people1.jpeg'
import pic from './Images/revImg.jpg'

export function Reviews(){
    return(
    <>
        <img  className='reviewImg' src={pic} style={{position: 'absolute', left: '8%', top: '465%', height: '220px', width: '360px',backgroundSize: 'cover',objectFit: 'cover', borderStyle: 'solid', borderColor: 'gray', borderWidth: '4px'}}/>
        <img className='guy' src={pic1} style={{position: 'absolute', left: '31.5%', top: '474%', height: '85px', width: '85px',backgroundSize: 'cover',objectFit: 'cover', borderRadius: '350px', borderStyle: 'solid', borderColor: '#B97612'}}/>
        <h1 style={{fontFamily: 'sans-serif', position: 'absolute', left: '42%', top: '443.5%', color: 'white', fontSize: '120px'}}>,</h1>
        <h1 style={{fontFamily: 'sans-serif', position: 'absolute', left: '43.2%', top: '443.5%', color: 'white', fontSize: '120px'}}>,</h1>
        <p  className='reviewText' style={{position: 'absolute', left: '42.5%', top: '468%', color:'white', fontFamily: 'sans-serif', letterSpacing: '1.5px'}}>"Elegance Interiors provided top-notch interior design services that exceeded my expectations. 
             Their talented team listened to my preferences, delivered a stunning <br></br>design, and ensured practicality and
             functionality. The level of professionalism and dedication to client satisfaction was outstanding. 
             Highly recommended!"</p>

        <h4 style={{position: 'absolute', left: '42.5%', top: '490%', color:'white', fontFamily: 'sans-serif', letterSpacing: '3px'}}>Harry Flintoff</h4>
        <p style={{position: 'absolute', left: '42.5%', top: '495%', color:'white', fontFamily: 'sans-serif', letterSpacing: '3px'}}>Sydney</p>     
    </>    
    )

}