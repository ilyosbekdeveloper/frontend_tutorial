const checker = document.querySelector(".checker");
const password = document.querySelector("#password");
const eye = document.querySelector(".fa-eye");
var demo = document.getElementById("demo")

eye.addEventListener("click", showPassword);
password.addEventListener("input", checkPassword);

function showPassword(){
    eye.classList.toggle("fa-eye-slash");
    if (password.type === "password"){
        password.type = "text"
    } else{
        password.type = "password"
    }
}

function checkPassword(){
    const value = password.value;
    
    if(value.length < 3) {
        checker.style.width = "none";
        checker.style.background = "none";
        demo.innerText = ""
    } 
    else if(value.length <= 4){
        checker.style.width = "25%"
        checker.style.background = "red"
        demo.innerText = "Too week"
    } 
    else if (value.length <= 6){
        checker.style.width = "50%"        
        checker.style.background = "yellow" 
        demo.innerText = "Not bad"
    }
    else if (value.length <= 8){
        checker.style.width = "100%"        
        checker.style.background = "green"
        demo.innerText = "Successiful"
    }
};