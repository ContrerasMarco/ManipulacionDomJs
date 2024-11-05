// con innerhtml si se puede agregar un elemento pero
// sin que lo pueda reemplazar pero hay que tener cuidado
// ya que al momento de hacer el cambio la perfomance puede verse
// afectada, ya que renderiza todo los elementos del contenedor
// y eso es perjudicial para la perfomance del sitio.
// la manera de agregar sin reemplazar es agregando el sigo "mas" antes del igual (=).

const agregarElemento = document.getElementById("listArea");
agregarElemento.innerHTML += "<li>item 5 </li>" 

// para evitar que sea todo renderizado nuevamente y que solo se renderize el elemento
// a agregar se debe usar el metodo inserAdjacentHtml.

agregarElemento.insertAdjacentHTML("beforeend","<li>item 6 </li>")