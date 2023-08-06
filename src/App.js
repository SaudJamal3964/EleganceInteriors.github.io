import './App.css';
import { Navbar } from './Components/Navbar';
import { Carousal } from './Components/Carousal';
import { Services } from './Components/Services';
import { List } from './Components/List';
import { Reviews } from './Components/Reviews';
import { Footer } from './Components/Footer';
import Image from './Components/Images/vidpic.webp';
import Image2 from './Components/Images/wood.webp';
import Image1 from './Components/Images/playbtn.png';
import Latest2 from './Components/Images/Latest3.jpg';
import Latest3 from './Components/Images/Latest4.jpg';
import Latest4 from './Components/Images/Lastest5.jpg';
import Latest5 from './Components/Images/Latest6.webp';
import Latest6 from './Components/Images/Latest7.jpg';
import Latest8 from './Components/Images/Latest9.jpg';
import Latest9 from './Components/Images/Lastest10.jpg';
import pic1 from './Components/Images/homeOffice.jpg'
import pic2 from './Components/Images/bathroom.webp'
import pic3 from './Components/Images/terrace.jpg'


function App() {
  return (
    <>
      <div style={{marginTop: '4.7rem'}}>
      <Carousal/>
      </div>

      <div id='firstheader'>
        <h1  id='welcome' style={{position: 'absolute', top:'120%', left: '2.5%'}}>WELCOME TO</h1>
        <h1  id='interiors' style={{position: 'absolute', top:'120%', left: '21.7%', color:'#B97612'}}>ELEGENCE INTERIORS</h1>
        <h4 id='smallHeader' style={{position: 'absolute', top:'134%', left: '2.5%'}}>We have been the leading interior designer since 1955</h4>
        <p id='introText' style={{position: 'absolute', top:'139%', left: '2.7%', color: 'gray'}}>Interior Design brings over four decades of expertise in interior design 
           directly to your home or office. Our experienced professionals are ready to
           assist you in selecting the ideal products and designs that exceed your expectations, 
           considering the colors and lighting of your environment.<br></br>
           <br></br>Given that our consultations occur within your personal space,
           we collaborate closely with you to envision a design solution that perfectly reflects your style,
           maximizes your available space, and aligns with your budget. Our dedicated team will provide
           guidance every step of the way.</p>
      </div>

      <div>
          <img src={Image2} alt='...' className='firstImg' style={{height:'200px', width:'320px', position:'absolute', top:'139%', left:'75%'}}/>
          <img  className='vidImg' src={Image} alt='...' />
          <img className='play' src={Image1} alt='...'/>
          <button className="btn1" type="button" style={{position:'absolute', top:'178%', left:'2.7%', padding: '9px 35px' ,borderRadius:'0px', letterSpacing:'1.2px', fontFamily:'sans-serif'}}>More About Us</button>
      </div>
      
      <div className='image'></div>
      <h1 className='servicesTitle'>OUR SERVICES</h1>
    
    <Services/>
    
    <h1 className='projectsheader'>LATEST</h1>
    <h1 className='projectsheader2'>PROJECTS</h1>
     
    <div  className= 'listDiv'>
      <List/>
    </div>

    <div className="card" id='card1'>
      <img src={Latest2}className="card-img-top" alt="..." />
        <h5 className="card_title">Marquee Bedroom</h5>
        <p className="textContent" >King Sized Bedroom | Designed by our marquee stylist Beckham Stathom at Barista Avenue, Sydney.</p>
    </div>

    <div className="card" id='card2'>
      <img src={Latest3}className="card-img-top" alt="..." />
        <h5 className="card_title">Illustrious Bedroom</h5>
        <p className="textContent" >The Dreamer's Sanctuary | Envisioned by our design luminary, Interior Designer Mia Anderson, at 1st Lane, Paris.</p>
    </div>
  
    <div className="card" id='card3'>
        <img src={Latest4}className="card-img-top" alt="..."  style={{height: '217px'}}/>
        <h5 className="card_title">Illustrious Bedroom</h5>
        <p className="textContent" >The Savory Symphony | Orchestrated by our culinary virtuoso, Chef Antonia Moretti, at Gastronomia Plaza, Rome.</p>
    </div>

    <div className="card" id='card4'>
        <img src={Latest8}className="card-img-top" alt="..." />
        <h5 className="card_title">Minimalistic Kitchen</h5>
        <p className="textContent" >The Seaside Haven | Fashioned by our coastal guru, Interior Designer Olivia Summers, at Ocean Breeze Avenue, Malibu.</p>
    </div>

    <div className="card" id='card5'>
        <img src={Latest6}className="card-img-top" alt="..." />
        <h5 className="card_title">Success sanctuary</h5>
        <p className="textContent" >The Productivity Retreat | Orchestrated by our workspace visionary, Architect Lucas Wright, at Zenith Heights, Vancouver.</p>
    </div>

    <div className="card" id='card6'>
        <img src={Latest5}className="card-img-top" alt="..."  style={{height: '217px'}}/>
        <h5 className="card_title">Success sanctuary</h5>
        <p className="textContent" >The Urban Hideaway | Styled by our café impresario, Barista Sofia Ramirez, at Java Junction, New York City.</p>
    </div>

    <div className="card" id='card7'>
        <img src={Latest9}className="card-img-top" alt="..."  style={{height: '217px'}}/>
        <h5 className="card_title">Marquee Bedroom</h5>
        <p className="textContent" >The Culinary Oasis | Curated by our gourmet virtuoso, Chef Isabella Sanchez, at Gastronomica Street, Barcelona.</p>
    </div>

    <div className="card" id='card8'>
        <img src={Latest2}className="card-img-top" alt="..." />
        <h5 className="card_title">Esteemed Bedroom</h5>
        <p className="textContent" >The Free Spirit Hideout | Crafted by our bohemian maestro, Stylist Maya Rivera, at Harmony Lane, Ibiza.</p>
    </div>
  
   <div className='divPic'></div>
   <h2 className='customerRevTitle' style={{position: 'absolute', left: '34.4%', top: '445%', color: 'white', letterSpacing: '2px', fontSize: '36px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>CUSTOMER REVIEWS</h2>

    <div> 
      <Reviews/>
    </div>

    <h2 className='luxuryTitle' style={{fontFamily: 'sans-serif', position: 'absolute', left: '3.2%', top: '540%',fontWeight: 'bold'}}>LUXURY</h2>
    <h2 className='luxuryTitle2' style={{fontFamily: 'sans-serif', position: 'absolute', left: '14%', top: '540%',fontWeight: 'bold', color: '#B97612'}}>DESIGNS</h2>
    <p className='luxuryText' style={{fontFamily: 'sans-serif', position: 'absolute', left: '50%', top: '541%', color: 'gray', letterSpacing: '1.6px'}}>Too many options confusing you to pick the best design?</p>  
    <button type="button" className="btn" id="consultBtn" style={{fontFamily: 'sans-serif', position: 'absolute', left: '88%', top: '540%', letterSpacing: '1.2px', fontSize: '12px', borderRadius: '0px'}}>CONSULT US</button>


    <div> 
      <div className="card"  id="designCard1" style={{width: '25rem', position: 'absolute', left: '2%', top: '560%'}}>
        <img src={pic1} className="card-img-top" alt="..." style={{height: '283.5px',borderRadius: '0px'}}/>
        <div className="card-body">
          <h5 className="card-title" id='cardTitles' style={{marginLeft: '15%', fontFamily: 'sans-serif' ,fontWeight: 'bold'}}>Elegant Office in your home</h5>
          <p className="card-text" style={{marginLeft: '5%', marginTop: '6%', color: 'gray'}}>Transform your home office into a stylish and productive workspace with the help of our professional interior design services. We understand the importance of creating a space that inspires creativity, fosters productivity, and reflects your personal taste.</p>
          <a href="#" className="btn" id='cardBtn' style={{marginLeft: '2%', border: 'none', fontFamily: 'sans-serif',fontWeight: 'bold', fontSize: '15px' }}>MORE INFO</a>
        </div>
      </div>   

      <div className="card"  id="designCard2" style={{width: '25rem', position: 'absolute', left: '35%', top: '560%'}}>
        <img src={pic2} className="card-img-top" alt="..." style={{borderRadius: '0px'}}/>
        <div div className="card-body">
          <h5 className="card-title" id='cardTitles' style={{marginLeft: '26%', fontFamily: 'sans-serif', fontWeight: 'bold'}}>Style your Bathroom</h5>
          <p className="card-text" style={{marginLeft: '5%', marginTop: '6%', color: 'gray'}}>Indulge in the epitome of luxury with our expert interior styling services for your bathroom. Our team of experienced designers will meticulously craft a personalized design that reflects your exquisite taste and lifestyle aspirations. We'll create a bathroom that radiates elegance.</p>
          <a href="#" className="btn" id='cardBtn' style={{marginLeft: '2%', border: 'none', fontFamily: 'sans-serif',fontWeight: 'bold', fontSize: '15px' }}>MORE INFO</a>
        </div>
      </div>   

      <div className="card" id="designCard3" style={{width: '25rem', position: 'absolute', left: '68%', top: '560%'}}>
        <img src={pic3} className="card-img-top" alt="..." style={{height: '283.5px',borderRadius: '0px'}}/>
        <div className="card-body">
          <h5 className="card-title" id='cardTitles' style={{marginLeft: '31%', fontFamily: 'sans-serif', fontWeight: 'bold'}}>A Spot at the Top</h5>
          <p className="card-text" style={{marginLeft: '5%', marginTop: '6%', color: 'gray'}}>Experience the sheer pleasure of your terrace transformed into a haven of tranquility with our expert design services. Our talented team will curate a captivating outdoor space that combines comfort and aesthetics, creating an inviting atmosphere.</p>
          <a href="#" className="btn" id='cardBtn' style={{marginLeft: '2%', border: 'none', fontFamily: 'sans-serif',fontWeight: 'bold', fontSize: '15px' }}>MORE INFO</a>
        </div>
      </div>  
    </div>
    
    <Navbar/>
    <Footer/>

    <div id='Top' style={{position: 'absolute', top:'0'}}>
    </div>

    <div id='services' style={{position: 'absolute', top:'192%'}}>
    </div>

    <div id='projects' style={{position: 'absolute', top:'305%'}}>
    </div>

    <div id='designs' style={{position: 'absolute', top:'522%'}}>
    </div>
    
    <div id='footer' style={{position: 'absolute', top:'650%'}}>
    </div>

    <a type="button" className="btn btn-outline-warning"  id= 'upButton' href="#Top">^</a>

   </>
  );
}

export default App;
