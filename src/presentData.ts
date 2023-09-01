import extraInfoRender from "./api_data_renders/extraInfo/extraInfoRender";
import mainInfo from "./api_data_renders/today_info/mainInfo";
import renderDayHours from "./api_data_renders/today_info/renderDayHours";
import checkEqulaTime from "./extra/checkEqulaTime";
import getCurrentDate from "./extra/getCurrentDate";
import Current from "./interfaces/current";
import Forecast from "./interfaces/forecast";
import Location from "./interfaces/location";

function presentData(location: Location, current: Current, forecast: Forecast) {
  mainInfo(location, current, forecast);
  renderDayHours(forecast);
  const currentTime = getCurrentDate();

  forecast.forecastday[0].hour.forEach((el) => {
    if (checkEqulaTime(el.time.split(" ")[1], currentTime)) {
      extraInfoRender(el);
    }
  });
}

export default presentData;
