const API_KEY = "ca044b61170d0102c219024fc4d9ff75";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather #weather");
      const city = document.querySelector(".weather #city");
      city.innerText = `🌐${data.name}`;
      weather.innerText = `\n${data.weather[0].main}\n${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);