import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  
  const flights = [
    { id: 1, airline: 'Delta', departure: 'New York', arrival: 'London', price: 550 },
    { id: 2, airline: 'United', departure: 'Chicago', arrival: 'Paris', price: 650 },
    { id: 3, airline: 'American', departure: 'Los Angeles', arrival: 'Tokyo', price: 850 }
  ];

  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedFlight(null);
  };

  
  const handleBookFlight = () => {
    alert(`Flight ${selectedFlight.airline} booked successfully!`);
    setSelectedFlight(null);
  };

  
  let authButton = null;
  if (isLoggedIn) {
    authButton = <button onClick={handleLogout}>Logout</button>;
  } else {
    authButton = <button onClick={handleLogin}>Login</button>;
  }

  return (
    <div className="app">
      <header>
        <h1>Flight Booking System</h1>
        {authButton}
      </header>

      <main>
        
        {!isLoggedIn && (
          <div className="guest-view">
            <h2>Available Flights</h2>
            <ul className="flight-list">
              {flights.map(flight => (
                <li key={flight.id}>
                  <h3>{flight.airline}</h3>
                  <p>{flight.departure} → {flight.arrival}</p>
                  <p>Price: ${flight.price}</p>
                </li>
              ))}
            </ul>
            <p className="login-prompt">Please login to book flights.</p>
          </div>
        )}

        
        {isLoggedIn ? (
          <div className="user-view">
            <h2>Book Your Flight</h2>
            <div className="flight-selection">
              <label>Select a flight:</label>
              <select 
                onChange={(e) => setSelectedFlight(flights.find(f => f.id === parseInt(e.target.value)))}
                defaultValue=""
              >
                <option value="" disabled>Choose a flight</option>
                {flights.map(flight => (
                  <option key={flight.id} value={flight.id}>
                    {flight.airline} - {flight.departure} to {flight.arrival} (${flight.price})
                  </option>
                ))}
              </select>
            </div>

            
            {selectedFlight ? (
              <div className="booking-summary">
                <h3>Booking Summary</h3>
                <p>Airline: {selectedFlight.airline}</p>
                <p>Route: {selectedFlight.departure} → {selectedFlight.arrival}</p>
                <p>Price: ${selectedFlight.price}</p>
                <button onClick={handleBookFlight}>Confirm Booking</button>
              </div>
            ) : null}
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default App;