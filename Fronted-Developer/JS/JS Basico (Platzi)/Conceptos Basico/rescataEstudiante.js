let recataEstudiante = (estudiantes,deathCount,nuevo) =>{
    for(deathCount;deathCount > 0;deathCount--){
        estudiantes.pop();
    }
    estudiantes.push(nuevo);
    return estudiantes;
}