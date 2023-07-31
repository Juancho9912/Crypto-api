import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TableCoins from './components/TableCoins';

function App() {

  const [coins, setCoins] = useState([]); 
  const [search, setSearch] = useState(''); 


  const getData = async () =>{
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    console.log(res.data);
    setCoins(res.data);
  }

  

  useEffect(() => {
    getData();

  },[]); //useEffect ejecuta una funcion apenas carga este componente

  return (
    <div className="container">
      <div className='row'>
      <h1 className='text-center text-secondary' >Search a Coin</h1>
      <input
          type="text"
          placeholder="Search a Coin"
          className="form-control bg-dark text-secondary border-0  text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableCoins coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
