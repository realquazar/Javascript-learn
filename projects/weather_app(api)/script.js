document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMsg = document.getElementById("error-message");

    const API_KEY = "95cb1ae3be9653b98c3ff410cf3c1f02";

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim()
        if(!city) return;

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }
        
    })

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        const response = await fetch(url);
        console.log(typeof response);
        console.log(response);

        if(!response.ok){
            throw new Error("City not found");
        }
        const data = await response.json();
        return data;        
    }

    function displayWeatherData(data) {
        console.log(data);
        const {name, main, weather} = data
        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature: ${main.temp}`;
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`;        

        weatherInfo.classList.remove("hidden");
        errorMsg.classList.add("hidden");
        

    }

    function showError() {
        weatherInfo.classList.remove("hidden");
        errorMsg.classList.add("hidden");        
    }

})
