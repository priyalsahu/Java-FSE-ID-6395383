import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = parseFloat(rupees) / 90; // Assuming 1 Euro = ₹90
    setEuros(euroValue.toFixed(2));
  };

  return (
    <div>
      <h2>💱 Currency Converter (INR ➡️ EUR)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in ₹"
        />
        <button type="submit">Convert</button>
      </form>
      {euros !== null && (
        <p>Converted Amount: €{euros}</p>
      )}
    </div>
  );
};

export default CurrencyConvertor;
