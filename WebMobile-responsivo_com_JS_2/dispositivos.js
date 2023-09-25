function semEstoque(id, cont) {
    if (cont == 0) {
        document.getElementById(id).className = 'semestoque'
        document.getElementById(id).innerHTML = 'Sem EStoque'
    }
}

function reservar(product){
    let cont = 0;
    switch(product) {
        
        
        case "breadboard":
            cont = document.getElementById("qty-breadboard").innerHTML
            if (cont > 0) {
                cont -= 1
                document.getElementById("qty-breadboard").innerHTML = cont

                semEstoque('btn-breadboard', cont)
            }
            break;
        
        case "resistor":
            cont = document.getElementById("qty-resistor").innerHTML
            if (cont > 0) {
                cont -= 1
                document.getElementById("qty-resistor").innerHTML = cont

                semEstoque('btn-resistor', cont)
            }
            break;
        
        case "arduino":
            cont = document.getElementById("qty-arduino").innerHTML
            if (cont > 0) {
                cont -= 1
                document.getElementById("qty-arduino").innerHTML = cont
                semEstoque('btn-arduino', cont)

            }
            break;
        
        case "jumper":
            cont = document.getElementById("qty-jumper").innerHTML
            if (cont > 0) {
                cont -= 1
                document.getElementById("qty-jumper").innerHTML = cont
                semEstoque('btn-jumper', cont)

            }
            break;


        case "mpu":
            cont = document.getElementById("qty-mpu").innerHTML
            if (cont > 0) {
                cont -= 1
                document.getElementById("qty-mpu").innerHTML = cont
                semEstoque('btn-mpu', cont)

            }
            break;


        case "hc":
            cont = document.getElementById("qty-hc").innerHTML
            if (cont > 0) {
                cont -= 1
                document.getElementById("qty-hc").innerHTML = cont
                semEstoque('btn-hc', cont)

            }
            break;


        case "nrf":
            cont = document.getElementById("qty-nrf").innerHTML
            if (cont > 0) {
                cont -= 1
                document.getElementById("qty-nrf").innerHTML = cont
                semEstoque('btn-nrf', cont)

            }
            break;


        case "potenciometro":
        cont = document.getElementById("qty-potenciometro").innerHTML
        if (cont > 0) {
            cont -= 1
            document.getElementById("qty-potenciometro").innerHTML = cont
            semEstoque('btn-potenciometro', cont)

        }
        break;


    case "botao":
        cont = document.getElementById("qty-botao").innerHTML
        if (cont > 0) {
            cont -= 1
            document.getElementById("qty-botao").innerHTML = cont
            semEstoque('btn-botao', cont)

        }
        break;

    }
 


    console.log(cont)
}