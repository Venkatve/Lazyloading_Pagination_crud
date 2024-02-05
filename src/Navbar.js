import React from 'react';

import App from './App';


const Navbar = () => {
  return (
    
    <div>
    <nav className="navbar bg-primary navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="/">
            Home
            </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/feature">
            Features
            </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/contact">
           Contact
            </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href='/about' >
           About
            </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
    
  )
}

export default Navbar