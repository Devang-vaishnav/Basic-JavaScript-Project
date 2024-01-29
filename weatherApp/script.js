const apiKey = '35c55e257582abbde5e02a4df02470a2';
const button = document.querySelector('button');
const input = document.querySelector('input');
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const weatherIcon = document.querySelector('.weather-icon');
const error = document.querySelector('.error');
const weather = document.querySelector('.weather');

button.addEventListener('click',() => {
    const inputCity = input.value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`;
    input.value='';

    fetch(URL)
    .then((response) => {
        error.style.display = 'none';
        return response.json();
    })
    .then((data) => {
        console.log(data.status);
        temp.innerHTML = `${Math.round(data.main.temp)}°C`;
        city.innerHTML = data.name;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${Math.round(data.wind.speed)} km/hr`;
        let weatherType = data.weather[0].main;
        console.log("Real weather : " + weatherType);
        if(weatherType !== 'Clear' && weatherType !== 'Clouds' && weatherType !== 'Drizzle' && weatherType !== 'Mist' && weatherType !== 'Snow' && weatherType !== 'Rain' && weatherType !== 'Fog' && weatherType !== 'Haze'){
            weatherType = 'Clear'; // Handle the scenario if any other type of weather gets 
        }
        console.log(weatherType);
        weatherIcon.src = `./asset/weather-app-img/images/${weatherType}.png`;
        weather.style.display = 'block';
    })
    .catch((reject) => {
        error.style.display = 'block';
        weather.style.display = 'none';
        console.log(reject);
    })
    
})









