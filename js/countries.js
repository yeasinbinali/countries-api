const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add = 'country';
        countryDiv.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onclick=loadCountryDetail('${country.name.common}')>Details</button>
        `
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetail = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    const countryDetailContainer = document.getElementById('country-detail');
    console.log(country);
    countryDetailContainer.innerHTML = `
        <h1>Country Detail</h1>
        <img src="${country.flags.png}"/>
        <h2>${country.name.common}</h2>
        <h4>Capital: ${country.capital[0]}</h4>
        <h4>Population: ${country.population}</h4>
    `
}