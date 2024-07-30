import React from 'react';

const WeatherResult = ({ weatherData }) => {

  console.log(weatherData);
  
  if (!weatherData) {
    return (
      <div className="not_found">
      </div>
    );
  }

  return (
    <>
      <p>Longitude : <span>{weatherData.coord.lon}</span></p>
      <p>Latitude: <span>{weatherData.coord.lat}</span> </p>
      <p> Température : <span> {weatherData.main.temp} °C</span> </p>

      <p> Humidité : <span> {weatherData.main.humidity} %</span> </p>
      <p> Vent : <span>  {weatherData.wind.speed} m/s</span> </p>
      <p> Pression : <span>  {weatherData.main.pressure} mbar</span> </p>
      <p> Visibilité : <span>  {weatherData.visibility} m</span> </p>
      <p> Couverture nuageuse : <span> {weatherData.clouds.all} % </span> </p>
    </>
    
  );
};

export default WeatherResult;
