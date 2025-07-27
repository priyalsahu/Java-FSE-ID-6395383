import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        name="Priyal Sahu" 
        school="LNCT College, Bhopal" 
        total={480} 
        goal={6} 
      />
    </div>
  );
}

export default App;
