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
    setTempColor(mainTemp, current.temp_c);

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
  const mainSunries = document.getElementById("main-sunrise");
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
    mainMinTemp.innerText = `Min: ${forecast.forecastday[0].day.mintemp_c}°C`;
    setTempColor(mainMinTemp, forecast.forecastday[0].day.mintemp_c);

    mainMaxTemp.innerText = `Max: ${forecast.forecastday[0].day.maxtemp_c}°C`;
    setTempColor(mainMaxTemp, forecast.forecastday[0].day.maxtemp_c);

    mainFeelsTemp.innerText = `Feels: ${current.feelslike_c}°C`;
    setTempColor(mainFeelsTemp, current.feelslike_c);

    mainWind.innerText = `Wind: ${forecast.forecastday[0].day.maxwind_kph}kph`;
    mainUv.innerText = `UV: ${forecast.forecastday[0].day.uv}`;
    mainSunries.innerText = `Sunrise: ${forecast.forecastday[0].astro.sunrise}`;
    mainSunset.innerText = `Sunset: ${forecast.forecastday[0].astro.sunset}`;
    mainDirection.innerText = `Direction: ${current.wind_dir}`;
  }
}

function setTempColor(el: Element, temp: number) {
  if (temp >= 25.0) {
    el.classList.add("hot");
  } else if (temp < 25.0 && temp >= 18.0) {
    el.classList.add("warm");
  } else if (temp < 18.0 && temp >= 13.0) {
    el.classList.add("near-cold");
  } else {
    el.classList.add("cold");
  }
}

export default mainInfo;
