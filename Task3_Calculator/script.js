const display=document.getElementById("display");

function appendValue(value){
    if(display.value==="Error"){
        display.value="";
    }
    display.value+=value;
}
function clearDisplay(){
    display.value="";
}
function deleteLast(){
    display.value=display.value.slice(0,-1);
}
function calculate(){
    try{
        if(display.value.trim()===""){
            return;
        }
        display.value=eval(display.value);
    }catch(error){
        display.value="Error";
    }
}
function toggleTheme(){
    document.body.classList.toggle("dark");
    const themeButton=document.querySelector(".theme-btn");
    if(document.body.classList.contains("dark")){
        themeButton.textContent="☀";
        localStorage.setItem("theme","dark");
    }else{
        themeButton.textContent="☾";
        localStorage.setItem("theme","light");
    }
}
if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
    document.querySelector(".theme-btn").textContent="☀";
}