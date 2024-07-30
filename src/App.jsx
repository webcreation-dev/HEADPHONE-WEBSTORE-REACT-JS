
import "./App.css";

import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherResult from './components/WeatherResult';
import { getWeather } from './services/weather';
import Loader from './components/Loader';

const App = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (city) => {
    
    try {
      setIsLoading(true);
      const data = await getWeather(city);
      setWeatherData(data);

      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <>

        <h1 class="title"> Prévision Météorologique Locale  </h1>

        <section>
            <h1 class="section-title">Météo</h1>

            <form action="" method="GET">
                <label for="text">Ville</label>
                {/* <input type="text" name="city" placeholder="Entre le nom de la ville"> */}
            </form>

            <div class="preloader">

                <div class="loader">
                    <div class="spinner"></div>
                </div>

                <p> Température : <span>25°C</span> </p>
                <p> Humidité : <span>88 %</span> </p>
                <p> Vent : <span>18 km/h</span> </p>
                <p> Pression : <span>1016 mbar</span> </p>
                <p> Précipitation : <span>2 %</span> </p>
                <p> Nébulosité : <span>Partiel nuageux</span> </p>

            </div>

            {isLoading ? <Loader /> : <WeatherResult weatherData={weatherData} />}

            <button type="submit">Envoyer</button>
            
        </section>
    

    {/* <div className="App">
      <header className="App-header">
        <h1><img src="/open_weather.png" width={250} alt="" /></h1>
        
        
        <div className="weather-container">
          <div className="weather-column">
            <WeatherForm onSubmit={fetchWeather} />
          </div>
          <div className="weather-column">
          {isLoading ? <Loader /> : <WeatherResult weatherData={weatherData} />}
          </div>
        </div>
      </header>
    </div> */}

    </>
  );
};

export default App;

