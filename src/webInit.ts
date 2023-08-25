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
            <span id="type-of-weather"></span>
            <span id="main-temp"></span>
        </div>
        <div id="today-hours-info"></div>
    </section>
    <section id="extra-info"></section>
    <section id="week-info"></section>`;
  }
}

export default webInit;
