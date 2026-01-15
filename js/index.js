/*

1. Control de gastos personales

Situación:
Una persona registra sus gastos diarios en una lista. Necesita saber cuánto gastó en total y si se pasó de su presupuesto mensual.

Entrada:

Lista de gastos (números positivos)

Presupuesto mensual

Salida esperada:

Total gastado

Mensaje indicando si está dentro o fuera del presupuesto

Evalúa:

Bucles

Suma acumulada

Condicionales

*/ 

// creacio de variables 
// // se registran por medio de un input html
let gastos = [];
let presupuestoMensual = 4010000;

// funcion para agregar gastos a la lista
function agregarGasto(gasto) {
    if (gasto > 0) {
        gastos.push(gasto);
    } else {
        alert("El gasto debe ser un número positivo.");
    }
}