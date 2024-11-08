// Esta clase se trata de agregar evento y escuchar desde el html cuando un usuario pase 
// el mouse por encima del contenedor rojo y cuando pase el mouse se debe cambiar
// a otro color y ademas disparar un alert cuando se apriete el boton.
// ademas tambien se deben eliminar los eventos creados.

// Primero seleccionamos el elemento al cual se quiere crear un evento 

const container = document.getElementsByClassName("container");

// segundo le agregamos al elemento el evento que queremos escuchar, en este caso el evento a escuchar es cuando se pase el mouse por encima del contenedor
// este debe cambiar de color.

container.addEventiListener("mousover", () =>
{
    container.style.backgroundColor = "yellow"
} );

container.addEventiListener("mousout", () =>
    {
        container.style.backgroundColor = "red"
    } );

//al elemento seleccionado se le agrega un escuchador de eventos el addeventlistener para escuchar el evento de cuando se pasa el mouse
// por encima del contenedor y se le agrega una clase en donde se le cambia el color del contenedor.

// Eliminando eventos creados.

const btnClickCallback = () => {    
    alert("Button clicked");    
    botones.removeEventListener('click',btnClickCallback); 
}

botones.addEventListener('click', btnClickCallback);

//  se crea una variable y dentro de ella se crea una funcion anonima en donde primero se crea
// una alerta e inmediatamente se crea tambien el evento para eliminar el evento creado, se le pasa 
// al elemento seleccionado el evento para elimianr el evento y fuera de esta funcion se crea
// el evento de click que se quiere crear para la iteraccion con el usuario y ademas se le pasa como
// parametro la variable que contiene tanto la alerta como el evento para eliminar el evento
// click despues de que el usuario cree el evento, el evento despues de la iteraccion con
// el usuario a no se dispara nunca mas.
