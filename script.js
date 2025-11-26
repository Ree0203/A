console.log("script loaded")
document.addEventListener("DOMContentLoaded", function() { 
    console.log("dom loaded"); 
    var envelope = document.getElementById('envelope');
    
    
    envelope.addEventListener("click",  function() { 
        if(envelope.classList.contains("open")){ 
            envelope.classList.add("close");
            envelope.classList.remove("open"); 
        } else if(envelope.classList.contains("close")) { 
            envelope.classList.add("open"); 
            envelope.classList.remove("close"); 
        } else { 
            envelope.classList.add("open"); 
        }
    }); 


   
    
    function open() {
        envelope.classList.add("open")
        envelope.classList.remove("close");
    }
    function close() {
        envelope.classList.add("close")
        envelope.classList.remove("open");
    }
}); 