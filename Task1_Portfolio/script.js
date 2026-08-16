const contactForm=document.getElementById("contactForm");
const successPopup=document.getElementById("successPopup");
const closePopup=document.getElementById("closePopup");
let popupTimer;
contactForm.addEventListener("submit",function(event){
    event.preventDefault();
    successPopup.classList.add("show");
    contactForm.reset();
    clearTimeout(popupTimer);
    popupTimer=setTimeout(function(){
        successPopup.classList.remove("show");
    },4000);
});
closePopup.addEventListener("click",function(){
    successPopup.classList.remove("show");
    clearTimeout(popupTimer);
});