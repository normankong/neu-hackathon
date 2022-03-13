// Pending

// Get the Data from the Server
let url = "https://run.mocky.io/v3/e2465573-a9b3-407f-aa9c-9842470eb658";
// let url = "https://sheet.best/api/sheets/4e87d13d-b8bc-44c9-a677-58fb2dc77894";

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        let tbody = document.querySelector("#datatablesSimple > tbody");
        createTableRow(tbody, data);

        const datatablesSimple = document.getElementById("datatablesSimple");
        if (datatablesSimple) {
            new simpleDatatables.DataTable(datatablesSimple);
        }

        tbody.onclick = (e) => {
            console.log(e.srcElement.parentElement.firstChild.data);
            showResult(e.srcElement.parentElement.firstChild.data);
        }

    })
    .catch(function (err) {
        console.log(err); // console.log("Booo");
    });

const createTableRow = (tbody, data) => {
    data.forEach((element) => {
        let newRow = tbody.insertRow(-1);
        newRow.insertCell(0).innerHTML = element.SURVEY_ID;
        newRow.insertCell(1).innerHTML = truncateString(element.QUESTION, 80);
        newRow.insertCell(2).innerHTML = element.START_TIME;
        newRow.insertCell(3).innerHTML = element.END_TIME;
        newRow.insertCell(4).innerHTML = element.NO_REQUEST;
        newRow.insertCell(5).innerHTML = element.TOTAL_RESPONSE;
        newRow.insertCell(6).innerHTML = element.RATIO;
    });
};

function showResult () {
    let element = document.getElementById('chartArea');
    element.style.display='';
    setTimeout(()=>element.scrollIntoView(false), 100);
}


function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }