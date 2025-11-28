document.addEventListener("DOMContentLoaded", function() { 
    const greetCard = document.getElementById('greetCard');
    const mainContent = document.getElementById('main-content'); 

    setTimeout(function() { 
        greetCard.classList.add("fade-out"); 
    }, 22000); 
}); 