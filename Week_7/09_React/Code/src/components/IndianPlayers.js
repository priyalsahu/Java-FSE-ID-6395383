import React from "react";

const IndianPlayers = () => {
  const oddTeam = ["Virat", "Pant", "Ashwin", "Shami", "Surya"];
  const evenTeam = ["Rohit", "Rahul", "Dhoni", "Hardik", "Jadeja"];

 
  const [odd1, odd2, ...restOdd] = oddTeam;
  const [even1, even2, ...restEven] = evenTeam;

  const T20players = ["Rohit", "Virat", "Surya"];
  const RanjiPlayers = ["Pujara", "Rahane", "Jadeja"];

  
  const allPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team</h2>
      <p>{odd1}, {odd2}, {restOdd.join(", ")}</p>

      <h2>Even Team</h2>
      <p>{even1}, {even2}, {restEven.join(", ")}</p>

      <h2>All Indian Players (Merged)</h2>
      <ul>
        {allPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
