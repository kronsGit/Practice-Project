//Game Piedra-Papel-Tijeras
let gamePiPaTi = (op) =>{
    //Eleccion aleatoria de la Cpu
    cpu = Math.round(Math.random()*2);
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


    switch(true){
        case (cpu === op):
                message = console.log(`Elegiste ${op},Empate`);
        break;

        case (cpu === "Piedra" && op === "Papel"):
            message = console.log(`Elegiste ${op}, Eres el Ganador`);
        break;

        case (cpu === "Papel" && op === "Tijeras"):
            message = console.log(`Elegiste ${op}, Eres el Ganador`);
        break;

        case (cpu === "Tijeras" && op === "Piedras"):
            message = console.log(`Elegiste ${op}, Eres el Ganador`);
        break;


        default:
            message = console.log(`Elegiste ${op}, Eres el Perdedor`);
    }

    return message;
}

gamePiPaTi("Piedra");
gamePiPaTi("Papel");
gamePiPaTi("Tijeras");