// para poder modificar un texto con javascript, lo primero que hay que hacer es guardar la etiqueta en una constante, para 
// poder tener acceso a las propiedades dentro del DOM,

const title = document.querySelector("#id_etiqueta");

// luego podemos verificar si podemos entrar a las propiedades de tipo objeto de la siguiente forma.

title

// o con 

// console.dir(title) esto nos abrira las propiedades y luego bsucamos la propiedad textContent que es en donde
// se almacena el texto del h1 que es lo que se bsucaba.

// Para cambiar el texto se hace lo siguiente

title.textContent = "soy el nuevo header de la app"

// se usa la variable en donde se guardo la busqueda en este caso title, para luego acceder a la propiedad que contiene el texto
// que es textContent y se accede con la variable mas la propiedad.

// existe una segunda propiedad para poder cambiar el nombre y se hace con innerText y se hace de la misma forma anterior.

title.innerText = "cambie de nuevo de nombre xD"
