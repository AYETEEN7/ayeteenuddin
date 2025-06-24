const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // 🔑 Replace with your actual key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    weatherResult.textContent = "❌ Please enter a city.";
    return;
  }

  weatherResult.textContent = "Loading...";

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod === "404") {
        weatherResult.textContent = "City not found 😢";
      } else {
        weatherResult.innerHTML = `
          <strong>${data.name}, ${data.sys.country}</strong><br>
          🌡️ Temp: ${data.main.temp}°C<br>
          ☁️ Condition: ${data.weather[0].main}
        `;
      }
    })
    .catch(err => {
      weatherResult.textContent = "Error fetching data 😔";
    });
}
