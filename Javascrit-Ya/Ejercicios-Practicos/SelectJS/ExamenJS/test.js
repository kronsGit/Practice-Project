// Confeccionar una página que permita tomar un examen múltiple choice. Se debe mostrar una pregunta y seguidamente un objeto SELECT con las respuestas posibles. Al presionar un botón mostrar la cantidad de respuestas correctas e incorrectas (Disponer 4 preguntas y sus respectivos controles SELECT).

const checkAnswers = ()=>{
    let questCorect = 0;
 
    //Quest1
    let quest1 = document.getElementById("quest-1"); //Capturando primer Select;
    let q1 = quest1.options[quest1.selectedIndex].value; //Guardando respuesta
    if (q1 === "c") questCorect++
    

    //Quest2
    let quest2 = document.getElementById("quest-2"); //Capturando primer Select;
    let q2 = quest2.options[quest2.selectedIndex].value; //Guardando respuesta
    if (q2 === "e") questCorect++
  

    //Quest3
    let quest3 = document.getElementById("quest-3"); //Capturando primer Select;
    let q3 = quest3.options[quest3.selectedIndex].value; //Guardando respuesta
    if (q3 === "a") questCorect++
  

     //Quest4
     let quest4 = document.getElementById("quest-4"); //Capturando primer Select;
     let q4 = quest4.options[quest4.selectedIndex].value; //Guardando respuesta
     if (q4 === "b") questCorect++
     console.log(questCorect);
  

     //Write on screen
     document.getElementById('result').value = `${questCorect}/4`;

}