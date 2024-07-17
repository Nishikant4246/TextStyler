const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");
const buttons = document.querySelectorAll("button");

inputField.addEventListener("keyup", function () { outputField.innerHTML = inputField.value });


buttons.forEach( btn  => {
    btn.addEventListener("click", () =>{

        if(btn.classList.contains("uppercase")){

            outputField.innerHTML = outputField.innerHTML.toUpperCase();

        }else if(btn.classList.contains("capitalize")){

            outputField.innerHTML = 
            outputField.innerHTML.charAt(0).toUpperCase()+
            outputField.innerHTML.slice(1).toLowerCase();

        }else if(btn.classList.contains("bold")){
            
            outputField.style.fontWeight = "910";
          
        }else if(btn.classList.contains("italic")){

            outputField.style.fontStyle = "italic";
            outputField.style.fontFamily = "fantacy";

        }else if(btn.classList.contains("underline")){
           
            outputField.style.textDecoration = "underline";    

        }else{
            outputField.innerHTML = outputField.innerHTML.toLowerCase();
        }
    });  
});