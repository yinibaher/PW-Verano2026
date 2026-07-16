function Potencia(base, exponente) {
    console.log("Ejercicio 1");    
    let res = base;

    for (let i = 1; i < exponente; i++){
        res = res * base;     
    }    
    console.log(base + " elevado a " + exponente + " es igual a " + res);
}

function CajeroAutomatico() {
    console.log("Ejercicio 2"); 
    let saldo = 5000;
    let op = 0;

    do{
        do {
            op = Number(prompt("Seleccione una opción:\n" +
                "1. Consultar saldo\n" +
                "2. Depositar\n" +
                "3. Retirar\n" +
                "4. Salir"));
        } while (isNaN(op) || op < 1 || op > 4)
        
        switch (op) {
            case 1:
                console.log("Su saldo es de " + saldo + "pesos.");
                break;
            case 2:
                let deposito = 0;
                do{
                    deposito = Number(prompt("Ingrese la cantidad a depositar:"));
                }while(isNaN(deposito))
                saldo = saldo + deposito;
                console.log("Saldo actualizado: " + saldo);            
                break;
            case 3: 
                let retiro  = 0;
                do{
                    retiro = Number(prompt("Ingrese la cantidad a retirar:"));
                    if(retiro > saldo) console.log("Sin saldo suficiente para el retiro.")
                }while(retiro > saldo || isNaN(retiro));            
            
                saldo = saldo - retiro;
                console.log("Saldo actualizado: " + saldo);            
                break;
            case 4: 
                console.log("Gracias por usar el cajero automático.");
                break;
        }
    }while(op !== 4);
}

function JuegoDados() {
    console.log("Ejercicio 3");
    let dado1 = 0;
    let dado2 = 0;
    let contador = 0;

    do{
        contador++;
        dado1 = Math.floor(Math.random() * 6) + 1;
        dado2 = Math.floor(Math.random() * 6) + 1;
        console.log(dado1 + " - " + dado2)
    }while (dado1 !== dado2)

    console.log("Se necesitaron " + contador + " lanzamientos.");
}

function AdivinarNumero() {
    console.log("Ejercicio 4");
    let num = Math.floor(Math.random() * 100) + 1;
    for(let i = 1; i <= 7; i++){
        let guess = prompt("¡Adivina cual número fue generado!")
        if(num==guess) {
            console.log("¡Excelente!\nNúmero " + num + " adivinado.")
            return;
        }else if(num>guess){
            console.log("El número a adivinar es mayor.")
        }else{
            console.log("El número a adivinar es menor.")
        }
    }
    console.log("Fin del juego\nNúmero generado: " + num);
}

function Ventas() {
    console.log("Ejercicio 5");
    let ventas = [];
    let continuar = true;

    while (continuar) {
        let venta = {
            vendedor: prompt("Ingrese el nombre del vendedor:"),
            producto: prompt("Ingrese el nombre del producto:"),
            cantidad: parseInt(prompt("Ingrese la cantidad vendida:")),
            precio: parseFloat(prompt("Ingrese el precio unitario:"))
        };

        venta.total = venta.cantidad * venta.precio;
        ventas.push(venta);

        let respuesta = prompt("¿Desea registrar otra venta? (si/no)");
        if (respuesta.toLowerCase() == "si") {
            continuar = true;
        } else if (respuesta.toLowerCase() == "no") {
            continuar = false;
        } else {
            do {
                respuesta = prompt("¿Desea registrar otra venta? (si/no)");
            } while (respuesta.toLowerCase() !== "si" && respuesta.toLowerCase() !== "no")

            continuar = (respuesta.toLowerCase() === "si");
        }
    }

    let totalVentas = ventas.length;
    let costoTotales = ventas.map(venta => venta.total);
    let totalIngresos = costoTotales.reduce((acumulado, valor) => acumulado + valor, 0);

    let unidadesPorProducto = {};
    ventas.forEach(venta => {
        if (unidadesPorProducto[venta.producto]) {
            unidadesPorProducto[venta.producto] += venta.cantidad;
        } else {
            unidadesPorProducto[venta.producto] = venta.cantidad;
        }
    });

    let ventasPorVendedor = {};
    ventas.forEach(venta => {
        if (ventasPorVendedor[venta.vendedor]) {
            ventasPorVendedor[venta.vendedor] += venta.total;
        } else {
            ventasPorVendedor[venta.vendedor] = venta.total;
        }
    });

    let mejorVendedor = "";
    let mayorMonto = 0;
    for (let vendedor in ventasPorVendedor) {
        if (ventasPorVendedor[vendedor] > mayorMonto) {
            mayorMonto = ventasPorVendedor[vendedor];
            mejorVendedor = vendedor;
        }
    }

    console.log("Total de ventas realizadas: " + totalVentas);
    console.log("Total de ingresos: $" + totalIngresos.toFixed(2));
    console.log("Unidades vendidas por producto:");
    for (let producto in unidadesPorProducto) {
        console.log("- " + producto + ": " + unidadesPorProducto[producto] + " unidades");
    }
    console.log("Vendedor con más ventas: " + mejorVendedor + " ($" + mayorMonto.toFixed(2) + ")");
}

//Potencia(5, 3);
//CajeroAutomatico();
//JuegoDados();
//AdivinarNumero();
Ventas()