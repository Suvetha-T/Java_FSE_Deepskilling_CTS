import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('Euro');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount");
      return;
    }

    const amountNum = parseFloat(amount);
    let result;
    
    if (currency === 'Euro') {
      
      result = amountNum / 90;
      alert(`Converting to Euro. Amount is ${result.toFixed(2)}`);
    } else {
      
      result = amountNum * 90;
      alert(`Converting to INR. Amount is ${result.toFixed(2)}`);
    }
    
    setConvertedAmount(result.toFixed(2));
  };

  return (
    <div className="currency-convertor">
      <h2>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Amount:
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Currency:
            <select 
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="Euro">INR to Euro</option>
              <option value="INR">Euro to INR</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      
      {convertedAmount !== null && (
        <div className="result">
          <h3>Converted Amount: {convertedAmount} {currency === 'Euro' ? 'Euro' : 'INR'}</h3>
        </div>
      )}
    </div>
  );
};

export default CurrencyConvertor;