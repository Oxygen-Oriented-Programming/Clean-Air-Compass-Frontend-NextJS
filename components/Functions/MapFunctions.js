export const pointToLayer = (feature, center_point) => {
  return L.circleMarker(center_point, {
    radius: 8,

    fillColor: getFillColor(
      feature.properties["pm1.0"],
      feature.properties["pm2.5"],
      feature.properties["pm10.0"],
      feature.properties["pm2.5_10minute"],
      feature.properties["pm2.5_30minute"],
      feature.properties["pm2.5_30minute"]
    ),
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
  });
};

// this is called by getfillcolor2
export const getFillColor = (pm1, pm2, pm10, min10, min30, min60) => {
  // You can define your own color scale based on the interpolated value
  if (pm2 >= 250) {
    return "#301934";
  } else if (pm2 >= 150) {
    return "#702963";
  } else if (pm2 >= 55) {
    return "#990033"; // unhealthy
  } else if (pm2 >= 41) {
    return "#ff3300"; // unhealthy for sensitive high
  } else if (pm2 >= 33) {
    return "#ff9900"; // unhealthy for sensitive groups low
  } else if (pm2 >= 23) {
    return "#ffcc00"; // moderate high
  } else if (pm2 >= 12) {
    return "#ffff00"; //moderate low
  } else if (pm2 >= 6) {
    return "#ccff33"; // good high
  } else if (pm2 > 0) {
    return "#99ff33"; // good low
  } else if (
    pm1 > 0 ||
    pm2 > 0 ||
    pm10 > 0 ||
    min10 > 0 ||
    min30 > 0 ||
    min60 > 0
  ) {
    return "#99ff33"; // good low
  } else {
    return "grey";
  }
};

// sets the colors of the geojson map
export const getFillColor2 = (val) => {
  // You can define your own color scale based on the interpolated value
  if (val >= 250) {
    return "#301934";
  } else if (val >= 150) {
    return "#6e0280";
  } else if (val >= 55) {
    return "#990033"; // unhealthy
  } else if (val >= 41) {
    return "#ff3300"; // unhealthy for sensitive high
  } else if (val >= 33) {
    return "#ff9900"; // unhealthy for sensitive groups low
  } else if (val >= 23) {
    return "#ffcc00"; // moderate high
  } else if (val >= 12) {
    return "#ffff00"; //moderate low
  } else if (val >= 6) {
    return "#ccff33"; // good high
  } else {
    return "#99ff33"; // good low
  }
};

export const onEachFeature = (feature, layer) => {
  const properties = feature.properties;
  let tooltipContent = "";

  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      tooltipContent += `<b>${key}:</b> ${properties[key]}<br>`;
    }
  }

  layer.bindPopup(tooltipContent);
  layer.on("mouseover", function () {
    this.openPopup();
  });
  layer.on("mouseout", function () {
    this.closePopup();
  });
};
