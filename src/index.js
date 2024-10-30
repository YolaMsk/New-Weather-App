
function formatDate(date) {
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let hours = date.getHours().toString().padStart(2, '0');
  let dayIndex = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  let formattedDay = days[dayIndex];
  return `${formattedDay} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = `${response.data.wind.speed} km/h`;

  let iconElement = document.querySelector("#icon img");
  iconElement.setAttribute("src", response.data.condition.icon_url);
  iconElement.setAttribute("alt", response.data.condition.description);

  let currentDateElement = document.querySelector("#current-date");
  let currentDate = new Date();
  currentDateElement.innerHTML = formatDate(currentDate);

  getForecast(response.data.city)
}

function getForecast(city){

  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
 console.log(apiUrl);
 axios(apiUrl).then(displayForecast);
}

function displayForecast(response){
  let forecastElement =document. querySelector("#forecast");

  let days = ["Tue","Wed","Thu","Fri","Sat",];

let forecastHtml=""; 

  days.forEach(function(day){
    forecastHtml= forecastHtml +
    `<div class="weather-forecast">
    <div class="weather-forecast-day"> <div class="weather-forecast-date">${day}</div><div class="weather-forecast-icon">☀️</div>
  <div class="weather-forecast-temperatures">
        <div class="weather-forecast-temperature"><strong>18°C</strong></div>
        <div class="weather-forecast-temperature">12°C</div>
      </div>
      </div>
    </div> `;

  });

  forecastElement.innerHTML=forecastHtml
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);


