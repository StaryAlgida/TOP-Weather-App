import Forecast from "../../interfaces/forecast";
import hourElement from "./hourElement";

function renderDayHours(hoursData: Forecast) {
  const todayHoursInfo = document.getElementById("today-hours-info");

  if (todayHoursInfo) {
    const currentTime = getCurrentDate();
    console.log(hoursData);

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

function checkTime(time: string, currentTime: Date): boolean {
  let [inputHours, inputMinutes] = time.split(":").map(Number);
  const parsedTime = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    inputHours,
    inputMinutes
  );
  return parsedTime >= currentTime;
}

function checkTimeLower(time: string, currentTime: Date): boolean {
  let [inputHours, inputMinutes] = time.split(":").map(Number);
  const parsedTime = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    inputHours,
    inputMinutes
  );

  return parsedTime <= currentTime;
}

function getCurrentDate(): Date {
  const currentTime = new Date();
  currentTime.setMinutes(0);
  currentTime.setSeconds(0);
  currentTime.setMilliseconds(0);
  return currentTime;
}

export default renderDayHours;
