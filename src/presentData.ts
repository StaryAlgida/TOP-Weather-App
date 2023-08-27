import mainInfo from "./api_data_renders/today_info/mainInfo";
import renderDayHours from "./api_data_renders/today_info/renderDayHours";
import Current from "./interfaces/current";
import Forecast from "./interfaces/forecast";
import Location from "./interfaces/location";

function presentData(location: Location, current: Current, forecast: Forecast) {
  mainInfo(location, current, forecast);
  renderDayHours(forecast);
}

export default presentData;
