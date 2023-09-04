import checkTime from "../../extra/checkTime";
import checkTimeLower from "../../extra/checkTimeLower";
import getCurrentDate from "../../extra/getCurrentDate";
import { Forecast } from "../../interfaces/forecast";
import hourElement from "./hourElement";

function renderDayHours(hoursData: Forecast) {
  const todayHoursInfo = document.getElementById("today-hours-info");

  if (todayHoursInfo) {
    const currentTime = getCurrentDate();

    hoursData.forecastday[0].hour.forEach((el) => {
      if (checkTime(el.time.split(" ")[1], currentTime))
        todayHoursInfo.appendChild(hourElement(el));
    });
    hoursData.forecastday[1].hour.forEach((el) => {
      if (checkTimeLower(el.time.split(" ")[1], currentTime))
        todayHoursInfo.appendChild(hourElement(el));
    });
  }
}

export default renderDayHours;
