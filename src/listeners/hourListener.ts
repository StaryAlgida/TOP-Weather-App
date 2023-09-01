import extraInfoRender from "../api_data_renders/extraInfo/extraInfoRender";

function hourListener(el: Element, data: Hour) {
  el.addEventListener("click", () => {
    extraInfoRender(data);
  });
}

export default hourListener;
