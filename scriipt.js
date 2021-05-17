const apiKey= "48052b9e15e4b93a6ed219544a3fb7af";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +
"Berlin"+"&units=metric&appid=48052b9e15e4b93a6ed219544a3fb7af";
// const cityEl = document.querySelectorAll('.city');
// const tempEl = document.querySelectorAll('.temp');
// const iconEl = document.querySelectorAll('.icon');
// const feelEl = document.querySelectorAll('.feel');
// const discriptionEl = document.querySelectorAll('.discription');
// const humidityEl = document.querySelectorAll('.humidity');
// const windEL = document.querySelectorAll('.wind');
const inputEl = document.querySelector(".input");


async function getWeather(city){
  const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
  `${city}`+"&units=metric&appid=48052b9e15e4b93a6ed219544a3fb7af");

  const data = await result.json();
  showWeather(data);
  console.log(data);
}
function showWeather(data) {
  
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, feels_like, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "°C";
  document.querySelector(".feel").innerText = "Feels like: " + feels_like + "°C";
  document.querySelector(".humidity").innerText =
    "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText =
    "Wind speed: " + speed + " km/h";
  document.querySelector(".weather").classList.remove("loading");
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + name + "')";
}

function searchCity() {
  
  getWeather(document.querySelector(".search-bar").value);
  inputEl.innerText=" ";
  
}




