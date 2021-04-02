document.addEventListener("DOMContentLoaded", function(){
    
    document.getElementById("activar").addEventListener("click",
    onclick, false)
    function onclick(){
        chrome.tabs.query({currentWindow: true, active: true}, 
            function (tabs){
                chrome.tabs.sendMessage(tabs[0].id, "activar")
            })
    }
    
}, false);