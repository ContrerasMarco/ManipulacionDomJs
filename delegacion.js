// const listItem =document.querySelectorAll("li");

// listItem.forEach((item) => {
//     item.addEventListener("click", (event) => 
//     {
//     event.target.classList.toggle("highlight");
// })
// });

const lista = document.querySelector("ul")

lista.addEventListener("click", (event)=>{
    event.target.closest("li").classList.toggle("highlight");
});