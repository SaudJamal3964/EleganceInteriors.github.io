import React from 'react'

export function List(){
  return(
     <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" id='list1' aria-current="page" href="#">View All (24)</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" id="list" href="#">Residential (09)</a>
        </li>
  
        <li className="nav-item">
          <a className="nav-link" id="list" href="#">Corporate (05)</a>
        </li>
 
        <li className="nav-item">
           <a className="nav-link" id="list">Restuarant (06)</a>
        </li>
  
        <li className="nav-item">
          <a className="nav-link" id="list">Industrial (04)</a>
        </li>
      </ul> 
    </>
    )
}