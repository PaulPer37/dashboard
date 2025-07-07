// src/index.ts
import axios from 'axios';
import { OpenMeteoResponse } from './types/DashboardTypes';

const fetchWeatherData = async (latitude: number, longitude: number): Promise<OpenMeteoResponse> => {
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m`);
    return response.data;
};

const displayWeatherData = async () => {
    const latitude = 35.6895; // Example latitude for Tokyo
    const longitude = 139.6917; // Example longitude for Tokyo
    const weatherData = await fetchWeatherData(latitude, longitude);
    
    console.log(`Weather data for ${weatherData.latitude}, ${weatherData.longitude}:`);
    console.log(weatherData.hourly);
};

displayWeatherData();