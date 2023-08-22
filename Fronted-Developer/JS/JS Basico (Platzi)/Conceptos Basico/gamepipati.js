
let gamePiPaTi = (op) =>{
    cpu = Math.round(Math.random()*2);0
    console.log(cpu);
    let message;

    if(cpu === 0){
        cpu = "Piedra";
        console.log(`Cpu escogio Piedra`);
    }else if(cpu === 1){
        cpu = "Papel";
        console.log(`Cpu escogio Papel`);

    }else{
        cpu = "Tijeras";
        console.log(`Cpu escogio Tijeras`);
    }  

    // Validaciones

    if(cpu === op){
        message = console.log("Empate");

    }else if(cpu === "Piedra" && op === "Papel"){
        message = console.log("Eres el ganador");

    }else if(cpu === "Papel" && op === "Tijeras"){
        message = console.log("Eres el ganador");

    }else if(cpu === "Tijeras" && op === "Piedra"){
        message = console.log("Eres el ganador");

    }else if(cpu === "Piedra" && op === "Tijeras"){
        message = console.log("Tu perdiste");

    }else if(cpu === "Papel" && op === "Piedra"){
        message = console.log("Tu perdiste");

    }else if(cpu === "Tijeras" && op === "Papel"){
        message = console.log("Tu perdiste");
        
    }

    return message;
}

gamePiPaTi("Papel");





