export default function Country({ country, handleDisplayCountry, displayCountry }) {
    const flag = country.flags.png;
    const countryName = country.name.common;
    const countryCca3 = country.cca3;

    console.log(displayCountry);

    return (
        <>
            <div style={{ border: '1px solid #EEEEEE', borderRadius: '15px' }} className="p-5 text-center">
                <img className="w-40 h-20 mx-auto rounded-lg" src={flag} alt="flags" />
                <h4 className="text-black text-2xl text-center font-bold my-3 font-sans">{countryName}</h4>
                <div>
                    <button
                        className="btn btn-outline btn-sm"
                        onClick={() => {
                            handleDisplayCountry(countryCca3);
                            document.getElementById('my_modal_5').showModal();
                        }}
                    >
                        View Details
                    </button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box text-black">
                            <img className="w-40 h-20 mx-auto rounded-lg" src={displayCountry?.flags?.png} alt="flags" />
                            <h3 className="font-bold text-black text-4xl mt-3">{displayCountry?.name?.common}</h3>
                            <p className="mt-2">Capital: {displayCountry?.capital}</p>
                            <p className="mt-2">Region: {displayCountry?.region}</p>
                            <p className="mt-2">Population: {displayCountry?.population}</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </>
    )

}