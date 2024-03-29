import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

export default function Countries({ searchCountry, handleFavoriteCountry, favoriteCountry }) {
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
        <div className="w-[95%] mx-auto my-10">
            {
                searchCountry.message === 'Not Found' ? <>
                    <h2 className="text-xl text-red-600 text-center">Country not found, Please search again</h2>
                </> : <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
                    {
                        searchCountry[0] ? <>
                            {
                                searchCountry.map(country => <Country
                                    key={country.cca3}
                                    country={country}
                                    handleDisplayCountry={handleDisplayCountry}
                                    handleFavoriteCountry={handleFavoriteCountry}
                                    displayCountry={displayCountry}
                                    favoriteCountry={favoriteCountry}
                                ></Country>)
                            }
                        </> : <>
                            {
                                countries.map(country => <Country
                                    key={country.cca3}
                                    country={country}
                                    handleFavoriteCountry={handleFavoriteCountry}
                                    handleDisplayCountry={handleDisplayCountry}
                                    displayCountry={displayCountry}
                                    favoriteCountry={favoriteCountry}
                                ></Country>)
                            }
                        </>
                    }
                </div>
            }
        </div>
    )

}