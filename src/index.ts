import getData from "./getData";
import webInit from "./webInit";
import "./style.css";

window.onload = () => {
  webInit();
  getData("london", 10);
};
