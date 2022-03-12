var gauge2 = Gauge(
  document.getElementById("gauge2"),
  {
    min: 0,
    max: 100,
    dialStartAngle: 0,
    dialEndAngle: 180,
    value: 30,
    viewBox: "0 0 100 57",
    color: function(value) {
      if(value < 20) {
        return "#5ee432";
      }else if(value < 40) {
        return "#fffa50";
      }else if(value < 60) {
        return "#f7aa38";
      }else {
        return "#ef4655";
      }
    }
  }
);



var gauge3 = Gauge(
  document.getElementById("gauge3"),
  {
    min: 0,
    max: 100,
    dialStartAngle: 180,
    dialEndAngle: 0,
    value: 80,
    viewBox: "0 0 100 57",
    color: function(value) {
      if(value < 20) {
        return "#5ee432";
      }else if(value < 40) {
        return "#fffa50";
      }else if(value < 60) {
        return "#f7aa38";
      }else {
        return "#ef4655";
      }
    }
  }
);