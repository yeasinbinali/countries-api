import { useState } from "react";

export default function Country({ country }) {
    // console.log(country.name.common);
    const flag = country.flags.png;
    const countryName = country.name.common;

    const [displayCountry, setDisplayCountry] = useState([]);

    const handleCountryDetails = async (name) => {
        const country = `https://restcountries.com/v3.1/name/${name}`;
        const res = await fetch(country);
        const data = await res.json();
        setDisplayCountry(data[0]);
    }
    console.log(displayCountry);

    return (
        <>
            <div style={{ border: '1px solid #EEEEEE', borderRadius: '15px' }} className="p-5 text-center">
                <img className="w-40 h-20 mx-auto rounded-lg" src={flag} alt="flags" />
                <h4 className="text-black text-2xl text-center font-bold my-3 font-sans">{countryName}</h4>
                <button
                    className="btn btn-outline btn-sm"
                    onClick={() => {
                        handleCountryDetails(countryName);
                        document.getElementById('my_modal_5').showModal();
                    }}
                >
                    View Details
                </button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box text-black">
                        <h3 className="font-bold text-black text-lg">Hello</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

            <script>

            </script>
        </>
    )

}