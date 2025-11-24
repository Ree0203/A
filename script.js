
document.addEventListener("DOMContentLoaded", function() { 
    var envelope = document.getElementById('envelope');
    var btn_open = document.getElementById("open");
    var btn_reset = document.getElementById("reset");


    envelope.addEventListener("click",  function() { 
        if(envelope.classList.contains("open")){ 
            envelope.classList.add("close");
            envelope.classList.remove("open"); 
        } else if(envelope.classList.contains("close")) { 
            envelope.classList.add("open"); 
            envelope.classList.remove("close"); 
        }
    }); 


    btn_open.addEventListener("click", open); 
    btn_reset.addEventListener("click", close); 

    function open() {
        envelope.classList.add("open")
        envelope.classList.remove("close");
    }
    function close() {
        envelope.classList.add("close")
        envelope.classList.remove("open");
    }
}); 