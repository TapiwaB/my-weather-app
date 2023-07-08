function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apikey = "3be575b21bded152f68b8c7549600fd8";
let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apikey}&units=metric`;
console.log(apiurl);
axios.get(apiurl).then(displayTemperature);
