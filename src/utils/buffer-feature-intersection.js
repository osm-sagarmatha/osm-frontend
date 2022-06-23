import {
  buffer,
  point,
  lineString,
  intersect,
  lineToPolygon,
  lineIntersect,
  lineSplit,
  lineSlice,
} from "@turf/turf";

const bufferFeatureIntersection = (coords, featureCollection) => {
  const dBuf = buffer(point([coords.destLong, coords.destLat]), 100, {
    units: "meters",
  });
  const sBuf = buffer(point([coords.long, coords.lat]), 100, {
    units: "meters",
  });

  let routes = [];
  for (let i = 0; i < featureCollection.features.length; i++) {
    let feature = featureCollection.features[i];

    let dIntersect = checkIntersect(feature, dBuf);
    let sIntersect = checkIntersect(feature, sBuf);

    if (dIntersect && sIntersect) {
      const data = lineSlice(
        [coords.long, coords.lat],
        [coords.destLong, coords.destLat],
        feature
      );
      routes.push([data]);
    } else {
      const intersections = featureFeatureIntersection(i, featureCollection);

      let dInt = false,
        sInt = false;

      for (const feature of intersections) {
        if (!dInt) {
          dInt = checkIntersect(feature, dBuf);
        }

        if (!sInt) {
          sInt = checkIntersect(feature, sBuf);
        }
      }

      if (dInt && sInt) {
        const dds = [];
        for (const feature of intersections) {
          if (checkIntersect(feature, dBuf))
            dds.push(
              lineSlice(
                [coords.destLong, coords.destLat],
                feature.geometry.coordinates[0],
                feature
              )
            );
          else if (checkIntersect(feature, sBuf)) {
            dds.push(
              lineSlice(
                [coords.long, coords.lat],
                feature.geometry.coordinates[
                  feature.geometry.coordinates.length - 1
                ],
                feature
              )
            );
          } else {
            dds.push(feature);
          }
        }

        routes.push(dds);
      }
    }
  }

  return routes;
};

export default bufferFeatureIntersection;

function featureFeatureIntersection(index, featureCollection) {
  const feature1 = featureCollection.features[index];

  const intersects = [];

  for (let i = 0; i < featureCollection.features.length; i++) {
    if (i === index) continue;

    const feature2 = featureCollection.features[i];

    const points = lineIntersect(feature1, feature2);

    if (points.features.length > 0) {
      intersects.push(feature2);
    }
  }

  return intersects;
}

function checkIntersect(feature, buf) {
  const str = lineString(feature.geometry.coordinates, feature.properties);

  return intersect(lineToPolygon(str), buf);
}
