import React from 'react'
import '../Reservation.css';

const Reservation = () => {
  return (
    <div className='body'>
        <>
  <header>
    <h1>India DriveHub</h1>
    <nav>
      <a href="#">Deals</a>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  <section className="search-section">
    <div className="search-form">
      <h2>Book Your Ride</h2>
      <form action="./available_cars.html">
        <label htmlFor="from">From:</label>
        <input type="date" id="from" />
        <label htmlFor="to">To:</label>
        <input type="date" id="to" />
        <label htmlFor="city">City:</label>
        <input type="text" id="city" />
        <label htmlFor="state">State:</label>
        <select id="state">
          <option />
          <option>AndhraPradesh</option>
          <option>Telangana</option>
          <option>Karnataka</option>
          <option>Tamilnadu</option>
          <option>Kerala</option>
        </select>
        <button type="submit" onclick="return validate()">
          Search Cars
        </button>
      </form>
    </div>
  </section>
 
</>

    </div>
  )
}

export default Reservation