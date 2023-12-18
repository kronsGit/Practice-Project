//Primero crear el objetos que contendra las suscriptiones
const tiposDeSuscriptiones={
 free: 'Solo puedes tomar cursos gratis',
 basic: 'Puedes tomar todos los cursos durante un mes',
 expert:'Puedes tomar todos los cursos durante 1 year',
 expertduo: 'Tu y otro usuario pueden tomar todos los cursos por 1 year'
}

function conseguirTipoSuscription(suscripcion){
    if(tiposDeSuscriptiones[suscripcion]){
        console.log(tiposDeSuscriptiones[suscripcion]);
        return;
    }

    console.warn('Este tipo de suscription no existe, Puto');
}

conseguirTipoSuscription('free');
conseguirTipoSuscription('expert');
conseguirTipoSuscription('Free');
conseguirTipoSuscription('s2');



