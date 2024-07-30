import React from 'react';

const WeatherResult = ({ weatherData }) => {

  console.log(weatherData);
  
  if (!weatherData) {
    return (
      <div>
        <h2>Aucun élément retrouvé</h2>
      </div>
    );
  }

  return (
    <div className="weather-details">
      <h2>Longitude : <span>{weatherData.coord.lon}</span></h2>
      <h2>Latitude: <span>{weatherData.coord.lat}</span> </h2>

    <hr />
      <h2>Temperature : <span>{weatherData.main.temp} °C</span> </h2>
      <h2>Indicatif : <span>{weatherData.sys.country} </span> </h2>
    </div>
    
  );
};

export default WeatherResult;
