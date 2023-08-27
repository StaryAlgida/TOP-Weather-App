import Location from "../../interfaces/location";
import Current from "../../interfaces/current";
import Forecast from "../../interfaces/forecast";

function mainInfo(data: Location, current: Current, forecast: Forecast) {
  const city = document.getElementById("city");
  const mainTemp = document.getElementById("main-temp");
  const mainWeatherImg = document.getElementById(
    "main-weather-img"
  ) as HTMLImageElement;
  const mainDate = document.getElementById("main-date");

  if (city && mainTemp && mainWeatherImg && mainDate) {
    city.innerText = `${data.name}`;
    mainTemp.innerText = `${current.temp_c}°C`;
    mainWeatherImg.src = `${current.condition.icon}`;
    mainWeatherImg.alt = `${current.condition.text}`;
    mainDate.innerText = `${current.last_updated}`;
  }

  mainMoreInfo(forecast, current);
}

function mainMoreInfo(forecast: Forecast, current: Current) {
  const mainMinTemp = document.getElementById("main-min-temp");
  const mainMaxTemp = document.getElementById("main-max-temp");
  const mainFeelsTemp = document.getElementById("main-feels-temp");
  const mainWind = document.getElementById("main-wind");
  const mainUv = document.getElementById("main-uv");
  const mainSunries = document.getElementById("main-sunries");
  const mainSunset = document.getElementById("main-sunset");
  const mainDirection = document.getElementById("main-direction");

  if (
    mainDirection &&
    mainFeelsTemp &&
    mainMinTemp &&
    mainMaxTemp &&
    mainWind &&
    mainUv &&
    mainSunries &&
    mainSunset
  ) {
    mainMinTemp.innerText = `${forecast.forecastday[0].day.mintemp_c}°C`;
    mainMaxTemp.innerText = `${forecast.forecastday[0].day.maxtemp_c}°C`;
    mainFeelsTemp.innerText = `${current.feelslike_c}°C`;
    mainWind.innerText = `${forecast.forecastday[0].day.maxwind_kph}kph`;
    mainUv.innerText = `${forecast.forecastday[0].day.uv}`;
    mainSunries.innerText = `${forecast.forecastday[0].astro.sunrise}`;
    mainSunset.innerText = `${forecast.forecastday[0].astro.sunset}`;
    mainDirection.innerText = `${current.wind_dir}`;
  }
}

export default mainInfo;
