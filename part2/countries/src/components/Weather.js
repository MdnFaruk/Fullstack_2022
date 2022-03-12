import { useState,useEffect } from 'react';
import axios from 'axios'

const Weather = ({capital}) => {
    const [weatherInfo, setWeatherInfo] = useState({})

    useEffect(() => {
        axios
          .get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
          .then(response => {
              let weather = {
                temp : response.data.main.temp,
                icon : response.data.weather[0].icon,
                wind : response.data.wind.speed
              }
            setWeatherInfo(weather)
          })
      }, [capital])

    const {temp, icon, wind} = weatherInfo

    if(Object.keys(weatherInfo).length === 0) return<p>Loading...</p>
    return (
        <>  
            <h2>Weather in {capital}</h2>
            <p>temperature {temp}&#176;C</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
            alt="weather" />
            <p>wind {wind} m/s</p>
        </>) 
}

export default Weather