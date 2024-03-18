export default function Header({ handleSearch, favoriteCountry, handleNotVisited, visited }) {

    const handleSearchBtn = () => {
        const searchInput = document.getElementById('search-input');
        const searchText = searchInput.value;
        handleSearch(searchText);
        searchInput.value = '';
    }

    return (
        <>
            <div style={{ backgroundColor: '#D24545', color: 'white', padding: '20px 0', textAlign: 'center' }}>
                <h3 className="font-bold text-4xl" >Countries API</h3>
                <div className="w-5/6 md:w-1/2 mx-auto mt-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <input id="search-input" type="text" className="grow text-black text-xl" placeholder="Search Your Country" />
                        <button onClick={handleSearchBtn}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 opacity-70 text-black"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg></button>
                    </label>
                </div>
                {/* favorite countries cart */}
                <div className="drawer drawer-end indicator mt-5">
                    <span className="indicator-item badge bg-[#12372A] text-white border-none">{favoriteCountry.length}</span>
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button btn text-black bg-[white]">Favorite Country</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="overflow-x-auto menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Favorite countries */}
                            <h4 className="text-xl font-bold text-center">Favorite Countries : {favoriteCountry.length}</h4>
                            <hr className="w-[75%] mx-auto mt-3" />
                            <table className="table">
                                <tbody>
                                    {
                                        favoriteCountry.map((country, idx) =>
                                            <tr key={idx} className="hover">
                                                <th>{idx + 1}</th>
                                                <td className="text-md font-bold">{country.name.common}</td>
                                                <td><button onClick={() => handleNotVisited(country)} className="btn btn-sm">Not visited</button></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>

                            {/* Visited countries */}

                            <h4 className="text-xl font-bold text-center mt-5">Visited Countries : {visited.length}</h4>
                            <hr className="w-[75%] mx-auto mt-3" />
                            <table className="table">
                                <tbody>
                                    {
                                        visited.map((visitedCountryList, idx) =>
                                            <tr key={idx} className="hover">
                                                <th>{idx + 1}</th>
                                                <td className="text-md font-bold">{visitedCountryList.name.common}</td>
                                                <td>Visited</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {
                                favoriteCountry.map((country, idx) =>
                                    <div>
                                        <li key={idx} className="text-2xl text-black">{country.name.common}</li>
                                        <button>Not visited</button>
                                    </div>
                                )
                            }
                        </ul> */}
                    </div>
                </div>
            </div>
        </>
    )
}