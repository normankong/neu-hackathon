// 
// Scripts
// 

const submitSurvey = () =>{
    if (inputSurvey.value == "") {
        document.getElementById("noteLabel").innerHTML = "Error";
        document.getElementById("message").innerHTML = "Please fill out the survey question";
        document.getElementById("surveyModal").modal.show();
    }
    else{
        document.getElementById("noteLabel").innerHTML = "Success";
        document.getElementById("message").innerHTML = "Survey have been broadcasted. Reference # #S20201202";
        document.getElementById("surveyModal").modal.show();

        // Trigger Server side
    }

}


window.addEventListener('DOMContentLoaded', event => {

    // Register the Modal Dialog to bootstrap
    let surveyModal = document.getElementById("surveyModal");
    surveyModal.modal = new bootstrap.Modal(surveyModal);

    // Get the Data from the Server
    let url = "https://run.mocky.io/v3/60c057ae-9a03-45f0-b954-bedb8ee55548";
// let url = "https://sheet.best/api/sheets/cc8d208e-48cc-488e-a835-058e0d1168fb";

    fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);

        let tbody = document.querySelector("#datatablesSimple > tbody");
        createTableRow(tbody, data);

        const datatablesSimple = document.getElementById('datatablesSimple');
        if (datatablesSimple) {
            new simpleDatatables.DataTable(datatablesSimple);
        }
      }).catch(function() {
        // console.log("Booo");
      });
});

const createTableRow = (tbody, data) => {

    data.forEach(element => {
        let newRow = tbody.insertRow(-1);
        newRow.insertCell(0).innerHTML = element.NAME;
        newRow.insertCell(1).innerHTML = element.PHONE;
        newRow.insertCell(2).innerHTML = calAge(element.DOB);
        newRow.insertCell(3).innerHTML = element.SEX == "M" ? "Male" : "Female";
        newRow.insertCell(4).innerHTML = element.ADDRESS;
        newRow.insertCell(5).innerHTML = element.AREA;
    });
}


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
}