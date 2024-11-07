// existen metodos para clonar o reemplazar elementos en el dom.

// metodo CloneNode.

// Primero se debe seleccionar el elemento a clonar.

const clonedp = document.querySelector("#contenArea") //Primero se selecciona el contenedor en donde esta el elemento que queremos clonar y se guarda en una variable
const originalP = document.querySelector("p") //luego se guarda en otra variable y se selecciona el elemento a clonar
const Pcloned =originalP.cloneNode(true) // para clonar el elemento se debe usar el metodo y pasarle como parametro true 
contentArea.append(Pcloned) //y por ultimo se inyecta el elemento clonado con el metodo append

//Para reemplazar un elemento se hace con replacewhit()

const list = document.querySelector("#listArea") //se selecciona el contenedor en donde se encuentra el elemento que queremos reemplazar
const itemReplace = list.children[2]; //luego se guarda en una variable el elemento que queremos reemplazar y lo seleccionamos
itemReplace.replaceWith(Pcloned) //por ultimo con el metodo replacewith el item seleccionado se reemplaza pro algun elemento que queramos.