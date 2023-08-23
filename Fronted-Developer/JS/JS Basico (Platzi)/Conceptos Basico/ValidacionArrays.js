let validacion = (arraySecreto) => {
    return (typeof arraySecreto[0] === "string" ? console.log(true) : console.log(false));

}

validacion(["Huevo", "Gallina", "Vaca"]);
validacion([1, "Gallina", "Vaca"]);
validacion([3, "Gallina", "Vaca"]);
validacion(["Pez", "Gallina", "Vaca"]);

