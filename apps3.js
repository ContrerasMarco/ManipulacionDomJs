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

const btnClickCallback = () => {    
    alert("Button clicked");    
    botones.removeEventListener('click',btnClickCallback); 
}

botones.addEventListener('click', btnClickCallback);