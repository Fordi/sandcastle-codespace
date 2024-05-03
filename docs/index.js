import { Viewer } from "cesium";
const container = Object.assign(document.createElement("div"), {
  className: "fullSize",
});
document.body.appendChild(container);
const viewer = new Viewer(container);
