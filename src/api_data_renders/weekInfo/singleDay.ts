import { ForecastDay } from "../../interfaces/forecast";

function singleDay(data: ForecastDay): Element {
  const container = document.createElement("div");
  container.classList.add("day-container");

  container.innerHTML = `
    <span>${getDayName(data.date)}</span>
    <img src="${data.day.condition.icon}" alt="${data.day.condition.text}">
    <span class="days-title-container">${data.day.daily_chance_of_rain}%</span>
    <span class="days-title-container">${data.day.avghumidity}%</span>
    <div class="days-title-container">
      <span>${data.day.mintemp_c}°C</span>
      <span>${data.day.maxtemp_c}°C</span>
    </div>
    
    `;

  return container;
}

function getDayName(dateString: string): string {
  let dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date(dateString).getDay()];
  return dayName;
}

export default singleDay;
