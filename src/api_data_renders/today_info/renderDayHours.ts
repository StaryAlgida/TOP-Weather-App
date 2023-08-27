import Forecast from "../../interfaces/forecast";
import hourElement from "./hourElement";

function renderDayHours(hoursData: Forecast) {
  const todayHoursInfo = document.getElementById("today-hours-info");

  if (todayHoursInfo) {
    const a = hoursData;
    console.log(a);
    hoursData.forecastday[0].hour.forEach((el) => {
      todayHoursInfo.appendChild(hourElement(el));
    });
  }
}

export default renderDayHours;
