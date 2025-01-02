const formulario = document.getElementById("myForm")

formulario.addEventListener("submit", (event) => 
{
    event.preventDefault(); //metodo que previene eventos por defecto.
    const name =formulario.elements["name"].value; // la propiedad elements permite buscar una coincidencia dentro de la seleccion que se hace.
    
    console.log(name)

    if (name.length < 3){ //se verifica que al ingresar un nombre este tenga a lo menos 3 letras
        alert("El nombre debe tener mas de 3 letras")
        return;
    }
    


const email =formulario.elements["email"].value;
console.log(email)
if  (!email.includes ("@") ) { //verifica que el email tenga un email valido.
    alert("El correo debe llevar arroba @")
    return;
}
alert("Formulario enviado exitosamente!");

console.log(`El nombre del usuario es: ${name} y su correo es: ${email}`);


const formData = {
    name: name,
    email: email,
  };

  console.log(formData);
})