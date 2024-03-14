import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

export default function Countries({ searchCountry, displayError }) {
    const [countries, setCountries] = useState([]);
    const [displayCountry, setDisplayCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            })
    }, [])

    const handleDisplayCountry = (code) => {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then(res => res.json())
            .then(data => setDisplayCountry(data[0]))
    }

    return (
        <div className="w-[95%] mx-auto grid grid-cols-4 gap-10 my-10">
            {
                searchCountry[0] ? <>
                    {
                        searchCountry.map(country => <Country
                            key={country.cca3}
                            country={country}
                            handleDisplayCountry={handleDisplayCountry}
                            displayCountry={displayCountry}
                        ></Country>)
                    }
                </> : <>
                    {
                        countries.map(country => <Country
                            key={country.cca3}
                            country={country}
                            handleDisplayCountry={handleDisplayCountry}
                            displayCountry={displayCountry}
                        ></Country>)
                    }
                </>
            }
        </div>
    )

}