// Ejemplo 1 ================================================================================
// let usuario = prompt("Por favor, ingrese su nombre de usuraio!")
// let productoSelecionado = parseInt(prompt("hola " + usuario + ", eliga los productos y servicios para su compra : " + "\n" +
//     `1 suspension fija` + `\n` +
//     `2 suspension regulable` + `\n ` +
//     `3 suspension neumatica bloque de 4 y pulmones 6.0` + `\n ` +
//     `4 suspension neumatica bloque de 8 y pulmones 7.0` + `\n ` +
//     `5 pulmones 6.0` + `\n ` +
//     `6 pulmones 7.0` + `\n ` +
//     `7 espirales progresivo` + `\n ` +
//     `8 espirales rally` + `\n ` +
//     `9 alineacion y balanceo`));

// function comprar() {

//     let totalCompra = 0
//     let SeguirEnCarrito = true;
//     let Decision

//     while (SeguirEnCarrito === true) {
//         if (productoSelecionado === 1) {
//             totalCompra = totalCompra + 20000;
//         } else if (productoSelecionado === 2) {
//             totalCompra = totalCompra + 45000;
//         }
//         else if (productoSelecionado === 3) {
//             totalCompra = totalCompra + 150000;
//         }
//         else if (productoSelecionado === 4) {
//             totalCompra = totalCompra + 250000;
//         }
//         else if (productoSelecionado === 5) {
//             totalCompra = totalCompra + 10000;
//         }
//         else if (productoSelecionado === 6) {
//             totalCompra = totalCompra + 15000;
//         }
//         else if (productoSelecionado === 7) {
//             totalCompra = totalCompra + 10000;
//         }
//         else if (productoSelecionado === 8) {
//             totalCompra = totalCompra + 12000;
//         }
//         else if (productoSelecionado === 9) {
//             totalCompra = totalCompra + 5000;
//         }
//         else {
//             productoSelecionado = parseInt(prompt("Ingresa un producto existente: " + "\n" +
//                 `1 suspension fija` + `\n` +
//                 `2 suspension regulable` + `\n ` +
//                 `3 suspension neumatica bloque de 4 y pulmones 6.0` + `\n ` +
//                 `4 suspension neumatica bloque de 8 y pulmones 7.0` + `\n ` +
//                 `5 pulmones 6.0` + `\n ` +
//                 `6 pulmones 7.0` + `\n ` +
//                 `7 espirales progresivo` + `\n ` +
//                 `8 espirales rally` + `\n ` +
//                 `9 alineacion y balanceo`));
//             continue;
//         }
//         Decision = parseInt(prompt("Desea seguir comprando 1-si 2-no"));
//         if (Decision === 1) {
//             productoSelecionado = parseInt(prompt("Sumar al carrito : " + "\n" +
//                 `1 suspension fija` + `\n` +
//                 `2 suspension regulable` + `\n ` +
//                 `3 suspension neumatica bloque de 4 y pulmones 6.0` + `\n ` +
//                 `4 suspension neumatica bloque de 8 y pilmones 7.0` + `\n ` +
//                 `5 pulmones 6.0` + `\n ` +
//                 `6 pulmones 7.0` + `\n ` +
//                 `7 espirales progresivo` + `\n ` +
//                 `8 espirales rally` + `\n ` +
//                 `9 alineacion y balanceo`));
//         } else if (Decision === 2) {
//             SeguirEnCarrito = false;
//             alert("total de tu compra sin descuento y sin iva es, " + totalCompra);
//         }
//     }

//     return console.log(totalCompra)
// }

// comprar()


// Ejemplo 2 ==================================================================


function calculadora() {
    let operacion = parseInt(prompt("Elija el tipo de operacion: " + `\n ` +
        `1 Suma` + `\n ` +
        `2 resta` + `\n ` +
        `3 multiplicar` + `\n ` +
        `4 division`));
    let num1 = parseInt(prompt("Bienvenido a la calculdora simple, Ingrese 1er valor"))
    let num2 = parseInt(prompt("Ingrese el 2do valor"));
    seguir = true
    while (seguir === true) {
        if (operacion === 1) {
            resultado = num1 + num2;
        }
        else if (operacion === 2) {
            resultado = num1 - num2;
        }
        else if (operacion === 3) {
            resultado = num1 * num2;
        }
        else if (operacion === 4) {
            resultado = num1 / num2;
        }
        alert("resultado de la operaciones es " + resultado);

        let desicion = parseInt(prompt("Desea seguir operando" + `\n` + "1 - si" + `\n` + " 2 - no"))
        if (desicion == 1) {
            let operacion = parseInt(prompt("Elija el tipo de operacion: " + `\n ` +
                `1 Suma` + `\n ` +
                `2 resta` + `\n ` +
                `3 multiplicar` + `\n ` +
                `4 division`));

        } else if (Decision === 2) {
            Sseguir = false;
        }


    }


}

calculadora();

