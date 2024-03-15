import { useState } from 'react';
import './App.css'
import Countries from './main/Countries';
import Header from './main/Header';

function App() {
  const [favoriteCountry, setFavoriteCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState([]);

  const handleSearch = (text) => {
    fetch(`https://restcountries.com/v3.1/name/${text}`)
      .then(res => res.json())
      .then(data => setSearchCountry(data))
  }

  const handleFavoriteCountry = (countryData) => {
    const newArr = favoriteCountry.find(country => country.cca3 === countryData.cca3);
    if (newArr) {
      const filteredArr = favoriteCountry.filter(country => country.cca3 !== countryData.cca3);
      setFavoriteCountry(filteredArr);
    }
    else {
      setFavoriteCountry([...favoriteCountry, countryData]);
    }
  }

  return (
    <>
      <Header favoriteCountry={favoriteCountry} handleSearch={handleSearch}></Header>
      <Countries handleFavoriteCountry={handleFavoriteCountry} searchCountry={searchCountry}></Countries>
    </>
  )
}

export default App;
