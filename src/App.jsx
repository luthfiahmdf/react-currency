import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [curr, setCurr] = useState("");
  const getCurrency = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}apikey=${
          import.meta.env.VITE_API_KEY
        }&symbols=CAD,IDR,CHF,JPY,EUR,GBP`
      );
      setCurr(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCurrency();
  }, []);
  const WeBuy = (curr) => (parseFloat(curr) + 5 / 100).toFixed(4);
  const WeSell = (curr) => (parseFloat(curr) - 5 / 100).toFixed(4);
  return (
    <>
      <div>
        <p>BASE = 1{curr.base}</p>
        <table>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>

          <tr>
            <td>CAD</td>
            <td>{WeBuy(curr?.rates?.CAD)}</td>
            <td>{parseFloat(curr?.rates?.CAD)}</td>
            <td>{WeSell(curr?.rates?.CAD)}</td>
          </tr>

          <tr>
            <td>IDR</td>
            <td>{WeBuy(curr?.rates?.IDR)}</td>
            <td>{parseFloat(curr?.rates?.IDR)}</td>
            <td>{WeSell(curr?.rates?.IDR)}</td>
          </tr>

          <tr>
            <td>CHF</td>
            <td>{WeBuy(curr?.rates?.CHF)}</td>
            <td>{parseFloat(curr?.rates?.CHF)}</td>
            <td>{WeSell(curr?.rates?.CHF)}</td>
          </tr>

          <tr>
            <td>JPY</td>
            <td>{WeBuy(curr?.rates?.JPY)}</td>
            <td>{parseFloat(curr?.rates?.JPY)}</td>
            <td>{WeSell(curr?.rates?.JPY)}</td>
          </tr>

          <tr>
            <td>EUR</td>
            <td>{WeBuy(curr?.rates?.EUR)}</td>
            <td>{parseFloat(curr?.rates?.EUR)}</td>
            <td>{WeSell(curr?.rates?.EUR)}</td>
          </tr>

          <tr>
            <td>GBP</td>
            <td>{WeBuy(curr?.rates?.GBP)}</td>
            <td>{parseFloat(curr?.rates?.GBP)}</td>
            <td>{WeSell(curr?.rates?.GBP)}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
