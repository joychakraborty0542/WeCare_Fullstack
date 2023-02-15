import React from 'react'
import { useNavigate, Link } from "react-router-dom";

export function NavBar() {
  return ( 
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand logo">Wecare</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div className='d-flex justify-content-end'>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-color d-flex align-items-center"> 
                <li class="nav-item">
                  <span>Call Us: 080 2233447</span>
                </li>                 
              </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}

export function CoachNavBar() {
  return ( 
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand logo">Wecare</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div className='d-flex justify-content-end'>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-color d-flex align-items-center">              
                <li class="nav-item ">                  
                  <Link class="nav-link" to="/userlogin">View Profile</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/userlogin">My Appoinments</Link>
                </li>  
                <li class="nav-item">
                  <span>Call Us: 080 2233447</span>
                </li> 
                <li class="nav-item">
                  <Link class="nav-link" to="/userlogin">Logout</Link>
                </li> 
              </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}


export function UserNavBar() {
  return ( 
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand logo">Wecare</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div className='d-flex justify-content-end'>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-color d-flex align-items-center">              
                <li class="nav-item ">                  
                  <Link class="nav-link" to="/userviewprofile" >View Profile</Link>
                  {/* <Link class="nav-link" to={{pathname:'/userviewprofile', state: {data:"true"}}} >View Profile</Link> */}
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/userlogin">My Appoinments</Link>
                </li>  
                <li class="nav-item">
                  <span>Call Us: 080 2233447</span>
                </li> 
                <li class="nav-item">
                  <Link class="nav-link" to="/userlogin">Logout</Link>
                </li> 
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

