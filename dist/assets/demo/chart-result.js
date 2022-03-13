// // Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';

// const INDEX = 1;

// // Get Statistic Row
// function getStatistcRow(index){
//   switch (index) {
//     case 0:
//       return [14, 45, 21, 48];
//     case 1:
//       return [94, 85, 41, 18];
      
//   }
// }

// const drawPieChart = (id, data, labels) => {
//   var ctx = document.getElementById(id);
//   var myPieChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//       labels: labels,
//       datasets: [{
//         data: [94, 85, 41, 18, 20],
//         backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#8a7fa5'],
//       }],
//     },
//   });
// }

// // Pie Chart Example
// var ctx = document.getElementById("myPieChart");
// var myPieChart = new Chart(ctx, {
//   type: 'pie',
//   data: {
//     labels: ["Lansdowne", "Garden City", "Richmond Station", "Colonel Sherman"],
//     datasets: [{
//       data: getStatistcRow(INDEX),
//       backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
//     }],
//   },
// });

// Bar Chart Example
// var ctx = document.getElementById("myBarChart");
// var myLineChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ["Lansdowne", "Garden City", "Richmond Station", "Colonel Sherman"],
//     datasets: [{
//       label: "Revenue",
//       backgroundColor: "rgba(2,117,216,1)",
//       borderColor: "rgba(2,117,216,1)",
//       data: getStatistcRow(INDEX),
//     }],
//   },
//   options: {
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'month'
//         },
//         gridLines: {
//           display: false
//         },
//         ticks: {
//           maxTicksLimit: 6
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           min: 0,
//           max: 50,
//           maxTicksLimit: 5
//         },
//         gridLines: {
//           display: true
//         }
//       }],
//     },
//     legend: {
//       display: false
//     }
//   }
// });


// function getStatistcRow(index){
//   switch (index) {
//     case 0:
//       return [14, 45, 21, 48];
//     case 1:
//       return [34, 85, 41, 12]; 
//   }
// }