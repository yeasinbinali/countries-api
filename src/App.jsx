import { useState } from 'react';
import './App.css'
import Countries from './main/Countries';
import Header from './main/Header';

function App() {
  const [favoriteCountry, setFavoriteCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState([]);
  const [visited, setVisited] = useState([]);
  const [status, setStatus] = useState(false);

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

  const handleNotVisited = (visitedCountry) => {
    const remainingCountry = favoriteCountry.filter(selectedCountry => selectedCountry.cca3 !== visitedCountry.cca3);
    setFavoriteCountry(remainingCountry);
    setVisited([...visited, visitedCountry]);
  }

  return (
    <>
      <Header handleNotVisited={handleNotVisited} visited={visited} favoriteCountry={favoriteCountry} handleSearch={handleSearch}></Header>
      <Countries favoriteCountry={favoriteCountry} handleFavoriteCountry={handleFavoriteCountry} searchCountry={searchCountry}></Countries>
    </>
  )
}

export default App;
