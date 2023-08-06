import React from 'react'
import Image1 from './Images/renovation.jpg'
import Image2 from './Images/design8.jpg'
import Image3 from './Images/design3.jpg'

export function Services(){
    return(
    <>  
    <div>
      
        <p className='servicesText'>Elegance Interiors is a renowned design firm offering a comprehensive 
          range of services for renovation, office designs, home makeovers, and 
          captivating hospitality spaces. With an unwavering commitment to excellence
          , their team of talented designers transforms spaces into captivating and 
          functional environments. From revitalizing outdated spaces to creating inspiring 
          work environments and crafting stunning home designs.<br></br> <br></br>Elegance Interiors brings 
          creativity, attention to detail, and a deep understanding of their clients'
          needs to every project. Their expertise extends to designing immersive and 
          enchanting hospitality spaces, where ambiance and functionality seamlessly 
          intertwine. With a passion for excellence and a focus on client satisfaction,
          Elegance Interiors is a trusted name in the interior design industry, creating
          spaces that exude elegance and leave a lasting impression.</p>

        <img  className='Servrenovation' src= {Image1} alt= "renovation"/>
        <img className='Servresturaunt' src= {Image3} alt= "resturaunt"/>
        <img className='Servkitchen' src= {Image2} alt= "resturaunt"/>

    </div>
    </>

    ) 
}