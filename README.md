# Weather App

A simple weather application built with React, using the OpenWeatherMap API to fetch and display real-time weather data for any city entered by the user.

## Features
- Search for current weather by city.
- Display of temperature, humidity, wind speed, and weather condition description.
- Dynamic weather icons based on real-time conditions (e.g., sunny, cloudy).
- Background image and styling for a modern user interface.
  
## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client to make API calls.
- **OpenWeatherMap API**: Used to fetch weather data.
- **CSS**: Styling the app with a responsive layout.

## How It Works
Users can type in the name of a city to get real-time weather information, which includes:
- City name
- Temperature in Celsius
- Weather description
- Humidity percentage
- Wind speed
- Dynamic weather icons representing the conditions

## Installation and Setup

### Prerequisites:
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Obtain an OpenWeatherMap API key**:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/) and generate an API key.

4. **Add your API key**:
   Open the `App.js` file and replace the placeholder `YOUR_API_KEY` with your actual API key:

   ```javascript
   const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API key
5**Screenshots**
![Screenshot 2024-10-07 170255](https://github.com/user-attachments/assets/82b812f7-2ce2-4df1-afac-9724de5c8b78)

<img width="959" alt="image" src="https://github.com/user-attachments/assets/29d8f63f-bbe8-4881-8d65-630073fbb5ce">

