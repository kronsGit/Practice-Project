# Clases y Psudo Elementos en CSS


``` CSS

//Ejemplo usando clases
.main-nav{
    color: red;
    padding:0px;
}

.main-nav-item{
    color:black;
    padding:0
}

//Ejemplo usando clases+elemento
.main-nav-item a{
    color:white;
    padding:0;
}

//Ejemplo usando clases+elemento+pseudoclases
.main-nav-item a:hover{
    color:green;
    padding:0;
}

.main-nav-item a:active{
    color:green;
    padding:0;
}

//Ejemplo usando clases+elemento+pseudoelementos
.main-nav-item a::after{
    content: "";
}



```