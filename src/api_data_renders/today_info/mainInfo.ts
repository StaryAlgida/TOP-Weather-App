interface Location {
  country: string;
  lat: number;
  lon: number;
  name: string;
}

function mainInfo(data: Location) {
  const city = document.getElementById("city");
  const typeOfWeather = document.getElementById("type-of-weather");
  const mainTemp = document.getElementById("main-temp");
  console.log(data);
  if (city && typeOfWeather && mainTemp) {
    city.innerText = `${data.name}`;
  }
}

export default mainInfo;
