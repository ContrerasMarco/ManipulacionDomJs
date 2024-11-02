// los atributos son todas las cosas que le podemos agregar a las etiquetas html que estamos usando
// como por ejemplo un ID o una clas o un value en el caso de un form.

// En cambio las propiedades son el reflejo de los atributos en javascript, esto pasa cuando 
// el html interactua con javascrip y este convierte en dom ese html, ahi los atributos
// se convierten en propiedades y con esto vamos a poder manipular esas propiedades en el dom de Javascript

// LLamar a una propiedad ej:input.

const input = document.querySelector("input")

// guardamos en una constante la propiedad input para poder manipular esa etiqueta.

// Para modificar por ejemplo el value o una clase de esa propiedad

// con input.classname podemos acceder al nombre de la clase que tiene esa etiqueta.

// si queremos cambiarle la clase se hace lo siguiente.

// input.classname = "nombre_clase_nueva";

// a pesar de que se ha cambiado el nombre de la clase, esta no se refleja directamente

// en el html sino que se refleja directamente en el DOM.