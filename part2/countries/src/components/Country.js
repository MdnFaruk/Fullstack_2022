import Weather from './Weather'

const Country = ({country}) => { 

    return (
    <>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital} <br /> area {country.area}</p>
        <p><b>languages:</b></p>
        <ul>
        {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
        </ul>
        <img src={country.flags.png} alt={country.flag} style={{ width: "40%" }}></img>
        <Weather capital={country.capital}/>
    </>) 
}

export default Country  