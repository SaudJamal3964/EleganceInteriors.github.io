import React from 'react'
import LOGO from './Images/MainLOGO.png'
import pic1 from './Images/lr.jpg'
import pic2 from './Images/fbLogo.png'
import pic3 from './Images/instaLogo.png'
import pic4 from './Images/tweetLogo.png'
import pic5 from './Images/whatsLogo.png'
import pic6 from './Images/tele.webp'
import pic7 from './Images/building.jpg'
import pic8 from './Images/mailLogo.jpeg'
import pic9 from './Images/clockLogo.jpeg'
import pic10 from './Images/terraceroom.jpg'
import pic11 from './Images/Tvroom.webp'
import pic12 from './Images/msg.jpeg'



export function Footer(){

  function func(){
    const val = document.getElementById('mail');
    if(val.value == ""){
      alert('Could not send message');
    }
    else{
      prompt('Enter the code received on your Email')
    }
  }
  function func2(){
    const val = document.getElementById('msg');
    if(val.value == ""){
      alert('Could not send message');
    }
    else{
    alert('Message Sent');
    }
  }

    return(
    <>
      <div>

         <div className='footerDiv' style={{backgroundColor: '#121212', position: 'absolute', top:'660%', height: '570px', width: '1350px'}}>
         <img src={LOGO} style={{backgroundSize: 'cover', objectFit: 'cover', height: '75px', width: '85px', position:'absolute', top:'4%', left: '1%' }}/>

            <h2 className='footerTitle' style={{color: 'white', fontFamily: 'calibri', fontStyle: 'italic', fontWeight: 'bold', letterSpacing: '2px', marginTop: '3%', marginLeft: '8%'}}>ELEGANCE  INTERIORS</h2>
            <p className='footerText' style={{color: 'white', marginTop: '2%', marginLeft: '6%'}}>With a remarkable 41 years of experience in interior design,<br></br> Elegent Interiors is dedicated to bringing the expertise directly <br></br>to your home or office. Our team of skilled designers is equipped <br></br>to assist you in identifying the ideal products and designs that <br></br>perfectly suit your needs.</p>

      <div  id='footerCard' class="card" style={{width: '18rem', borderRadius: '0px', marginLeft: '6%', marginTop: '3%', borderStyle: 'none'}}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" style={{paddingLeft:'50px', backgroundColor: '#121212', borderRadius: '0px', color: 'white',letterSpacing: '1.5px'}}>(+021) 456 112 987</li>
          <li class="list-group-item" style={{paddingLeft:'50px', backgroundColor: '#121212', borderRadius: '0px', color: 'white'}}>Phase VIII Dha, Saba Avenue</li>
          <li class="list-group-item" style={{paddingLeft:'50px', backgroundColor: '#121212', borderRadius: '0px', color: 'white'}}>EleganceInterior@gmail.com</li>
          <li class="list-group-item" style={{paddingLeft:'50px', backgroundColor: '#121212', borderRadius: '0px', color: 'white'}}>Mon-Sat : 9:00 to 8:00 <br></br>Sunday Closed</li>
        </ul>
      </div>

        <h2 className='footerElements' style={{color: 'white', position: 'absolute', top: '8%', left: '44%', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '25px'}}>Popular Jobs</h2>
        <img src={pic1} className='footerElements' style={{backgroundSize: 'cover', objectFit: 'cover', height: '115px', width: '110px', position: 'absolute', top: '20%', left: '44%' }}/>
        <img src={pic10} className='footerElements' style={{backgroundSize: 'cover', objectFit: 'cover', height: '115px', width: '110px', position: 'absolute', top: '47%', left: '44%' }}/>
        <img src={pic11} className='footerElements' style={{backgroundSize: 'cover', objectFit: 'cover', height: '115px', width: '110px', position: 'absolute', top: '77%', left: '44%' }}/>

        <p className='footerElements' style={{position: 'absolute', top: '22%', left: '53%', color: 'gray'}}>Cozy way to style your living room <br></br>to relax with your family</p>
        <p className='footerElements' style={{position: 'absolute', top: '34%', left: '53%', color: '#CB9543', fontWeight: 'bold', fontStyle: 'sans-serif'}}>by Martin Beck | 14 Aug '20</p>
        
        <p className='footerElements' style={{position: 'absolute', top: '48%', left: '53%', color: 'gray'}}>A view from the sky, calming the soul  <br></br>and relshing the moments.</p>
        <p className='footerElements' style={{position: 'absolute', top: '61%', left: '53%', color: '#CB9543', fontWeight: 'bold', fontStyle: 'sans-serif'}}>by Chris Paul | 12 Jan '21</p>
        
        <p className='footerElements' style={{position: 'absolute', top: '78%', left: '53%', color: 'gray'}}>Chill out with your friends and have great <br></br>movie night with our style of setting</p>
        <p className='footerElements' style={{position: 'absolute', top: '91%', left: '53%', color: '#CB9543', fontWeight: 'bold', fontStyle: 'sans-serif'}}>by Hannah Parker | 21 Sept '23</p>
        
        <h2 className='footerContacts' style={{color: 'white', position: 'absolute', top: '8%', left: '75%', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '25px'}}>Have a chat with us!</h2>
        <p className='footerContacts1' style={{position: 'absolute', top: '21%', left: '75%', color: 'gray', width: '320px'}}>Let us know your suggestions. We are always here to make your world a happier and a comforting place.</p>
        <input type='text' placeholder='Feedback Here...' id= 'msg' style={{position: 'absolute', top: '40%', left: '75%', color: 'gray', height: '40px', width: '300px'}}/>
        <p className='footerContacts2' style={{position: 'absolute', top: '55%', left: '75%', color: 'gray', fontStyle: 'italic'}}>Subscribe to become our premium customer</p>
        <input type='text' placeholder='@gmail.com' id= 'mail'  style={{position: 'absolute', top: '66%', left: '75%', color: 'gray', height: '40px', width: '300px'}}/>

      <div style={{marginTop: '109px'}} className='copyRightsdiv'>
        <nav class="navbar bg-transparent">
          <div class="container-fluid" style={{backgroundColor: '#090808', height: '60px'}}>
            <a id='copyRightsText' class="navbar-brand" href="#" style={{color: 'gray', paddingLeft: '2%'}}>© 2023 Elegence interiors, All Rights Reserved by</a>
            <p className='copyRightsText2' style={{color: 'gray',position:'absolute', left: '35.5%', top: '29%', fontSize: '21px', fontFamily: 'sans-serif', color: '#c48931'}}>WoodWorks</p>
            <img src={pic2} className='socialLogos1' style={{backgroundSize: 'cover', objectFit: 'cover', height: '30px', width: '30px', borderRadius: '50px', position:'absolute', left: '81%', top: '29%'}}/>
            <img src={pic3} className='socialLogos2' style={{backgroundSize: 'cover', objectFit: 'cover', height: '30px', width: '30px', borderRadius: '50px', position:'absolute', left: '84%', top: '29%'}}/>
            <img src={pic4} className='socialLogos3' style={{backgroundSize: 'cover', objectFit: 'cover', height: '30px', width: '30px', borderRadius: '50px', position:'absolute', left: '87%', top: '29%'}}/>
            <img src={pic5} className='socialLogos4' style={{backgroundSize: 'cover', objectFit: 'cover', height: '30px', width: '30px', borderRadius: '50px', position:'absolute', left: '90%', top: '29%'}}/>
          </div>
        </nav>
      </div>


      </div>
        <img className='footerlogos1'  src={pic6} style={{mixBlendMode:'lighten', backgroundSize: 'cover', objectFit: 'cover', height: '30px', width: '30px', borderRadius: '60px', position:'absolute', left: '6%', top: '706.5%', borderStyle: 'none'}}/>
        <img className='footerlogos2' src={pic7} style={{mixBlendMode:'lighten', backgroundSize: 'cover', objectFit: 'cover', height: '32px', width: '32px', borderRadius: '60px', position:'absolute', left: '6%', top: '712%', borderStyle: 'none'}}/>
        <img className='footerlogos3' src={pic8} style={{mixBlendMode:'lighten', backgroundSize: 'cover', objectFit: 'cover', height: '32px', width: '32px', borderRadius: '60px', position:'absolute', left: '6%', top: '719%', borderStyle: 'none'}}/>
        <img className='footerlogos4' src={pic9} style={{mixBlendMode:'lighten',  backgroundSize: 'cover', objectFit: 'cover', height: '32px', width: '32px', borderRadius: '60px', position:'absolute', left: '6%', top: '725.5%', borderStyle: 'none'}}/>
        <button><img src={pic12}  className='sendBtn2' onClick={func} style={{backgroundSize: 'cover', objectFit: 'cover', height: '30px', width: '30px', position:'absolute', left: '94.5%', top: '723%', borderStyle: 'none'}}/></button>
        <button><img src={pic12}  className='sendBtn1' onClick={func2} style={{backgroundSize: 'cover', objectFit: 'cover', height: '30px', width: '30px', position:'absolute', left: '94.5%', top: '698%', borderStyle: 'none'}}/></button>    
      </div>
    </>    
    )
}