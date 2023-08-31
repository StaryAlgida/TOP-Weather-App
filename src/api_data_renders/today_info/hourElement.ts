function hourElement(dataHour: Hour): Element {
  const div = document.createElement("div");
  div.classList.add("hour-el");

  const time = hour(dataHour.time.split(" ")[1]);

  const tempIcon = tempAndIcon(dataHour.temp_c, dataHour.condition.icon);

  const chanceRainSnow = rainSnow(
    dataHour.chance_of_rain,
    dataHour.chance_of_snow
  );

  div.appendChild(time);
  div.appendChild(tempIcon);
  div.appendChild(chanceRainSnow);
  return div;
}

function hour(time: string): Element {
  const dayHour = document.createElement("span");
  dayHour.innerText = `${time}`;
  return dayHour;
}

function tempAndIcon(temp: number, icon: string): Element {
  const div = document.createElement("div");
  const hTemp = document.createElement("span");
  const hIcon = document.createElement("img") as HTMLImageElement;
  hTemp.innerHTML = `${temp}°C`;
  hIcon.src = `${icon}`;

  div.appendChild(hTemp);
  div.appendChild(hIcon);
  div.classList.add("temp-icon");
  return div;
}

function rainSnow(rain: number, snow: number): Element {
  const divMainContainer = document.createElement("div");
  divMainContainer.classList.add("rain-snow-container");

  const span = document.createElement("span");
  span.innerText = `Chance of:`;

  const container1 = document.createElement("div");
  container1.innerHTML = `
    <span>Rain</span>
    <span>${rain}%</span>
    `;
  container1.classList.add("rain-snow");

  const container2 = document.createElement("div");
  container2.innerHTML = `
    <span>Snow</span>
    <span>${snow}%</span>`;
  container2.classList.add("rain-snow");

  // divMainContainer.appendChild(span);
  divMainContainer.appendChild(container1);
  divMainContainer.appendChild(container2);
  return divMainContainer;
}

export default hourElement;
