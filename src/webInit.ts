import getData from "./getData";
import logo from "./img/logo.png";
import serach from "./img/icons8-search.gif";
import staticSearch from "./img/icons8-search-50.png";

function webInit() {
  const content = document.querySelector("#content");
  if (content) {
    content.innerHTML = `
    <header>
        <img alt="logo" src="${logo}" id="logo">
        <div id="search-contaioner">
            <input type="text" id="search-input">
            <button id="search"><img id="search-img" alt="search" src="${staticSearch}"></button>
        </div>
        <button id="change-temp-scale">F/C</button>
    </header>
    <section id="today-info">
        <div id="today-main-info">
            <h1 id="city" class="bold color-white"></h1>
            <div id="temp-img">
              <span id="main-temp" class="bold"></span>
              <img id="main-weather-img">
            </div>
            <div id="main-more-info">
              <div class="more-info-section">
                <span id="main-min-temp" class="main-info-text"></span>
                <span id="main-max-temp" class="main-info-text"></span>
                <span id="main-feels-temp" class="main-info-text""></span>
                <span id="main-wind" class="main-info-text color-white"></span>
              </div>
              <div class="more-info-section">
                <span id="main-uv" class="main-info-text color-white"></span>
                <span id="main-sunrise" class="main-info-text"></span>
                <span id="main-sunset" class="main-info-text"></span>
                <span id="main-direction" class="main-info-text color-white"></span>
              </div>  
            </div>
            <span id="main-date" class="main-info-text color-white"></span>
        </div>
        <div id="today-hours-info"></div>
    </section>
    <section id="extra-info">
    <div id="extra-container">
      <h2 id="extra-hour"></h2>
      <div id="extra-contnet">
        <div>
          <span class="extra-title">Feels like</span>
          <span id="extra-feel"></span>
        </div>
        <div>
          <span class="extra-title">Wind</span>
          <span id="extra-wind"></span>
        </div>
        <div>
          <span class="extra-title">Wind degree</span>
          <span id="extra-wind-degree"></span>
        </div>
        <div>
          <span class="extra-title">Wind direction</span>
          <span id="extra-wind-dir"></span>
        </div>
        <div>
          <span class="extra-title">Pressure</span>
          <span id="extra-press"></span>
        </div>
        <div>
          <span class="extra-title">Precipitation</span>
          <span id="extra-precip"></span>
        </div>
        <div>
          <span class="extra-title">humidity</span>
          <span id="extra-humid"></span>
        </div>
        <div>
          <span class="extra-title">Cloud</span>
          <span id="extra-cloud"></span>
        </div>
        <div>
          <span class="extra-title">Visibility</span>
          <span id="extra-vis"></span>
        </div>
        <div>
          <span class="extra-title">UV</span>
          <span id="extra-uv"></span>
        </div>
      </div>
    </div>
    </section>
    <section id="week-info"></section>
    <footer><span>Created by StaryAlgida</span></footer>`;
  }
  inputListner();
  buttonList();
}

function buttonList() {
  const button = document.getElementById("search");
  const img = document.getElementById("search-img") as HTMLImageElement;
  if (img && button) {
    button.addEventListener("mouseover", () => {
      img.src = serach;
    });
    button.addEventListener("mouseout", () => {
      img.src = staticSearch;
    });
  }
}

function inputListner() {
  const input = document.getElementById("search-input") as HTMLInputElement;
  const inputButton = document.getElementById("search");

  if (input && inputButton) {
    inputButton.addEventListener("click", () => {
      const value = input.value;
      if (value !== "") {
        webInit();
        getData(value, 10);
      }
    });
  }
}

export default webInit;
