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

// Register the Modal Dialog to bootstrap
let surveyModal = document.getElementById("surveyModal");
surveyModal.modal = new bootstrap.Modal(surveyModal);

