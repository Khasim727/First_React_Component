import React from 'react'
//  import { Link } from 'react-router-dom'
 

export default function Navbar(props) {
  return (
     
    // this is nav bar content
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid container-light">
      {/* <Link className="navbar-brand" to="/">Khasim</Link> */}
      <a className="navbar-brand" href="#">Khasim</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link"  to="/">{props.name}</Link> */}
            <a className="nav-link"  href="/">{props.name}</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/about">About</Link> */}
            <a className="nav-link" href="#">About</a>
          </li> 
          
          
        </ul>
         <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.dark}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
         </div>
      </div>
    </div>
  </nav>
  )
}
