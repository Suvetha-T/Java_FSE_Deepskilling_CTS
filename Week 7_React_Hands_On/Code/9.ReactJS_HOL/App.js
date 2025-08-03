import React, { useState } from 'react';
import './App.css';

function App() {
  const [flag, setFlag] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setFlag(!flag)} className="toggle-button">
        {flag ? 'Show Indian Players' : 'Show Player Scores'}
      </button>
      
      {flag ? <PlayerScores /> : <IndianPlayers />}
    </div>
  );
}

const PlayerScores = () => {
  const players = [
    { name: 'Mr. Jack', score: 50 },
    { name: 'Mr. Michael', score: 70 },
    { name: 'Mr. John', score: 40 },
    { name: 'Mr. Ann', score: 61 },
    { name: 'Mr. Elisabeth', score: 61 },
    { name: 'Mr. Sachin', score: 95 },
    { name: 'Mr. Dhoni', score: 100 },
    { name: 'Mr. Virat', score: 84 },
    { name: 'Mr. Jadeja', score: 64 },
    { name: 'Mr. Raina', score: 75 },
    { name: 'Mr. Rohit', score: 80 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div className="component">
      <h1>List of Players</h1>
      <ul className="player-list">
        {players.map((player, index) => (
          <li key={index}>
            {player.name} <span className="score">{player.score}</span>
          </li>
        ))}
      </ul>

      <h2>List of Players having Scores Less than 70</h2>
      <ul className="player-list">
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name} <span className="score">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const IndianPlayers = () => {
  const team = [
    'Sachin1',
    'Dhoni2',
    'Virat3',
    'Rohit4',cd
    'Yuvaraj5',
    'Raina6'
  ];

  const [first, second, third, fourth, fifth, sixth] = team;
  const oddTeamPlayers = [
    { position: 'First', name: first },
    { position: 'Third', name: third },
    { position: 'Fifth', name: fifth }
  ];
  const evenTeamPlayers = [
    { position: 'Second', name: second },
    { position: 'Fourth', name: fourth },
    { position: 'Sixth', name: sixth }
  ];

  const T20players = ['Mr. First Player', 'Mr. Second Player', 'Mr. Third Player'];
  const RanjiTrophyPlayers = ['Mr. Fourth Player', 'Mr. Fifth Player', 'Mr. Sixth Player'];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div className="component">
      <h1>Odd Players</h1>
      <ul className="player-list">
        {oddTeamPlayers.map((player, index) => (
          <li key={index}>
            {player.position} : <span className="player-name">{player.name}</span>
          </li>
        ))}
      </ul>

      <h2>Even Players</h2>
      <ul className="player-list">
        {evenTeamPlayers.map((player, index) => (
          <li key={index}>
            {player.position} : <span className="player-name">{player.name}</span>
          </li>
        ))}
      </ul>

      <h2>List of Indian Players Merged:</h2>
      <ul className="player-list">
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;