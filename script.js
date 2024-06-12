const apiKey = "55ac6955d8164db1978100502240706";
const apiUrl = " https://api.weatherapi.com/v1/current.json?q=";

const weatherIcon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search-section input");
const searchBtn = document.querySelector(".search-section button");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&key=${apiKey}`);
  console.log("response", response);
  const data = await response.json();
  console.log("data", data);
  console.log(data.current.condition.text);
  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".temperature").innerHTML =
    Math.round(data.current.temp_c) + "°C";
  document.querySelector(".windy").innerHTML = data.current.wind_kph + "km/hr";
  document.querySelector(".humidity").innerHTML = data.current.humidity + "%";

  const conditionText = data.current.condition.text;
  if (data.current.condition.text === "Partly cloudy") {
    weatherIcon.src = "images/cloudy.png";
  } else if (data.current.condition.text === "Sunny") {
    weatherIcon.src = "images/sunny.png";
  } else if (conditionText.toLowerCase().includes("rain")) {
    weatherIcon.src = "images/rainy.png";
  } else if (data.current.condition.text === "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.current.condition.text === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.current.condition.text === "Fog") {
    weatherIcon.src = "images/fog.png";
  } else if (conditionText.toLowerCase().includes("snow")) {
    weatherIcon.src = "images/snow.png";
  }
}

searchBtn.addEventListener("click", () => {
  console.log(searchBox.value);
  checkWeather(searchBox.value);
});
// checkWeather();
