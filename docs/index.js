import {
  Viewer,
  Cesium3DTileset,
  Cesium3DTileStyle,
  Cesium3DTileColorBlendMode,
  Cartesian3,
} from "cesium";
const container = Object.assign(document.createElement("div"), {
  className: "fullSize",
});
document.body.appendChild(container);
const viewer = new Viewer(container);
const b3dmTileset = await Cesium3DTileset.fromUrl(
  "./tilesets/dtm/b3dmTileset.json"
);

b3dmTileset.style = new Cesium3DTileStyle({
  color: "undefined === ${COLOR}.x ? color('white', 1) : color('red', 1)",
});

b3dmTileset.colorBlendMode = Cesium3DTileColorBlendMode.HIGHLIGHT;
viewer.scene.primitives.add(b3dmTileset);
viewer.scene.camera.flyTo({
  destination: Cartesian3.fromDegrees(140.08345, 35.603205, 350),
  direction: new Cartesian3(
    0.6908360182420872,
    -0.5779409801258113,
    0.43443045403221364
  ),
  duration: 0,
});

