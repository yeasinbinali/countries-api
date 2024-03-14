import { useState } from 'react';
import './App.css'
import Countries from './main/Countries';
import Header from './main/Header';

function App() {
  const [searchCountry, setSearchCountry] = useState([]);

  const handleSearch = (text) => {
    fetch(`https://restcountries.com/v3.1/name/${text}`)
      .then(res => res.json())
      .then(data => setSearchCountry(data))
  }
  
  return (
    <>
      <Header handleSearch={handleSearch}></Header>
      <Countries searchCountry={searchCountry}></Countries>
    </>
  )
}

export default App;
