import presentData from "./checkData";
import handleError from "./handleError";

async function getData(city: string, days: number) {
  const key = "";
  callApi(
    `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}&aqi=no&alerts=no`
  );
}

async function callApi(link: string) {
  try {
    const apiResponse = await fetch(link, { mode: "cors" });
    const data = await apiResponse.json();
    if (data.error) {
      handleError(data.error.message);
    } else {
      presentData(data.location, data.current, data.forecast);
    }
  } catch (err) {
    console.log(err);
  }
}

export default getData;
