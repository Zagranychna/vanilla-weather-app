function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature-now");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#windspeed");
  windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}km/h`;
}

let apiKey = "3b0efc7a84446c0790a242ad96f4a7f9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
