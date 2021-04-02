class Tabla{
    static instancia;
    tabla = null;
    constructor(){
        if(!!Tabla.instancia){
            return Tabla.instancia;
        }
        
        Tabla.instancia = this;
    }

    crearTabla(){
        this.tabla = document.createElement("table");
        this.tabla.className = "tabla";
        return this.tabla;
    }

    crearElementoTabla(conteo, texto){
        var tblBody = document.createElement("tbody");//Agregamos el cuerpo de una a la tabla
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");//Fila
        
          for (var j = 0; j < 2; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo
            var celda = document.createElement("td");//Celda
            if(j == 0){
                var textoCelda = document.createTextNode(conteo);
                celda.className ="fondoCantidad centrarTexo";
            }
            if(j == 1){
                var textoCelda = document.createTextNode(texto);
            }
            celda.appendChild(textoCelda);
            celda.className = celda.className + " _3-8er selectable-text copyable-text";
            celda.style.padding = "2px";
            celda.style.cursor = "text";
            hilera.appendChild(celda);
          }
          // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);

        tblBody.className = "bordeTabla";
        return tblBody;
    }
    
    crearTituloTabla(){
        var tblHead = document.createElement("thead");
        var hilera = document.createElement("tr");//Fila
        
          for (var j = 0; j < 2; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo
            var celda = document.createElement("td");//Celda
            if(j == 0){
                var textoCelda = document.createTextNode("Cantidad");
            }
            if(j == 1){
                var textoCelda = document.createTextNode("Contacto");
            }
            celda.appendChild(textoCelda);
            celda.className = "_3-8er selectable-text copyable-text CeldaEcabezadoTabla";
            celda.style.cursor = "text";
            hilera.appendChild(celda);
          }
          // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblHead.appendChild(hilera);
        tblHead.className = "EncabezadoTabla bordeTabla";
        return tblHead;
    }


}