Chart.defaults.global.defaultFontFamily =
    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#292b2c";

var firebaseConfig = {
    apiKey: "AIzaSyDe09eEQ4YF8D2zN2AzYTVqO0K5jvqu7F0",
    authDomain: "hackathon-13ebe.firebaseapp.com",
    projectId: "hackathon-13ebe",
    storageBucket: "hackathon-13ebe.appspot.com",
    messagingSenderId: "143879618034",
    appId: "1:143879618034:web:b2836e56c65a6493243f6b",
    measurementId: "G-FBVDHL2N0Y",
};

firebase.initializeApp(firebaseConfig);

let tbody = document.querySelector("#datatablesSimple > tbody");
const statisticData = [];
const db = firebase.firestore();
const ref = db.collection("/survey"); //.limit(100);
ref.get().then(function (querySnapshot) {
    let totalSize = querySnapshot.size;
    let i = 0;

    querySnapshot.forEach(function (doc) {
        createTableRow(tbody, doc.data());

        if (++i == totalSize) {
            const datatablesSimple =
                document.getElementById("datatablesSimple");
            if (datatablesSimple) {
                new simpleDatatables.DataTable(datatablesSimple);
                tbody.onclick = (e) => {
                    showResult(e.srcElement.parentElement.firstChild.data);
                };
            }
        }
    });
});

const createTableRow = (tbody, element) => {
    let newRow = tbody.insertRow(-1);
    newRow.insertCell(0).innerHTML = element.surveyId;
    newRow.insertCell(1).innerHTML = truncateString(element.message, 80);
    newRow.insertCell(2).innerHTML = element.startDate;
    newRow.insertCell(3).innerHTML = element.endDate;
    newRow.insertCell(4).innerHTML = element.totalResponse;
    newRow.insertCell(5).innerHTML = element.totalRequest;
    newRow.insertCell(6).innerHTML = calulatePercentage(
        element.totalResponse,
        element.totalRequest
    );

    statisticData[element.surveyId] = element;
};

function calulatePercentage(totalResponse, totalRequest) {
    return ((totalResponse / totalRequest) * 100).toFixed(2) + "%";
}

function showResult(id) {
    console.log(statisticData[id]);
    drawPieChart(
        "myPieChart",
        statisticData[id].answer_count,
        statisticData[id].answer_count
    );

    drawBarChart(
        "myBarChart",
        statisticData[id].answer_count,
        statisticData[id].answer_count
    );

    let element = document.getElementById("chartArea");
    element.style.display = "";
    setTimeout(() => element.scrollIntoView(false), 100);
}

const drawPieChart = (id, data, labels) => {
    var ctx = document.getElementById(id);
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: [
                        "#007bff",
                        "#dc3545",
                        "#ffc107",
                        "#28a745",
                        "#8a7fa5",
                    ],
                },
            ],
        },
    });
};

const drawBarChart = (id, data, labels) => {
    var ctx = document.getElementById(id);
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    backgroundColor: "rgba(2,117,216,1)",
                    borderColor: "rgba(2,117,216,1)",
                    data: data,
                },
            ],
        },
        options: {
            scales: {
                xAxes: [
                    {
                        time: {
                            unit: "month",
                        },
                        gridLines: {
                            display: false,
                        },
                        ticks: {
                            maxTicksLimit: 6,
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            min: 0,
                            max: 50,
                            maxTicksLimit: 5,
                        },
                        gridLines: {
                            display: true,
                        },
                    },
                ],
            },
            legend: {
                display: false,
            },
        },
    });
};

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}
