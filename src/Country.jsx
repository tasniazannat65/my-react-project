import React, { useState } from 'react';

const Country = ({country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    
    return (
        <div className={` p-4 rounded-lg text-center shadow-sm space-y-4 ${visited ?'bg-blue-200': 'bg-gray-300'}`}>
            <img className='mx-auto rounded-lg w-full'  src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
            <h1 className='text-xl font-semibold'>{country?.name?.common}</h1>
            <p className='text-lg font-medium'>{country?.capital?.capital}</p>
            <p className='text-lg font-medium'>{country?.area?.area > 300000?"Big Country":"Small Country"}</p>
            <button className='p-4 bg-yellow-500 rounded-lg cursor-pointer text-white font-bold' onClick={handleVisited}>
                {
                    visited? 'Visited':'No Visited'
                }
            </button>
            <button className='p-4 bg-yellow-500 rounded-lg cursor-pointer text-white font-bold ml-4' onClick={()=> handleVisitedFlag(country?.flags?.flags?.png) }>Add Visited Flag</button>

            
        </div>
    );
};

export default Country;