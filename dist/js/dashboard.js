// Gauge(
//   document.getElementById("gauge2"),
//   {
//     min: 0,
//     max: 100,
//     dialStartAngle: 0,
//     dialEndAngle: 180,
//     value: 30,
//     viewBox: "0 0 100 57",
//     color: function(value) {
//       if(value < 20) {
//         return "#5ee432";
//       }else if(value < 40) {
//         return "#fffa50";
//       }else if(value < 60) {
//         return "#f7aa38";
//       }else {
//         return "#ef4655";
//       }
//     }
//   }
// );

function createGauge(id, value) {
    let element = document.getElementById(id);
    var gauge = new Gauge(element, {
        min: 0,
        max: 100,
        dialStartAngle: 0,
        dialEndAngle: 180,
        value: value,
        viewBox: "0 0 100 57",
        color: function (value) {
            if (value < 50) {
                return "#5cb85c";
            } else if (value < 70) {
                return "#fffa50";
            } else if (value < 90) {
                return "#f7aa38";
            } else {
                return "#ef4655";
            }
        },
    });
}

createGauge("gauge1", 85);
createGauge("gauge2", 80);
createGauge("gauge3", 30);
createGauge("gauge4", 100);

// Gauge(
//   document.getElementById("gauge3"),
//   {
//     min: 0,
//     max: 100,
//     dialStartAngle: 0,
//     dialEndAngle: 180,
//     value: 80,
//     viewBox: "0 0 100 57",
//     color: function(value) {
//       if(value < 20) {
//         return "#5ee432";
//       }else if(value < 40) {
//         return "#fffa50";
//       }else if(value < 60) {
//         return "#f7aa38";
//       }else {
//         return "#ef4655";
//       }
//     }
//   }
// );
