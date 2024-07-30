
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

    <h1 className="title"> Prévision Météorologique Locale  </h1>

    <section>
        <h1 className="section-title">Météo</h1>

        <WeatherForm onSubmit={fetchWeather} />

        <div className="result">
            {isLoading ? <Loader /> : <WeatherResult weatherData={weatherData} />}
        </div>

    </section>

    </>
  );
};

export default App;

