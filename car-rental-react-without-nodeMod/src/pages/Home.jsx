import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

const Home = () => {
  return (
    <div className='body'>
        <>
  <header>
    <div className="container">
      <div className="logo">
        <a href="#" id="logo_name">
          <img src="images/small_logo.jpeg" alt="India DriveHub Logo" />
          <pre>{"  "}</pre>IndiaDriveHub
        </a>
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Sign In/Login</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <div className="hero">
      <h1>Welcome to India DriveHub</h1>
      <h3>Your One-Stop Shop for Car Rentals in India</h3>
      <div className="hero-buttons">
        <Link to="/reservation" className="btn btn-primary">
          Make a Reservation
        </Link>
        <Link to="/profile" className="btn btn-secondary">
          Manage Customer Info
        </Link>
        <a href="#" className="btn btn-tertiary">
          Explore Deals
        </a>
      </div>
    </div>
  </main>
</>

    </div>
  )
}

export default Home