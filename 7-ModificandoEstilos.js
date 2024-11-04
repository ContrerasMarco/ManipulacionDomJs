// Exiten tres formas para modificar estilos con javascript.

// la primera es con la propiedad style, esto hace que al modificar un estilo de esta manera este se agrega directamente 
// en la linea del html original y esto puede afectar a la especificidad del elemento html.
// Primero se hace la seleccion del elemento en este caso un h1 y se guarda en una variable.

const title = document.querySelector("h1");

// luego se verifica el nodo y sus propiedades que se desplegan con todas sus propiedades

title;

// y por ultimo se cambia la propiedad que queramos por ejemplo el color del titulo.

title.style.color = "blue";

// otra manera de hacer cambios a los estilos es acceder a la clase que ya esta definida, importante que cuando se accede a este
// metodo no es para agregar una nueva clase al elemento sino que cuando se hace un cambio se sobreescribe.

// primero seleccionamos el elemento que contiene la clase que queremos sobrescribir

const menuStyle = document.querySelector("menu") // seleccionamos el elemento menu de nuestro index.html que contiene una clase que la vamos a reescribir

menuStyle.className = "nombre_clase_que_queremos_que_reescriba_a_la_clase_anterior";

// con esto se reemplaza la clase menu por main-menu en el index.html y toma todo lo que tenga esa clase.

// La tercera forma para acceder a una clases y ademas la diferencia con la anterio es que ahora si podemos agregar
// una clase dentro de un elemento y mantener y no sobreescribir la que ya tiene y esto se hace

const addClass = document.querySelector("button");

button.addEventListener("click", () => {
    menuStyle.classList.toggle("invisible");
}
);
 


