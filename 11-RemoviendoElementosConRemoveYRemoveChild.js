// para eliminar elementos hay dos formas, el primero es el metodo remove()
// la segunda se puede seleccionar un elemento principal y dentro de eso podemos elegir
// cual elemento queremos eliminar, esto se hace con removechild().

// Metodo remove ()

// con este metodo eliminamos a secas un elemento que podemos seleccionar.
// en este ejemplo se elimina el primer elemento "li" que encuentra.
const itemRemove = document.querySelector("li")
itemRemove.remove()

// metodo removeChild()

// con este metodo se puede eliminar un elemento en especifico de un contenedor padre 
// y el elemento que se elimina es un hijo de ese padre.

const removeChildItem = document.querySelector("ul")
removeChildItem.removeChild(removeChildItem.firstElementChild)