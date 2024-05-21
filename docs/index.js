import {
  Viewer,
  Cesium3DTileset,
  Cesium3DTileStyle,
  Cesium3DTileColorBlendMode,
  Cartesian3,
} from "cesium";
const viewer = new Viewer("cesiumContainer");
const b3dmTileset = await Cesium3DTileset.fromUrl(
  "./tiles/mihama-dtm/b3dmTileset.json"
);

b3dmTileset.style = new Cesium3DTileStyle({
  color: "color('white')",
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