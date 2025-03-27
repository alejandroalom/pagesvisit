document.addEventListener("DOMContentLoaded", () => {
    const contadorElemento = document.getElementById("contadorVisitas");
    const botonReiniciar = document.getElementById("btnReestablecer");

    let visitas = localStorage.getItem("contadorVisitas");

    if (visitas === null) {
        visitas = 0;
    } else {
        visitas = parseInt(visitas);
    }

    visitas++;
    localStorage.setItem("contadorVisitas", visitas);
    contadorElemento.textContent = visitas;

    botonReiniciar.addEventListener("click", () => {
        localStorage.setItem("contadorVisitas", 0);
        contadorElemento.textContent = 0;
    });
});

