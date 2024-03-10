export default function Country({country}) {
    console.log(country.name.common);
    const flag = country.flags.png;
    const countryName = country.name.common;

    return (
        <div style={{border: '1px solid #EEEEEE', borderRadius: '15px'}} className="p-5 text-center">
            <img className="w-40 h-20 mx-auto rounded-lg" src={flag} alt="flags" />
            <h4 className="text-black text-2xl text-center font-bold my-3 font-sans">{countryName}</h4>
            <button className="btn btn-outline btn-sm">View Details</button>
        </div>
    )

}