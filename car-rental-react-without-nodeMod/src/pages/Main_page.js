import React, { Component } from 'react';

export default class Mainpage extends Component {
  render() {
    return (
      <div>
        <main>
            <form action="./reservation.html">
          <div className="hero">
            <h1>Welcome to India DriveHub</h1>
            <h3>Your One-Stop Shop for Car Rentals in India</h3>
            <div className="hero-buttons">
            <button onclick="return validate()" className="btn btn-primary" >Make a Reservation</button>
              <a href="./profile_detail.html" className="btn btn-secondary">Manage Customer Info</a>
              <a href="#" className="btn btn-tertiary">Explore Deals</a>
            </div>
          </div>
          </form>
        </main>
      </div>
    );
  }
}
