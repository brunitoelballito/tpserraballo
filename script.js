// NEXO URBAN - scripts.js

document.addEventListener("DOMContentLoaded", function () {

    // Saludo dinámico
    const saludo = document.getElementById("saludo");

    if (saludo) {
        const hora = new Date().getHours();

        if (hora >= 6 && hora < 12) {
            saludo.textContent = "Buenos días";
        } else if (hora >= 12 && hora < 19) {
            saludo.textContent = "Buenas tardes";
        } else {
            saludo.textContent = "Buenas noches";
        }
    }

    // Formulario de contacto
    const formulario = document.querySelector("form");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre");
            const email = document.getElementById("email");
            const mensaje = document.getElementById("mensaje");

            if (nombre && email && mensaje) {
                if (
                    nombre.value.trim() === "" ||
                    email.value.trim() === "" ||
                    mensaje.value.trim() === ""
                ) {
                    alert("Por favor, completá todos los campos.");
                    return;
                }

                const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailValido.test(email.value.trim())) {
                    alert("Ingresá un correo electrónico válido.");
                    return;
                }

                alert("¡Mensaje enviado correctamente! Gracias por contactarte con Nexo Urban.");
                formulario.reset();
            }
        });
    }

    // Botón volver arriba
    const botonArriba = document.getElementById("volverArriba");

    if (botonArriba) {
        botonArriba.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
