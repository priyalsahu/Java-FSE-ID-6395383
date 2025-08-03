import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 88 },
    { name: "Rahul", score: 66 },
    { name: "Dhoni", score: 78 },
    { name: "Pant", score: 55 },
    { name: "Hardik", score: 92 },
    { name: "Bumrah", score: 60 },
    { name: "Ashwin", score: 81 },
    { name: "Shami", score: 62 },
    { name: "Jadeja", score: 75 },
    { name: "Surya", score: 90 },
  ];

  const filteredPlayers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, idx) => (
          <li key={idx}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h2>Players with Score below 70</h2>
      <ul>
        {filteredPlayers.map((p, idx) => (
          <li key={idx}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
