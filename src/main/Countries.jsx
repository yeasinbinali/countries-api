import { useEffect } from "react";
import { useState } from "react"
import Country from "./Country";

export default function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div className="w-[95%] mx-auto grid grid-cols-4 gap-10 my-10">
            {
                countries.map(country => <Country country = {country}></Country>)
            }
        </div>
    )

}