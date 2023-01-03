function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "c097o6f11c380bft35a9aaa4c76c29ad";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=c097o6f11c380bft35a9aaa4c76c29ad&units=metric";

axios.get(apiUrl).then(displayTemperature);
