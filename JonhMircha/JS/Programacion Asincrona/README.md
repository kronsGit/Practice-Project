# *Asincronia*

La `asincronia` es uno de los pilares fundamentales de JavaScript ya que JS es un lenguaje de un solo subproceso o hilo, es decir lo que se conoce como single thread, lo que significa que solo puede ejecutar una sola cosa a la vez.

Esto tambien significa que no se pueden realizar operaciones largas como el acceso a la red sin que se bloquee el acceso principal.
Ejemplo: Imagina que solicitas datos a una Api dependiendo de la situacion de red, servidor, etc esto puede tardar mucho tiempo o como tiempo en procesar esa solicitud y mientras el hilo principal de tu codigo se quedaria bloqueado y esto haria que la pagina web no respondiera y ahi es donde entra en juego la asincronia que permite justamente solicitar largas solicitudes de red sin bloquear el hilo principal, JS fue dise;ador para ser ejecutado en navegadores trabajar con peticiones asi la red y procesar las interacciones con el usuario y tratar de mantener una interfaz lo posiblemente fluida.

JS trabaja bajo un modelo asincrono y no bloqueante y tiene un loop de eventos implementados de un solo hilo para operaciones de entrada y salida, gracias a esto es que JS es altamente concurrente a pesar de ser de un solo hilo .

### *Procesamiento Single thread y Multithread*

Los `thread` o los hilos son la unidades basicas de ejecucion de cada proceso que realiza nuestra maquina.Ejmplo: Cunado abres el navegador 


### *Operaciones de CPU y Operaciones de I/O*

Las `operaciones de CPU` son las operacions que van a pasar la mayoria del tiempo consumiendo los procesos de nuestra CPU.

Las `operaciones I/O(Entrada y salida)`, seran aquellas operaciones van a pasar la mayoria del tiempo esperando la peticion del recurso que han solicitado, ejemplo: al enviar un formulario, al hacer un pago, al esperar una API


### *Operaciones Concurrentes y Paralelismo*

La `concurrencia` es cuando dos o mas tareas progresan simultaneamente.
El `Paralelismo` es cuando dos o mas tareas se ejecutan al mismo tiempo      

### *Operaciones Bloqueante y No Bloqueante*

`Bloqueante` es aquella que no va a devolver el control a la aplicacion hasta que haya terminado toda su tarea 
`No Bloqueandote` es cuando las operaciones se ejecutan y devuelven inmediatamente el control al hilo principal sin tomar en cuenta si terminaron o no la tarea


### *Operaciones Sincronas y Asincronas*

Se refiere a cuando tendra lugar la respuesta, sincrono significa que la respuesta sucede en el presente en el tiempo inmediato espera el resultado en tiempo presente, mientras que asincrono la respuesta sucede en un futuro, se ejecuta pero no sabe cuando vendra la respuesta es decir la operacion asincrona no va a esperar el resultado 



