function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let descriptionElement = document.querySelector("#description");
  let speedElement = document.querySelector("#wind");
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  speedElement.innerHTML = Math.round(response.data.wind.speed);

  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
}
let apikey = "333f5814fa63dat5670a0o088cabaaaf";

let apiUrl = ` https://api.shecodes.io/weather/v1/current?query=Boston&key=333f5814fa63dat5670a0o088cabaaaf&units=metric`;
axios.get(apiUrl).then(displayTemperature);
