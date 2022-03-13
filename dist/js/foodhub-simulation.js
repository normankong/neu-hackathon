// 
// Scripts
// 

const simulation = () =>{
    closeButton.style.display = "none";
    submitButton.style.display = "none";
    loadingButton.style.display = "block";

    setTimeout(()=>{window.location = "/foodhub-result.html"}, 4000);
}