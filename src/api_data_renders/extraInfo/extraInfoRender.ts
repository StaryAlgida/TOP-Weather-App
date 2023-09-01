function extraInfoRender(data: Hour) {
  const hour = document.getElementById("extra-hour");
  const feel = document.getElementById("extra-feel");
  const wind = document.getElementById("extra-wind");
  const windDegree = document.getElementById("extra-wind-degree");
  const windDir = document.getElementById("extra-wind-dir");
  const press = document.getElementById("extra-press");
  const precip = document.getElementById("extra-precip");
  const humid = document.getElementById("extra-humid");
  const cloud = document.getElementById("extra-cloud");
  const vis = document.getElementById("extra-vis");
  const uv = document.getElementById("extra-uv");
  if (
    hour &&
    feel &&
    wind &&
    windDegree &&
    windDir &&
    press &&
    precip &&
    humid &&
    cloud &&
    vis &&
    uv
  ) {
    hour.innerText = `${data.time.split(" ")[1]}`;
    feel.innerText = `${data.feelslike_c}°C`;
    wind.innerText = `${data.wind_kph}kph`;
    windDegree.innerText = `${data.wind_degree}`;
    windDir.innerText = `${data.wind_dir}`;
    press.innerText = `${data.pressure_mb}`;
    precip.innerText = `${data.precip_mm}mm`;
    humid.innerText = `${data.humidity}%`;
    cloud.innerText = `${data.cloud}%`;
    vis.innerText = `${data.vis_km}km`;
    uv.innerText = `${data.uv}`;
  }
}

export default extraInfoRender;
