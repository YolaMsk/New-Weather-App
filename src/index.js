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

  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000); // Assuming `response.data.time` is in seconds

  // Get the day name and format the time
  let options = { weekday: 'long' }; // For day name
  let dayName = date.toLocaleDateString(undefined, options);
  let timeString = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

  timeElement.innerHTML = `${dayName} ${timeString}`;

  let iconElement = document.querySelector("#icon img");
  iconElement.setAttribute("src", response.data.condition.icon_url);
  iconElement.setAttribute("alt", response.data.condition.description);
}
