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

const db = firebase.firestore();
const ref = db.collection("/survey");//.limit(100);
ref.get().then(function (querySnapshot) {

    let totalSize = querySnapshot.size;
    let i = 0;
    querySnapshot.forEach(function (doc) {
        createTableRow(tbody, doc.data());
        if (++i == totalSize){
            const datatablesSimple = document.getElementById("datatablesSimple");
            if (datatablesSimple) {
                new simpleDatatables.DataTable(datatablesSimple);
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
        newRow.insertCell(6).innerHTML = calulatePercentage(element.totalResponse, element.totalRequest);
};

function  calulatePercentage(totalResponse, totalRequest){
    return ((totalResponse/totalRequest)*100 ).toFixed(2) + "%"
}

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