function Country({ country, handleDisplayCountry, displayCountry, handleFavoriteCountry }) {
    const flag = country.flags.png;
    const countryName = country.name.common;
    const countryCca3 = country.cca3;

    return (
        <>
            <div style={{ border: '1px solid #EEEEEE', borderRadius: '15px' }} className="p-5 text-center">
                <img className="w-50 h-20 mx-auto rounded-lg" src={flag} alt="flags" />
                <h4 className="text-black text-xl md:text-2xl text-center font-bold my-3 font-sans">{countryName}</h4>
                <div className="lg:flex justify-around">
                    <div className="mb-2 lg:mb-0">
                        <button onClick={() => handleFavoriteCountry(country)} className="btn bg-[#12372A] text-white btn-xs md:btn-sm">Add to List</button>
                    </div>
                    <div>
                        <button
                            className="btn btn-outline btn-xs md:btn-sm"
                            onClick={() => {
                                handleDisplayCountry(countryCca3);
                                document.getElementById('my_modal_5').showModal();
                            }}
                        >
                            View Details
                        </button>
                        <dialog id="my_modal_5" className="modal modal-middle">
                            <div className="modal-box text-black">
                                <img style={{ border: '1px solid black' }} className="w-40 h-20 mx-auto rounded-lg" src={displayCountry?.flags?.png} alt="flags" />
                                <h3 className="font-bold text-black text-2xl md:text-3xl lg:text-4xl mt-3">{displayCountry?.name?.common}</h3>

                                <h4 className="text-black text-md mt-3">Official name: <strong>{displayCountry?.name?.official}</strong></h4>

                                <p className="mt-2">Capital: <strong>{displayCountry?.capital}</strong> | Area: <strong>{displayCountry?.area}</strong></p>

                                <p className="mt-2">Population: <strong>{displayCountry?.population}</strong> | Region: <strong>{displayCountry?.region}</strong></p>

                                <p className="mt-2">Start of week: <strong>{displayCountry?.startOfWeek}</strong> | Fifa: <strong>{displayCountry?.fifa ? displayCountry?.fifa : 'None'}</strong></p>

                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Country;