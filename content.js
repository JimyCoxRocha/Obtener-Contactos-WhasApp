chrome.runtime.onMessage.addListener(function (request){
    if(request == "activar"){
        obtenerContactos();
    }

})