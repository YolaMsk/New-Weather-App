function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = `${response.data.wind.speed} km/h`;
  
  let timezoneOffset = response.data.timezone;
  let localDate = new Date(Date.now() + timezoneOffset * 1000);

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayName = days[localDate.getUTCDay()];
  let hours = localDate.getUTCHours().toString().padStart(2, '0');
  let minutes = localDate.getUTCMinutes().toString().padStart(2, '0'); 
  
  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = `${dayName} ${hours}:${minutes}`;

  let iconElement = document.querySelector("#icon img");
  iconElement.setAttribute("src", response.data.condition.icon_url);
  iconElement.setAttribute("alt", response.data.condition.description);
}

