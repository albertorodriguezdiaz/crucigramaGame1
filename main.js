
// Objeto con las palabras y ubicacion
const objCrucigrama = [
    { palabra: 'fuego',
      ubicacion:  [ {fila: 'fila1C1'},{fila: 'fila1C2'},{fila: 'fila1C3'},{fila: 'fila1C4'},{fila: 'fila1C5'} ]
    },
    { palabra: 'oso',
      ubicacion:  [ {fila: 'fila4C2'},{fila: 'fila4C3'},{fila: 'fila4C4'} ]
    },
    { palabra: 'gato',
      ubicacion:  [ {fila: 'fila1C4'},{fila: 'fila2C4'},{fila: 'fila3C4'},{fila: 'fila4C4'} ]
    },
    { palabra: 'loro',
      ubicacion:  [ {fila: 'fila3C2'},{fila: 'fila4C2'},{fila: 'fila5C2'},{fila: 'fila6C2'} ]
    }
];

// Creamos las variables de cada casilla
const crearVariables = (objCru)=>{
    objCru.forEach((objC, fila)=>{
        objC.ubicacion.map((ubi, col)=>{
            // Le añadimos a cada variable el valor de su casilla
            this[`palabra_f${fila+1}c${col+1}`] = document.getElementById(ubi.fila);
        })
    })
}

// Creamos las variables con los valores de cada palabra ingresadas por el jugador
const crearVariablePalabra = (objPalabra, palabraExiste)=>{
    let palabra = '';

    objPalabra.forEach((objC, fila)=>{
        objC.ubicacion.map((ubi, col)=>{
            // Comparamos la palabra a volver variable por la palabra en el objeto
            if (palabraExiste===objC.palabra){
                // Le añadimos a cada variable el valor de su casilla
                palabra += document.getElementById(ubi.fila).value;
            } 
            
        })
    })

    return palabra;
}



// Creamos el tablero
const crearTablero = (x,y) =>{

    let table = '<table class="crucigrama">';
    
    for (let fila = 1; fila <= x; fila++) {
        table += `
        <tr>`;
        
        for (let col = 1; col <= y; col++) {
            table +=`
            <td>
                <input class="casilla" type="text" maxlength="1" id="fila${fila}C${col}" />
            </td> `;
        }
        table += `
        </tr>`;
    }
    
    table += '</table>';


    return table;
}


// Deshabilitamos todos los campos del tablero
const deshabilitarCampos = (x, y) =>{
    for (let fila = 1; fila <= x; fila++) {
        for (let col = 1; col <= y; col++) {
            document.getElementById(`fila${fila}C${col}`).readOnly = true;
        }        
    }
}

const habilitarCampos = (objCru)=>{
    objCru.forEach((objC, fila)=>{
        objC.ubicacion.map((ubi, col)=>{
            // Habilitamos las casillas asignadas
            document.getElementById(ubi.fila).readOnly = false;

            // Agregamos color al fondo de los campos 
            let palabra = document.getElementById(ubi.fila);
            palabra.classList.add("bgCammpo");

        })
    })
}

const tableroX = 6;
const tableroY = 6;


setInterval(() => {
    const palabra_fuego = crearVariablePalabra(objCrucigrama,'fuego');
    const palabra_oso = crearVariablePalabra(objCrucigrama,'oso');
    const palabra_gato = crearVariablePalabra(objCrucigrama,'gato');
    const palabra_loro = crearVariablePalabra(objCrucigrama,'loro');

    
    console.log(palabra_fuego);

    if(palabra_fuego==='fuego' && palabra_oso==='oso' && palabra_gato==='gato' && palabra_loro==='loro'){
        console.log(`GANASTE :) - ${palabra_fuego} + ${palabra_oso} + ${palabra_gato} + ${palabra_loro}`);
    }

  }, 5000);


// Instanciamos el tablero y se lo añadimos al la clase html .crucigramaTablero
const tablero = crearTablero(tableroX,tableroY);
const crucigramaTablero = document.querySelector('.crucigramaTablero');
crucigramaTablero.insertAdjacentHTML("afterbegin", tablero);

// Deshabilitamos todos los campos del tablero
deshabilitarCampos(tableroX,tableroY);

// Creamos las varibalas a partir del JSON con la ubicacion de las casillas
// crearVariables(objCrucigrama);

// Habilitamos los campos necesarios para hacer el juego
habilitarCampos(objCrucigrama);

