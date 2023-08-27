import mainInfo from "./api_data_renders/today_info/mainInfo";
import Current from "./interfaces/current";
import Forecast from "./interfaces/forecast";
import Location from "./interfaces/location";

function presentData(location: Location, current: Current, forecast: Forecast) {
  mainInfo(location, current, forecast);
}

export default presentData;
