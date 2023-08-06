import React from 'react'
import Image1 from './Images/Carousal1.webp';
import Image2 from './Images/Carousal2.jpg';
import Image3 from './Images/Carousal3.avif';


export function Carousal(){
    return(
    <>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
    <div className="carousel-inner">
    
    <div className="carousel-item" data-bs-interval="2700">
      <img src={Image2} className="d-block w-100" alt="" id='carousalPic'/>
      <h1 style={{color: 'white', fontSize:'72px', fontWeight:'bold', position:'absolute', top:'8%', left:'36%', letterSpacing: '3px'}}>BEING THE</h1>
      <h1 style={{fontFamily: 'Brush Script MT, Brush Script Std, cursive',color: '#B97612', fontSize:'75px',fontStyle:'italic', fontWeight:'bold', position:'absolute', top:'24%', left:'33%', letterSpacing: '3px'}}>"Style Maestros"</h1>
      <p style={{color: 'white', fontSize:'14px',position:'absolute', top:'39%', left:'32%', letterSpacing:'5px'}}>WORK WITH US FROM ANYWHERE IN THE WORLD!</p>
      <a type="button" className="btn btn-outline-warning" href="#projects" style={{color:'white',position:'absolute', top:'46%', left:'39.5%'}}>VIEW PROJECTS</a>
      <a type="button" className="btn btn-outline-warning" href= '#footer' style={{color:'white',position:'absolute', top:'46%', left:'52%'}}>CONTACT US</a>
    </div>

    <div className="carousel-item active" data-bs-interval="2700"  >
      <img src={Image1} className="d-block w-100" alt="" id='carousalPic'/>
      <h1 style={{color: 'white', fontSize:'75px', fontWeight:'bold', position:'absolute', top:'2%', left:'44%'}}>WE WON THE BEST DESIGNER</h1>
      <h1 style={{fontFamily: 'Brush Script MT, Brush Script Std, cursive',color: '#B97612', fontSize:'75px',fontStyle:'italic', fontWeight:'bold', position:'absolute', top:'16%', left:'72.5%'}}>AWARDS</h1>
      <p style={{color: 'white', fontSize:'14px',position:'absolute', top:'30%', left:'44.5%', letterSpacing: '3px'}}>OVER 500,000+ CONTACT US TO GET THEIR DREAM INTERIORS</p>
      <a type="button" className="btn btn-outline-warning"  href="#designs" style={{color:'white',position:'absolute', top:'37%', left:'44.5%'}}>VIEW DESIGNS</a>
      <a type="button" className="btn btn-outline-warning"  href="#services" style={{color:'white',position:'absolute', top:'37%', left:'58%'}}>OUR SERVICES</a>
    </div>

    <div className="carousel-item" data-bs-interval="2700">
      <img src={Image3} className="d-block w-100" alt=""  id='carousalPic'/>
      <h1 style={{fontFamily: 'Brush Script MT, Brush Script Std, cursive',color: '#DA9733', fontSize:'70px',fontStyle:'italic', fontWeight:'bold', position:'absolute', top:'15%', left:'30%'}}>" Decoration Geniuses"</h1>
      {/* <h1 style={{color: 'white', fontSize:'50px', fontWeight:'bold', position:'absolute', top:'10.7%', left:'60%'}}>TO REALITY</h1> */}
      <p style={{color: 'white', fontSize:'14px',position:'absolute', top:'30%', left:'30%', letterSpacing:'2px'}}>BRINGING YOUR CREATIVE IDEAS AND OUR EXPERIENCE TOGHETER</p>
      <a type="button" className="btn btn-outline-warning"  href="#projects" style={{color:'white',position:'absolute', top:'39%', left:'38%', width: '150px'}}>SHOP NOW</a>
      <a type="button" className="btn btn-outline-warning"  href="#designs" style={{color:'white',position:'absolute', top:'39%', left:'51%', width: '150px'}}>CONTACT US</a>
    </div>
  
   </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
    )
}