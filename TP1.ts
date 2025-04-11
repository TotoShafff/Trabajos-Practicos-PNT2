//Datos simulados: 

const productos = [  
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },  
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },  
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },  
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }  
    ];

//Parte 1: Acceso a elementos y recorrido de arrays

//1. Acceder a propiedades individuales:
//Mostrá en la consola el nombre del primer producto de la lista.

console.log("Primer producto de la lista:", productos[0].nombre);

//2. Recorrido con for...of: 
// Usá un bucle for...of para mostrar en consola el nombre y el precio de cada producto. 
// Formato sugerido: "Producto: Remera - Precio: $1500"

for(const producto of productos){
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}

//3. Recorrido con .forEach(): 
//Repetí el ejercicio anterior, pero usando el método .forEach() en lugar del bucle tradicional. 

productos.forEach(productos => {
    console.log(`Producto: ${productos.nombre} - Precio $${productos.precio}`);
});