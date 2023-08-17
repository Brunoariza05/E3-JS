const input = document.getElementById("pizza-id");
const form = document.getElementById("formulario");
const boton = document.getElementsByTagName("button");
const tituloCard = document.getElementById("card-titulo");
const cardPrecio = document.getElementById("card-precio");
const cardImagen = document.getElementById("card-img");
const cardIngredientes = document.getElementById("card-ingredientes");

// ARRAY DE PIZZAS

const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella ", "Tomate ", "Aceitunas"],
      imagen: "./img/muzzarella.png",
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella ", "Tomate ", "Cebolla"],
      imagen: "./img/cebolla.png",
    },
  
    {
      id: 3,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella" ,
        "Tomate" ,
        "Queso Azul" ,
        "Parmesano" ,
        "Roquefort",
      ],
      imagen: "./img/4quesos.png",
    },
  
    {
      id: 4,
      nombre: "pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella" , "Tomate" , "Rucula" , "Jamón"],
      imagen: "./img/especial.png",
    },
  
    {
      id: 5,
      nombre: "pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella" , "Tomate" , "Anana"],
      imagen: "./img/anana.png",
    },
  ];

  // FUNCIONES SEGUN EL NUMERO INGRESADO 

function mostrarUltimaPizzaBuscada (){
const ultimaPizza = JSON.parse(localStorage.getItem("ultimaPizzaBuscada"));
if (ultimaPizza) {
    pizzaId(ultimaPizza.id);
}};

function pizzaId (idIngresado) {
    tituloCard.innerHTML = pizzas[idIngresado - 1].nombre;
    tituloCard.style.color = "black";
    cardImagen.src = pizzas[idIngresado - 1].imagen;
    cardImagen.id = "imagen";
    cardPrecio.innerHTML = "Precio : $" + pizzas[idIngresado - 1].precio;
    localStorage.setItem("ultimaPizzaBuscada", JSON.stringify(pizzas[idIngresado - 1]));
}

function numeroIncorrecto (idIngresado2) {
    tituloCard.innerHTML = "numero no valido, ingrese un numero entre el 1 y 5";
    tituloCard.style.color = "red";
    cardImagen.src = "/pizzas/pregunta";
    cardPrecio.innerHTML = "";
}

function formulario (e) {
    e.preventDefault();
    const idIngresado2 = input.value;
    if (idIngresado2 === 0 || idIngresado2 > 5 || idIngresado2 === "") {
        numeroIncorrecto(idIngresado2);
    } else {
        input.value = "";
        pizzaId(idIngresado2);
    }
}

function valorIngresado (e) {
    e.preventDefault();
}

// FUNCION INIT 
 
function init () {
form.addEventListener("submit", formulario);
input.addEventListener("keyup", valorIngresado);
mostrarUltimaPizzaBuscada();
}

init();






  
