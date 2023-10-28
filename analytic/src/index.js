import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from '@mui/material/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Homepage extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Wilkommen zurück, Marie</h1>
        <h2>Hier sind die wichtigstens Informationen übers Nachhaltigkeitsgymnasium</h2>
        <Button variant="contained">Contained</Button>

        <div class="uebersicht">
          <div class="energieverbrauch">2 kWh/m2a</div>
          <div class="energieersparnis">8 kWh/m2a</div>
          <div class="Geldersparnis">243</div>
        </div>

        <div class="diagramme">
          <div class="energieverbrauchGrafik">2 kWh/m2a</div>
          <div class="jahresziele">8 kWh/m2a</div>
        </div>


        <div class="historie">
          <div>Historie</div>
        </div>

      </div>
    );
  }

}
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
