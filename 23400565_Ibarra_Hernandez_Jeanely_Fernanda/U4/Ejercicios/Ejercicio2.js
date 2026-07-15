function aleatorios(){
    console.log("Ejercicio 1");
    let n1 = Math.floor(Math.random()*100+1);
    let n2 = Math.floor(Math.random()*100+1);
    console.log("Num #1: "+n1+"\nNum #2: "+n2);
    
    if(n1==n2){
        console.log("Son iguales");
    }else if(n1>n2){
        console.log("Num #1 es mayor");
    }else{
        console.log("Num #2 es mayor");
    }
}

function num0a5() {
    console.log("Ejercicio 2");
    let n;
    do {
        n = Math.floor(Math.random() * 6);
        console.log("Número generado: " + n);
    } while (n != 0);
}

function tablaAleatoria() {
    console.log("Ejercicio 3");
    let n = Math.floor(Math.random() * 9) + 2;
    console.log("Número generado: " + n);
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}

function paresImpares() {
    console.log("Ejercicio 4");
    let pares = 0;
    let impares = 0;
    for (let i = 1; i <= 10; i++) {
        let num = parseInt(prompt(i + ".- Ingresa un número entre 1 y 100:"));
        while(isNaN(num) || num < 1 || num > 100){
            num = parseInt(prompt(i + ".- Ingresa un número entre 1 y 100:"));
        }
        console.log("Número " + i + ": " + num);
        if (num % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
    }
    console.log("Cantidad de pares: " + pares);
    console.log("Cantidad de impares: " + impares);
}

function comision() {
    console.log("Ejercicio 5");
    let venta;
    do {
        venta = parseFloat(prompt("Ingresa el monto en ventas entre $5,000 y $30,000:"));
    } while (isNaN(venta) || venta < 5000 || venta > 30000);

    console.log("Venta ingresada: $" + venta);

    let comisionPago;
    if (venta < 10000) {
        comisionPago = venta * 0.10;
    } else {
        comisionPago = venta * 0.15;
    }

    console.log("Comisión a recibir: $" + comisionPago.toFixed(2));
}

//aleatorios();
//num0a5();
//tablaAleatoria();
paresImpares();
//comision();