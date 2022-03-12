import Country from './Country';

const Countries = ({getFilterCountry,filteredCountry,setFilteredCountry}) => {
   const size = getFilterCountry.length;
    if(size === 0) return null
    if(filteredCountry === "") {
        return(
            <div>
                {getFilterCountry.map(country => <p key={country.name.common}>{country.name.common}</p>)}
            </div>
        )
    }
    if(size > 10) return <p>Too many matches, specify another filter</p>  
    if(size > 1 && size <= 10){
        return(
            <div>
                {getFilterCountry.map((country,index) => <p key={country.name.common}>{country.name.common}
                    <button onClick={() => setFilteredCountry(country.name.common)}>show</button></p>)}
            </div>
        )
    }
    if(size === 1){
        return(
            <Country country={getFilterCountry[0]}/>
        )
    }
 }
 
 export default Countries