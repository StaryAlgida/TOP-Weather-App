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
    <section id="extra-info"></section>
    <section id="week-info"></section>`;
  }
}

export default webInit;
