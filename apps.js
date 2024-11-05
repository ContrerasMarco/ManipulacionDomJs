const contentArea = document.getElementById("contentArea")

contentArea.innerHTML ="<p> cambiando el parrafo con innerHtml. soy el emento padre</>"

contentArea.insertAdjacentHTML("beforebegin", "<p>Aagregando un parrafo con insertadjacenthtml</p>")
contentArea.insertAdjacentHTML("beforeend", "<p>agregando elemento al final del ultimo hijo</p>")
contentArea.insertAdjacentHTML("afterbegin", "<p>agregando elemento antes de su primer hijo dentro del elemento </p>  ")
contentArea.insertAdjacentHTML("afterend", "<p>agregando elemento al final del propio elemento</p>")