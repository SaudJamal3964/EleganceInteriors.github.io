import React from 'react'
import LOGO from './Images/MainLOGO.png'

export function Navbar(){
  return(
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id= 'Nav'>
        <img src={LOGO} className='Logo' />
          <div className="container-fluid">
            <a className="navbar-brand" id= 'Title' href="#">Elegance Interiors</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{letterSpacing:'3px', fontSize:'12px', paddingLeft:'14%', fontWeight: 'bold'}}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">HOME</a>
              </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li> */}
              <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginLeft:'26px'}}>
                SHOP
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#projects">Projects</a></li>
                <li><a className="dropdown-item" href="#designs">Designs</a></li>
                <li><a className="dropdown-item" href="#footer">Locations</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginLeft:'25px'}}>
              SERVICES
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#services">Office Designs</a></li>
                <li><a className="dropdown-item" href="#services">House Designs</a></li>
                <li><a className="dropdown-item" href="#services">Renovation</a></li>
              </ul>
            </li>
        
            <li className="nav-item">
              <a className="nav-link " style={{marginLeft: '25px', cursor: 'pointer'}}>YOUR CART</a>
            </li>
          </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-warning" type="submit" style={{fontSize: '13px',padding: '1px 15px', letterSpacing: '1.5px'}}>Search</button>
            </form>

          </div>
        </div>
    </nav>
  </>
  )
}