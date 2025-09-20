import React, { use, useState } from 'react';
import Country from './Country';

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])
    const handleVisitedCountries = (country)=>{
        setVisitedCountries([...visitedCountries, country])

    }

    const handleVisitedFlag = (flag)=>{
       setVisitedFlags([...visitedFlags, flag])

    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center'>The countries I have liked: {countries.length}</h1>
            <h3 className='text-2xl font-semibold'>Total country visited: {visitedCountries.length}</h3>
            <h3 className='text-2xl font-semibold'>Total flag visited: {visitedFlags.length}</h3>
            <ol>
                  {
                visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
            }

            </ol>
            <div className='w-32 space-x-4 flex'>
                {
                    visitedFlags.map((flag, index)=> <img key={index} src={flag}></img>)
                }
            </div>

          
            <div className='grid grid-cols-3 gap-4 w-11/12 mx-auto my-10'>
                 {
                countries.map(country=> <Country key={country.cca3.cca3} country={country}
                       handleVisitedCountries={handleVisitedCountries}
                       handleVisitedFlag ={handleVisitedFlag }
                >
                 
                </Country>)
             }
            </div>
        </div>
    );
};

export default Countries;