import getCurrentDate from "../../extra/getCurrentDate";
import { Forecast } from "../../interfaces/forecast";
import singleDay from "./singleDay";

function tenDaysInfo(data: Forecast) {
  console.log(data);

  const weekInfo = document.getElementById("week-info");
  const currentDate = date();
  if (weekInfo) {
    weekInfo.innerHTML = `
    <div class="days-title">
      <span id="days-day">Day</span>
      <span class="days-title-container">Chance of rain</span>
      <span class="days-title-container">Humidyty</span>
      <span class="days-title-container">Temperature(min/max)</span>
    </div>`;
    data.forecastday.forEach((el) => {
      if (el.date !== currentDate) {
        // console.log(el);
        weekInfo.appendChild(singleDay(el));
      }
    });
  }
}

function date(): string {
  const currentDate = getCurrentDate();

  let currentDay = String(currentDate.getDate()).padStart(2, "0");
  let currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  let currentYear = currentDate.getFullYear();

  let finalDate = `${currentYear}-${currentMonth}-${currentDay}`;

  return finalDate;
}

export default tenDaysInfo;
