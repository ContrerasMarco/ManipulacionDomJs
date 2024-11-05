// Para eliminar o crear elementos se usan dos metodos,
// HTMLsTRING son como cadenas de texto que podemos crear html y luego inyectar en el DOM, a su vez
// con Create Elements lo que hace es basicamente crear un nodo y que luego le podemos generar contenido como texto pro ejemplo
// y luego inyectarlo en el dom directamente.
// Cualquiera de estas dos opciones ayuda agregar al dom elementos nuevos en diferentes posiciones.

// HTML STRINGS

// con html strings tenemos dos opciones para crear elementos y agregarlos al nodo que son innerHtml e insertAdjacenthtml.

// con innerHtml se crea el string y luego se inyecta al dom
// con insertAdjacentHtml es lo mismo que innethtml pero la diferencia esta en que nosotros podemos elegir en que posicion inyectamos el elemento.
// con innethtml reemplazamos si ya existe un mismo elemento.

const contentArea = document.getElementById("contentArea")
contentArea.innerHTML ="<p> cambiando el parrafo con innerHtml</>"

// insertAdjacenthtml.
// con este metodo insertamos en una posicion que nosotros queramos para no reemplazar el elemento ya existente.
// el metodo le debemos pasar como es una funcion, dos parametros, el primero la posicion y luego el string con la etiqueta.
contentArea.insertAdjacentHTML("indicamos posicion", "string que queremos agregar con la etiqueta.")

// insertAdjacentHtml tiene varios metodos para definir en que posicion se quiere insertar el elemento de string.
// 'beforebegin': Antes que el propio elemento.
// 'afterbegin': Justo dentro del elemento, antes de su primer elemento hijo.
// 'beforeend': Justo dentro del elemento, después de su último elemento hijo.
// 'afterend': Después del propio elemento

contentArea.insertAdjacentHTML("beforebegin", "<p>Aagregando un parrafo con insertadjacenthtml</p>")
contentArea.insertAdjacentHTML("beforeend", "<p>agregando elemento al final del ultimo hijo</p>")
contentArea.insertAdjacentHTML("afterbegin", "<p>agregando elemento antes de su primer hijo dentro del elemento </p>  ")
contentArea.insertAdjacentHTML("afterend", "<p>agregando elemento al final del propio elemento</p>")

