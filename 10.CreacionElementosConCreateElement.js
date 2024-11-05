// Con createElement si podemos agregar elementos sin que sean reemplazados como lo hace 
// innerHtml que ne su forma normal si reemplaza el elemento.

const newPelement = document.createElement("p")
newPelement.textContent= "Fui creado con createElement"
contentArea.append(newPelement)

// primero creamos el elemento que queremos inyectar en el dom, en este caso es una etiqueta de parrafo
// segundo le damos contenido a ese elemento creado accediendo al nodo y usando el metodo textContent
// y por ultimo llamamos al contenedor antes seleccionado que es en donde queremos inyectar el nuevo elemento
// en este caso va a ser en el contenedor donde ya tenemos un parrafo y se va a inyectar por debajo de este con el metodo append().

// Metodo Prepend 

const addListItem =document.createElement("li")
addListItem.textContent="item 6"
agregarElemento.prepend(addListItem)

// este metodo prepend agrega un nuevo elemento al principio del elemento seleccionado.
// primero se crea el elemento con createElement y se guarda en una variable
// luego se le agrega contenido con el metodo textConten.
// y por ultimo la variable donde guardamos el elemento seleccionado en este caso
// el contenedor de una lista le pasamos el metodo prepend y a este ultimo le pasamos
// la variable con la cual creamos el nuevo elemento.

// metodo before

const addListItem2 =document.createElement("li")
addListItem2.textContent="Item 7"
agregarElemento.before(addListItem2)

// este metodo mueve el elemento antes del elemento padre, lo deja por encima como si fuera un hermano

// metodo after

const addListItem3 =document.createElement("li")
addListItem3.textContent="Item 8"
agregarElemento.after(addListItem3)

// este metodo mueve al final de los hijos pero lo saca del contenedor principal, ya no siendo un hijo.