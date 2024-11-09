// los eventos son objetos, y este a la vez si lo mandamos a llamar
// nos regresa un pequeño objeto al cual podemos acceder
//  a metodos y propiedades y empezar a manipular ese objeto.

const botonClick = document.getElementById("btn")

const funcionBotonClick = (event) =>  {
    console.log(event)
}
botonClick.addEventListener("click", funcionBotonClick)