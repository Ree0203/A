document.addEventListener("DOMContentLoaded", function() { 
    const input = document.getElementById("annivInput");
    const button1 = document.getElementById("loginVerify"); 
    const wrong = document.getElementById("wrong-input"); 
    const loginContainer = document.getElementById('loginContainer'); 
    const container = document.getElementById('container'); 

    button1.addEventListener("click", function() { 
        console.log("button works"); 
        const inputValue = input.value; 
        if(inputValue == "02/09/2023") { 
            bodyLogin.classList.add("active"); 
            loginContainer.style.display = "none"; 

            setTimeout(function() { 
                window.location.href = "main.html"; 
                wrong.style.display = "none"; 
            }, 5000);

        } else { 
            console.log(wrong); 
            wrong.style.display = "block"; 
        }
    });
});