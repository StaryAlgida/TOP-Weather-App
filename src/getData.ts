import presentData from "./presentData";
import handleError from "./handleError";

async function getData(city: string, days: number) {
  const key = "cfde3a7a2bea4578b33151247232408&q";
  callApi(
    `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}&aqi=no&alerts=no&t=${Math.random()}`
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
