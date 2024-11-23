const formulario = document.getElementById("myForm")

formulario.addEventListener("submit", (event) => 
{
    event.preventDefault(); //metodo que previene eventos por defecto.
    const name =formulario.elements["name"].value; // la propiedad elements permite buscar una coincidencia dentro de la seleccion que se hace.
    const email =formulario.elements["email"].value;
    console.log(name)
    console.log(email)
})