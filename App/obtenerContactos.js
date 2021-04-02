function obtenerContactos(){
    const CHAT = "_2aBzC";
    const CHATABIERTO = "_1Flk2 _1sFTb";
    const CHATCOLLECTIONSIZE = 18;
    const CODIGOPAIS = "+593";
    let objTabla = new Tabla();
    

    let contactosFinales = [];

    let contador = 1;
    let posicionScroll = -1;


    function settearChatAbierto(){
        let portada = document.getElementsByClassName(CHATABIERTO)[1];
        portada.removeChild(portada.firstChild);
        portada.style.overflow = "scroll";
        portada.style.width = "500px";
        portada.style.height = "789px";
    }
    settearChatAbierto();

    function crearTabla(){
        let portada = document.getElementsByClassName(CHATABIERTO)[1];
        portada.appendChild(objTabla.crearTabla());
        crearEcabezadoTabla();
    }
    crearTabla();

    function crearEcabezadoTabla(){
        let tabla = document.getElementsByTagName("table")[0];
        tabla.appendChild(objTabla.crearTituloTabla());
    }

    bajarScroll = setInterval(function(){
        if(posicionScroll == document.getElementById("pane-side").scrollTop){
            clearInterval(bajarScroll);
        }
        agregarNumerosATabla();

        posicionScroll = document.getElementById("pane-side").scrollTop;
        document.getElementById("pane-side").scroll(0, document.getElementById("pane-side").scrollTop + 500);
    },2000);

    function sleep(milliseconds) {
        var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds) {
                    break;
                }
            }
    }

    function agregarNumerosATabla(){
        let elementos = document.getElementsByClassName(CHAT);
        let contactoEncontrado = " ";
        
        for(let i = 0; i<elementos.length; i++){
            contactoEncontrado = obtenerNumero(elementos[i]);
            if(verificarExistenciaNuevoNumero(contactoEncontrado) && (contactoEncontrado != "")){
                contactosFinales.push(contactoEncontrado);

                agregarElementoATabla(contador, contactoEncontrado);
                contador = contador + 1;
            }
        }
    };
    
    function obtenerNumero(elemento){
        let elementoTxt = elemento.innerHTML;
        let contactoEncontrado = " ";

        if(elementoTxt.indexOf("t=s&amp;u=5939") != -1){
            contactoEncontrado = elementoTxt.substr(elementoTxt.indexOf("t=s&amp;u=5939")+10, 12);
            
        }/*else if(elementoTxt.indexOf(CODIGOPAIS) != -1){
            contactoEncontrado = elementoTxt.substr(elementoTxt.indexOf('class="_35k-1 _1adfa _3-8er">')+30, 15).replace(/ /g, "");
            if(contactoEncontrado.indexOf("+"))
        }*/else{
            contactoEncontrado = limpiarNombreContacto(elementoTxt);
           
        }
        return contactoEncontrado;
    }

    function verificarExistenciaNuevoNumero(contactoEncontrado){

            if(contactosFinales.indexOf(contactoEncontrado) == 1){
                return false;
            }else if(contactosFinales.indexOf(contactoEncontrado) == -1){
                return true;
            }
        
    }

    
    function agregarElementoATabla(contador, contacto){
        let tabla = document.getElementsByTagName("table")[0];
        tabla.appendChild(objTabla.crearElementoTabla(contador, contacto));
    }

    function limpiarNombreContacto(elementoTxt){
        let valorDesdeCoincidencia;
        let nombreDepurado;
        valorDesdeCoincidencia = elementoTxt.substr(elementoTxt.indexOf('class="_35k-1 _1adfa _3-8er">')+29, 30);

        if(valorDesdeCoincidencia.indexOf(CODIGOPAIS) == 0){
            valorDesdeCoincidencia = valorDesdeCoincidencia.substr(1, 16);
            valorDesdeCoincidencia=valorDesdeCoincidencia.replace(/ /g, "");
        }

        if(valorDesdeCoincidencia.indexOf("<") != -1){
            nombreDepurado = valorDesdeCoincidencia.substr(0, valorDesdeCoincidencia.indexOf("<"));
            return nombreDepurado;
        }
        return valorDesdeCoincidencia;
    }

};