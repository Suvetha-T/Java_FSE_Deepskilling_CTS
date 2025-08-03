import React from 'react';
import './App.css';

function App() {
  
  const offices = [
    {
      id: 1,
      name: "DBS",
      rent: 50000,
      address: "Chennai",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "Tech Park",
      rent: 70000,
      address: "Bangalore",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    
  ];

  return (
    <div className="App">
      
      <h1 className="app-heading">Office Space at Affordable Range</h1>
      
      <div className="office-list">
        
        {offices.map((office) => (
          <div key={office.id} className="office-card">
           
            <img 
              src={office.image} 
              alt={office.name} 
              className="office-image"
              width="25%"
              height="25%"
            />
            
            <div className="office-details">
              <h2>Name: {office.name}</h2>
              <h3 className="rent" style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
                Rent: Rs. {office.rent.toLocaleString()}
              </h3>
              <h3>Address: {office.address}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;