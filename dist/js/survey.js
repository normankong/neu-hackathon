//
// Scripts
//

const submitSurvey = () => {
    if (inputSurvey.value == "") {
        document.getElementById("noteLabel").innerHTML = "Error";
        document.getElementById("message").innerHTML =
            "Please fill out the survey question";
        document.getElementById("surveyModal").modal.show();
    } else {
        document.getElementById("noteLabel").innerHTML = "Success";
        document.getElementById("message").innerHTML = "Survey have been broadcasted.";
        document.getElementById("surveyModal").modal.show();

        let table =  document.getElementById("datatablesSimple").table;
        let now = new Date();
        let end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14);
        let surveyId = "S" + now.toISOString().substring(0,11).replaceAll("-", "").replaceAll("T", "-") + "0" + Math.floor(Math.random() * 10000);
      
        let filtered = table.rows( {order:'index', search:'applied'}).dt.searchData;
      
        let rowCount = (filtered != null) ? filtered.length : table.rows().dt.data.length;


        // Insert record in survey
        db.collection("/survey").doc().set({
            surveyId : surveyId,
            message : inputSurvey.value,
            startDate: now.toISOString().substring(0,10),
            endDate: end.toISOString().substring(0,10),
            totalResponse : 348,
            totalRequest : rowCount,
            answer_list: ["1", "2","3","4","5"],
            answer_count: [25, 100, 10, 13, 200],
        })

        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }
};

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
const peopleRef = db.collection("/people");//.limit(100);
peopleRef.get().then(function (querySnapshot) {

    let totalSize = querySnapshot.size;
    let i = 0;
    querySnapshot.forEach(function (doc) {
        createTableRow(tbody, doc.data());
        if (++i == totalSize){
            const datatablesSimple = document.getElementById("datatablesSimple");
            if (datatablesSimple) {
                datatablesSimple.table = new simpleDatatables.DataTable(datatablesSimple);
            }
        }
    });
});

window.addEventListener("DOMContentLoaded", (event) => {
    // Register the Modal Dialog to bootstrap
    let surveyModal = document.getElementById("surveyModal");
    surveyModal.modal = new bootstrap.Modal(surveyModal);

    document.getElementById("sendButton").addEventListener("click", submitSurvey);
});

const createTableRow = (tbody, element) => {
    let newRow = tbody.insertRow(-1);
    newRow.insertCell(0).innerHTML = element.firtname;
    newRow.insertCell(1).innerHTML = element.phone;
    // newRow.insertCell(2).innerHTML = "N/A";
    newRow.insertCell(2).innerHTML = element.gender;
    newRow.insertCell(3).innerHTML = element.address;
    newRow.insertCell(4).innerHTML = element.city;
};

// Calculate Age for given DOB
const calAge = (input) => {
    let dob = new Date(input);
    //calculate month difference from current date in time.
    var month_diff = Date.now() - dob.getTime();
    //convert the calculated difference in date format.
    var age_dt = new Date(month_diff);
    //extract year from date.

    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    return age;
};
