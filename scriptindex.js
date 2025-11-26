document.addEventListener("DOMContentLoaded", function() { 
    const input = document.getElementById("annivInput");
    const button1 = document.getElementById("loginVerify"); 
    const wrong = document.getElementById("wrong-input"); 


    button1.addEventListener("click", function() { 
        console.log("button works"); 
        const inputValue = input.value; 
        if(inputValue == "02/09/2023") { 
            console.log("correct")
            wrong.style.display = "none"; 
        } else { 
            console.log(wrong); 
            wrong.style.display = "block"; 
        }
    });
});