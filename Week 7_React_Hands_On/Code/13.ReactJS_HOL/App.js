import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="section">
        <h1>Course Details</h1>
        <div className="course">
          <h2>Angular</h2>
          <p>4/5/2021</p>
        </div>
        <div className="course">
          <h2>React</h2>
          <p>6/3/2021</p>
        </div>
      </div>

      <hr className="divider" />

      <div className="section">
        <h1>Book Details</h1>
        <ul className="book-list">
          <li>
            <strong>Master React</strong>
            <p>670</p>
          </li>
          <li>
            <strong>Deep Dive into Angular 11</strong>
            <p>800</p>
          </li>
          <li>
            <strong>Mongo Essentials</strong>
            <p>450</p>
          </li>
        </ul>
      </div>

      <hr className="divider" />

      <div className="section">
        <h1>Blog Details</h1>
        <div className="blog-post">
          <h2>React Learning</h2>
          <p><strong>Stephen Biz</strong></p>
          <p>Welcome to learning React!</p>
        </div>
        <div className="blog-post">
          <h2>Installation</h2>
          <p><strong>Schewzdenier</strong></p>
          <p>You can install React from npm.</p>
        </div>
      </div>
    </div>
  );
}

export default App;