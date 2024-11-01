Esta clase es como podemos navegar en el dom mediante forma jerarquizada o como un arbol dentro del HTML. 
Ya que podemos en un caso practico navegar o bsucar padres o hijos dentro del DOME. 

Navegacion desde el padre hacia los hijos. 

const parent = document.getElementById("parent")
console.log(parent)

//Lo que hace este codigo es que se crea una constante para ver los hijos del padre en la jerarquizacion del arbol del dom,
//nos imprime el arbol desde el padre y sus hijos.

Otro ejemplo es como puedo navegar hacia el primer hijo. 

const children = parent.children

//Este codigo nos trae una coleccion de los hijos del padre. uan coleccion html nos muestra como tipo objetos los hijos del padre.

ahora si para llegar la primer hijo hacemos el siguiente codigo. 

const firstchild = parent.firstElementChild;
console.log(firstchild)

//este codigo nos muestra el primer hijo del arbol.

Para llegar al ultimo hijo se hace lo siguiente. 

const lastchild = parent.lastElementChild;
console.log(lastchild)

Para llegar a un familiar previo al del padre se hace lo siguiente

const previusSibling = parent.previusElementSibling;
console.log(previusSibling)

//Esto nos trae por ejemplo si nuestro elemento principal es el padre en este caso un menu el familiar previo vendria siendo
//el elemento previo que puede ser cualquier cosa un "p" una section pero es el elemento inmediatamente previo al arbol jerarquizado.

Para llegar al siguiente familiar se hace lo siguiente. 

const nextSibling = parent.nextElementSibling;
console.log(nextSibling)

//aqui nos mostrara el siguiente elemento hacia abajo del arbol jerarquizado del DOM, puede ser una section o cualquier otra cosa que este por debajo.

Lista de resumen de metodos para navegar entre elementos desde el padre hacia hijos. 

// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection


Tambien podemos navegar desde un hijo buscando un padre. 

const child2 = document.querySelector("li");
console.log(child2);

Primero se hace de una seleccion del elemento que queremos buscarle el padre. 

Metodos para buscar. 

const parent2 = child2.parentNode; //este metodo nos trae al nodo padre del elemento que seleccionamos.
console.log(parent2);

const parent3 = child2.parentElement; //con este metodo nos trae el elemento padre que estaba bsucando.

const grandFather = child2.closest("menu");
console.log(grandFather);

//Este metodo nos trae como el abuelo del hijo que le pasamos en el queryselector
// y tenemos que pasarle un selector para que la busqueda coincida y nos pueda traer
//abuelo o el elemento mas cercano que coincida para que sea el abuelo de ese elemento.

// parentNode; // live NodeList
// parentElement; // non-live HTMLCollection
// closest(selector); // este último es el más utilizado
