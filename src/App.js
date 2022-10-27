import React from 'react';
import './App.css';
import { InputCurrent } from './component/InputCurrent';

function App() {

  const [rates, setRates] = React.useState({});
  const [fromPrice, setFromPrice] = React.useState({});
  const [toPrice, setToPrice] = React.useState({});
  const toCurrency = 'USD';
  const fromCurrency = 'RUB';

  React.useEffect(() => {
    fetch('https://cdn.cur.su/api/tcmb.json')
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
      })
      .catch((err) => {
        console.warn(err);
        alert('error')
      });
  }, []);

  function onChangeToPrice(value) {
    const price = value / rates[toCurrency];
    const result = price * rates[fromCurrency]
    setFromPrice(result)
    setToPrice(value)
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div>
          <p>{toCurrency}</p>
          <InputCurrent value={toPrice} onChangeValue={onChangeToPrice} />
        </div>

        <div>
          <p>{fromCurrency}</p>
          <InputCurrent value={fromPrice} />
        </div>
      </div>
      <button>Рассчитать</button>
    </>
  );
}

export default App;
