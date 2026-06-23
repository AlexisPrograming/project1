
document.addEventListener("DOMContentLoaded", function() {
    let btnContinuar = document.getElementById("btn_continuar");
    let juego = document.getElementById("juego");
    let resultado = document.getElementById("resultado");
    let inputNumber = document.getElementById("input_number");
    let btnEnviar = document.getElementById("btn_enviar");

    if (!btnContinuar || !juego) {
        console.error("No se encontraron los elementos necesarios para iniciar el juego.", { btnContinuar, juego });
        return;
    }

    btnContinuar.addEventListener("click", function() {
        juego.classList.add("visible");
    });
});
