import mainInfo from "./api_data_renders/today_info/mainInfo";

async function getData(city: string) {
  callApi(
    `https://api.weatherapi.com/v1/current.json?key=KEY=${city.toLowerCase()}`
  );
}

async function callApi(link: string) {
  try {
    const apiResponse = await fetch(link, { mode: "cors" });
    const data = await apiResponse.json();
    console.log(data.location.name);

    mainInfo(data.location);
  } catch (err) {
    console.log(err);
  }
}

export default getData;
