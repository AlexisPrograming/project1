
document.addEventListener("DOMContentLoaded", function() {
    let btnContinuar = document.getElementById("btn_continuar");
    let juego = document.getElementById("juego");
    let resultado = document.getElementById("resultado");
    let inputNumber = document.getElementById("input_number");
    let btnEnviar = document.getElementById("btn_enviar");
    let btnJugarNuevo = document.getElementById("btn_jugar_nuevo");
    let numeroSecreto;
    let intentos = 0;

    if (!btnContinuar || !juego) {
        console.error("No se encontraron los elementos necesarios para iniciar el juego.", { btnContinuar, juego });
        return;
    }

    btnContinuar.addEventListener("click", function() {
        juego.classList.add("visible");
        numeroSecreto = Math.floor(Math.random() * 10) + 1
        btnJugarNuevo.style.display = "none";
    });
//este es para elegir el numero y comparar la respuesta del usuario
    btnEnviar.addEventListener("click", function(){
    let respuestaUsuario = inputNumber.value
    if (respuestaUsuario == numeroSecreto)
    {
        resultado.textContent = "Ganaste, pura suerte -_-!"
        inputNumber.disabled = true;
        btnEnviar.disabled = true;
        btnJugarNuevo.style.display = "block";
    }  
    else
    {
        intentos ++ 
        resultado.textContent = "Incorrecto, intenta de nuevo! Te quedan: " + (3 - intentos) + " intentos"
        //esto chequea caundo llega a tres
        if (intentos >= 3)
        {  
            resultado.textContent = "Perdiste. El número era: " + numeroSecreto;
            inputNumber.disabled = true;
            btnEnviar.disabled = true;
            btnJugarNuevo.style.display = "block"
        }
    }})
    //para jugar otra ves
    btnJugarNuevo.addEventListener("click", function(){
        intentos = 0;
        inputNumber.value = "";
        numeroSecreto = Math.floor(Math.random() * 10) + 1;
        resultado.textContent = "";
        inputNumber.disabled = false;
        btnEnviar.disabled = false;
        btnJugarNuevo.style.display = "none";
    })
    
});


