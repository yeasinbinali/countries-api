export default function Header({handleSearch}) {

    const handleSearchBtn = () => {
        const searchInput = document.getElementById('search-input');
        const searchText = searchInput.value;
        handleSearch(searchText);
        searchInput.value = '';
    }

    return (
        <>
            <div style={{ backgroundColor: '#D24545', color: 'white', padding: '20px 0', textAlign: 'center'}}>
                <h3 className="font-bold text-4xl" >Countries API</h3>
                <div className="w-5/6 md:w-1/2 mx-auto mt-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <input id="search-input" type="text" className="grow text-black text-xl" placeholder="Search Your Country" />
                        <button onClick={handleSearchBtn}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 opacity-70 text-black"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg></button>
                    </label>
                </div>
            </div>
        </>
    )
}