import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '0c57d6e3959ca06daf0377823b8c2d84'; // Replace with your OpenWeather API key

  const fetchWeather = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather App</h1>

      <form onSubmit={fetchWeather} className="weather-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="weather-input"
        />
        <button type="submit" className="weather-button">Get Weather</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2 className="weather-city">{weather.name}</h2>

          {/* Weather Icon */}
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="weather-icon"
          />

          <p className="weather-temp">Temperature: {weather.main.temp}°C</p>
          <p className="weather-desc">Weather: {weather.weather[0].description}</p>
          <p className="weather-humidity">Humidity: {weather.main.humidity}%</p>
          <p className="weather-wind">Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
