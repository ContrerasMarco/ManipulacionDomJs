 //Para cambiar el texto seleccionando el elemento y luego usando el metodo textContent.
 const title = document.querySelector("#app-title");
 title.textContent = "Texto modificado desde hoja de js en visual studio"

const menuevent = document.querySelector("menu");


const boton = document.querySelector("button"); // se selecciona el elemento que queremos modificar, en este caso se quiere ocultar el boton al momento de hacer click
//y agregarle una clase para que el boton se oculte al hacer click.
boton.addEventListener("click", () => 
// a la variable en donde se guarda la seleccion se le agrega un metodo de escuchar eventos, en este caso se quiere que al hacer
//click el usuario el boton se oculte, para esto se crea una funcion anonima o una arrow function y se le agrega una clase ya definida en el css.
//con el metodo classList.toggle se agrega la clase al elemento.
{
    menuevent.classList.toggle("invisible");
    //a la variable en que se guarda el elemento es a quien le debemos agregar la clase para que el menu que lo seleccionamos con querySelector() y en este caso se le
    //agrega la clase, en caso que ya la tenga sucedera lo contrario la quitara.
}
)

menuevent.style.color ="yellow"
menuevent.style.backgroundColor ="grey"
menuevent.style.fontSize = "20px"



