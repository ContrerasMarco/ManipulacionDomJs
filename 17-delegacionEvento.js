// La delegacion de evento en javascript se refiere a que un elemento padre 
// pueda escuchar eventos de sus hijos y asi poder realizar acciones por ejemplo
// de cambiar una clase de esos elementos hijos. esto es posible con la delegacion
// y es el padre es quien hace el cambio

const listItem =document.querySelectorAll("li");

listItem.forEach((item) => {
    item.addEventListener("click", (event) => 
    {
    event.target.classList.toggle("highlight");
})
});

// en este ejemplo se agrega un evento a cada elemento hijo para hacer 
// un cambio del elemento, en este caso cada vez que apretados el elemeneto 
// este cambia de color, para la perfomance del sitio no es lo mejor y por eso 
// es conveniente usar la delegacion y que sea el elemento padre el que escuche
// un evento de sus hijos, ahora en vez de agregar un evento a cada elemento 
// solo se va agregar un unico evento que va a ser capaz de escuchar a los hijos
// para hacer el cambio. 

