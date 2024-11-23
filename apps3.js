const container = document.querySelector(".container");
const botones = document.querySelector("#btn");


container.addEventListener("mouseover", () =>
    {
        container.style.backgroundColor = "yellow";
    } );

    container.addEventListener("mouseout", () =>
        {
            container.style.backgroundColor = "red"
        } );    


//  botones.addEventListener("click", () =>
// {
//     alert("Codigo creado en JS");
//     botones.removeEventListener("click", arguments.callee);
// }
// );     

// const btnClickCallback = () => {    
//     alert("Button clicked");    
//     botones.removeEventListener('click',btnClickCallback); 
// }

// botones.addEventListener('click', btnClickCallback);

// const botonClick = document.getElementById("btn")

const funcionBotonClick = (event) =>  {
    // alert("Hola a todos")
    console.log(event)
    console.log(event.target)
    console.log(event.target.id)
}
botones.addEventListener("click", funcionBotonClick)