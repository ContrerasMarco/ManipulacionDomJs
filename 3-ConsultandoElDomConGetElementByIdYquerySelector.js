// Como seleccionar los elementos del DOM.

// Para comenzar se pueden seleccionar clases id elementos dentro del dom de JV.

// ¿Como manipulo el dom?

// Para manipular el dom debemos seleccionar un elemento para 
// luego con un metodo o propiedad de javascript se puede 
// hacer la manipulacion de ese elemento seleccionado.Como

// ¿Como seleccionar elementos?

 Los elementos se pueden seleccionar por ejemplo con su ID,
 su clase, por las etiquetas o por atributos que contenga una 
 etiqueta en particular.

 Metodo de como seleccionar con document. 
 
 document.getElementByid("nombre_del_ID") = con esta seleccion seleccionamos los elementos que sean unicos por ejemplo un ID 
es importante que un html no se puede repetir ningun elemento pro ejemplo con los id, que deben ser unicos 
a diferencia que las clases que pueden compartir los elementos.
Con este metodo nos trae el elemento que contenga ese nombre del id. 
Un uso que le podemos dar es que podemos guardar en una variable. 

Otra forma de poder seleccionar es con un metodo nuevo que se llama
document.querySelector() con esto podemos sleccionar ID o algun atributo en 
especifico o etiqueta 

Ejemplo. document.querySelector("#+Nombre_id") y esto nos trae el elemento que contenga 
dicho id. 

Con document.querySelector("p") este nos trae el primer elemento que contenga esa etiqueta. 

Para traer todos los elementos que contenga una clase debemos usar el siguiente metodo. 
document.getElementByClassName("Nombre_clase") 