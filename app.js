var numero;

numero = 20;

numero += 5;

alert(numero);

let nombre = prompt("que onda loco, decime tu nombre:"); //------------------función de js

alert("Hola " + nombre + "!");

document.write("Hola " + nombre + "! Este es un mensaje document.write ");

var nombrecompleto;
var apellido = "cremona";

nombrecompleto = ` Hola ${nombre} ${apellido}  Esto es otro texto concatenado con atributos mediante $ {} `;
document.write(nombrecompleto);

var dineroCofla = prompt("cuánto dinero tiene cofla?");
dineroPedro = prompt("cuánto dinero tiene pedro?");
dineroRobert = prompt("cuánto dinero tiene robert?");

Array = [dineroCofla, dineroPedro, dineroRobert];

for (rj = 0; rj < Array.length; rj++) {

    if (Array[rj] >= 0.6 && Array[rj] < 1) {
        alert("comprate un helado de agua")
    }
    else if (Array[rj] >= 1.6 && Array[rj] < 1.7) {
        alert("comprate un helado heladix")
    }
    else if (Array[rj] >= 1.7 && Array[rj] < 1.8) {
        alert("comprate un helado heladovich")
    }
    else if (Array[rj] >= 1.8 && Array[rj] < 2.9) {
        alert("comprate un helado helardo")
    }
    else {
        alert("No te alcanza pa nada pa")
    }
}

