function webInit() {
  const content = document.querySelector("#content");
  if (content) {
    content.innerHTML = `
    <header>
        <img alt="logo">
        <div>
            <input type="text" id="search-input">
            <button id="search">szukaj</button>
        </div>
        <button id="change-temp-scale">F/C</button>
    </header>
    <section id="today-info">
        <div id="today-main-info">
            <h1 id="city"></h1>
            <span id="main-temp"></span>
            <img id="main-weather-img">
            <div id="main-more-info">
              <span id="main-min-temp" class="main-info-text"></span>
              <span id="main-max-temp" class="main-info-text"></span>
              <span id="main-feels-temp" class="main-info-text""></span>
              <span id="main-wind" class="main-info-text"></span>
              <span id="main-uv" class="main-info-text"></span>
              <span id="main-sunries" class="main-info-text"></span>
              <span id="main-sunset" class="main-info-text"></span>
              <span id="main-direction" class="main-info-text"></span>
            </div>
            <span id="main-date" class="main-info-text"></span>
        </div>
        <div id="today-hours-info"></div>
    </section>
    <section id="extra-info"></section>
    <section id="week-info"></section>`;
  }
}

export default webInit;
