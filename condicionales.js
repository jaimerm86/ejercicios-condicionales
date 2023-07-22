
//1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”

let pregunta = prompt("¿Eres bellísimo? (si/no)");

if (pregunta.toLowerCase() === "si") {
    alert("Ciertamente");
} else if (pregunta.toLowerCase() === "no") {
    alert("No te creo");
} else {
    alert("Valor inválido");
 }


//2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

// Solicitar al usuario un número
let numero = prompt("Ingrese un número:");

// Validar si la entrada es un número válido
if (isNaN(numero)) {
  alert("Entrada inválida. Debes ingresar un número.");
} else {
  // Convertir la entrada del usuario a un número
  numero = parseInt(numero);

  // Verificar si el número es divisible entre 2
  if (numero % 2 === 0) {
    alert(numero + " es divisible entre 2.");
  } else {
    alert(numero + " no es divisible entre 2.");
  }
}

//3.Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert

// Solicitar al usuario un número
let numero2 = prompt("Ingrese un número:");
// Validar si la entrada es un número válido
if (isNaN(numero2)) {
    alert("Entrada inválida. Debes ingresar un número.");
  } else {
    // Convertir la entrada del usuario a un número
    numero2 = parseInt(numero2);
  
    // Verificar si el número es divisible entre 2
    if (numero2 % 2 === 0) {
      alert(numero2 + " NUMERO PAR");
    } else {
      alert(numero2 + " NUMERO IMPAR");
    }
  }

//  4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

// Solicitar al usuario un número de cliente
let numeroCliente = prompt("Ingrese su número de cliente:");

// Validar si la entrada es un número válido
if (isNaN(numeroCliente)) {
  alert("Error: Debes ingresar un número válido.");
} else {
  // Convertir la entrada del usuario a un número entero
  numeroCliente = parseInt(numeroCliente);

  // Verificar si el número de cliente es 1000
  if (numeroCliente === 1000) {
    alert("Ganaste un premio");
  } else {
    alert("Lo sentimos, sigue participando. Tu número de cliente es: " + numeroCliente);
  }
}

//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.


// Solicitar al usuario que ingrese dos números
let numero1 = prompt("Ingrese el primer número:");
let numero3 = prompt("Ingrese el segundo número:");

// Validar si las entradas son números válidos
if (isNaN(numero1) || isNaN(numero3)) {
  alert("Error: Debes ingresar números válidos.");
} else {
  // Convertir las entradas del usuario a números
  numero1 = parseInt(numero1);
  numero3 = parseInt(numero3);

  // Comparar los números e imprimir el resultado
  if (numero1 < numero3) {
    alert("El número " + numero1 + " es menor que el número " + numero3 + ".");
  } else {
    alert("El número " + numero3 + " es menor que el número " + numero1 + ".");
  }
}

//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

// Solicitar al usuario que ingrese tres números

// Solicitar al usuario que ingrese tres números
let numeroa = prompt("Ingrese el primer número:");
let numerob = prompt("Ingrese el segundo número:");
let numeroc = prompt("Ingrese el tercer número:");

// Validar si las entradas son números válidos
if (isNaN(numeroa) || isNaN(numerob) || isNaN(numeroc)) {
  alert("Error: Debes ingresar números válidos.");
} else {
  // Convertir las entradas del usuario a números
  numeroa = parseInt(numeroa);
  numerob = parseInt(numerob);
  numeroc = parseInt(numeroc);
 }
// Comparar los números y determinar el mayor
if (numeroa > numerob && numeroa > numeroc) {
    alert("El número mayor es: " + numeroa);
  } else if (numerob > numeroa && numerob > numeroc) {
    alert("El número mayor es: " + numerob);
  } else if (numeroc > numeroa && numeroc > numerob) {
    alert("El número mayor es: " + numeroc);
  } else {
    alert("Hay al menos dos números iguales. No se puede determinar un número mayor.");
  }



 // 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

// Solicitar al usuario que ingrese un día de la semana
let dia = prompt("Ingrese un día de la semana:");

// Validar si el día es un día de semana válido
let diasDeSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
let esDiaDeSemana = diasDeSemana.includes(dia.toLowerCase());

// Mostrar mensajes según el día ingresado
if (esDiaDeSemana) {
  if (dia.toLowerCase() === "lunes") {
    alert("Es lunes. ¡Ánimo!");
  } else if (dia.toLowerCase() === "viernes") {
    alert("Es viernes. ¡Fin de semana a la vista!");
  } else {
    alert("Es un día de semana, pero no es ni lunes ni viernes.");
  }
} else if (dia.toLowerCase() === "sabado" || dia.toLowerCase() === "domingo") {
  alert("Es fin de semana. Disfruta tus días libres.");
} else {
  alert("No has ingresado un día de semana válido.");
}
/*8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.*/


// Solicitar al usuario una calificación
let calificacion = prompt("Ingrese una calificación (entre 1 y 10):");

// Convertir la calificación a un número
calificacion = parseFloat(calificacion);

// Comprobar si la calificación está en el rango correcto
if (calificacion >= 1 && calificacion <= 10) {
  // Mostrar mensaje según la calificación
  if (calificacion < 6) {
    alert("Reprobado");
  } else if (calificacion >= 6 && calificacion <= 8) {
    alert("Regular");
  } else if (calificacion === 9) {
    alert("Bien");
  } else if (calificacion === 10) {
    alert("Excelente");
  }
} else {
  alert("Error: La calificación debe estar entre 1 y 10.");
}

/*9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/

// Solicitar al usuario el topping deseado
let topping = prompt("Ingrese el topping deseado (oreo, KitKat, brownie):");

// Inicializar el precio base del helado sin topping
let precioHelado = 50;

// Calcular el costo total del helado según el topping elegido
switch (topping.toLowerCase()) {
  case "oreo":
    precioHelado += 10;
    break;
  case "kitkat":
    precioHelado += 15;
    break;
  case "brownie":
    precioHelado += 20;
    break;
  default:
    alert("No tenemos este topping, lo sentimos.");
    break;
}

// Mostrar el costo del helado
if (topping.toLowerCase() !== "") {
  alert("El costo del helado con topping de " + topping + " es: " + precioHelado + " MXN.");
} else {
  alert("El costo del helado sin topping es: " + precioHelado + " MXN.");
 }

 /*10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
 El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
 Carrera $3999 MXN
 Master: $2999 MXN
 Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
 Beca Facebook: 20% de descuento.
 Beca Google: 15% de descuento.
 Beca Jesua: 50% de descuento.
 Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
 Course: 2 meses
 Carrera 6 meses
 Master: 12 meses*/


 // Solicitar al usuario el nivel del programa educativo
let nivel = prompt("Ingrese el nivel del programa educativo (Course, Carrera, Master):");

// Solicitar al usuario si tiene alguna beca
let beca = prompt("¿Cuenta con alguna beca? (Facebook, Google, Jesua)");

// Inicializar variables de precio mensual y duración en meses
let precioMensual;
let duracion;

// Calcular el precio mensual y la duración en meses según el nivel elegido
switch (nivel.toLowerCase()) {
  case "course":
    precioMensual = 4999;
    duracion = 2;
    break;
  case "carrera":
    precioMensual = 3999;
    duracion = 6;
    break;
  case "master":
    precioMensual = 2999;
    duracion = 12;
    break;
  default:
    console.log("Nivel inválido.");
    break;
}

// Calcular el descuento según la beca elegida
let descuento;
switch (beca.toLowerCase()) {
  case "facebook":
    descuento = 0.2;
    break;
  case "google":
    descuento = 0.15;
    break;
  case "jesua":
    descuento = 0.5;
    break;
  default:
    descuento = 0;
    break;
}

// Calcular el precio mensual con descuento
let precioMensualDescuento = precioMensual - (precioMensual * descuento);

// Calcular el precio total del programa
let precioTotal = precioMensualDescuento * duracion;

// Mostrar el precio mensual con descuento y el precio total
if (nivel.toLowerCase() !== "" && beca.toLowerCase() !== "") {
  alert("El precio mensual con descuento es: " + precioMensualDescuento + " MXN.");
  alert("El precio total del programa es: " + precioTotal + " MXN.");
} else {
  alert("No se ha seleccionado un nivel o una beca válida.");
}


/*11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.*/


function calcularTotalPagar(tipoVehiculo, kmsRecorridos, litrosConsumidos) {
  let precioKilometro;
//validar el precio kilómetro recorrido de cada vehículo
  if (tipoVehiculo === "coche") {
    precioKilometro = 0.20;
  } else if (tipoVehiculo === "moto") {
    precioKilometro = 0.10;
  } else if (tipoVehiculo === "autobús") {
    precioKilometro = 0.5;
  } else {
    return "Tipo de vehículo inválido";
  }
//Calcular valor total a pagar.
  const extraLitrosConsumidos = litrosConsumidos <= 100 ? 5 : 10;
  const totalPagar = precioKilometro * kmsRecorridos + extraLitrosConsumidos;
  return totalPagar;
}

// Ejemplo de uso
const tipoVehiculo = "coche";
const kmsRecorridos = 150;
const litrosConsumidos = 120;

const totalPagar = calcularTotalPagar(tipoVehiculo, kmsRecorridos, litrosConsumidos);
console.log("Total a pagar:", totalPagar);

