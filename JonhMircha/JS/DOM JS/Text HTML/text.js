const $whatisDOM = document.getElementById("que-es");

let text = `
<p>
El modelo de Objetos del Documento(<b><i>DOM - Document Object Model </i></b>) es una API para documentos HTML y XML
</p>
<p>
Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS</p>
<p>
<mark>El DOM no es parte de la especificacion de JS, es una API para los navegadores</mark>
</p>
`;

// $whatisDOM.textContent = text;
$whatisDOM.innerHTML = text;
