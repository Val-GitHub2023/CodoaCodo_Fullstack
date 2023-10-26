//Tienda - Regiones transicion...y cambio de color
document.addEventListener("DOMContentLoaded", function() {
    const regiones = document.querySelectorAll(".region");

    regiones.forEach(region => {
        region.addEventListener("click", function() {
            const regionID = this.id;

            // colores para el fondo
            const coloresFondo = {
                sudamerica: "#6A8A82",
                centroamerica: "#A37C27",
                africa: "#563838"
            };

            // fondo del body
            document.body.style.background = coloresFondo[regionID];
            // animacion
            document.body.classList.add("animacionFondo");
        });
    });
});


// PAGINA CONTACTO - formulario - validacion-----------------------------------------------
function validacionForm() {
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("message").value;
    var emailRegex = /^\S+@\S+\.\S+$/;

    var nombreApellido = nombre.trim().split(' ');

    if (nombreApellido.length < 2) {
        alert("Ingresa tu Nombre y Apellido.");
        return false;
    }

    if (!email.match(emailRegex)) {
        alert("Ingresa una dirección de correo electrónico válida.");
        return false;
    }

    if (mensaje.trim() === "") {
        alert("Ingresa un mensaje.");
        return false;
    }

    // Agregar el proceso de envío del correo
    alert("Formulario enviado con éxito.");
    resetForm(); // restablecer el formulario una vez enviado

    return false; // Devuelve false para evitar que el formulario se envíe normalmente.
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

//Funcion para api del clima - ciudad de Buenos-------------------------
function getWeather() {
    const apiKey = '2b2a060438008cd02cde9c7391696f49';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&units=metric&lang=es&appid=${apiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temperature = data.main.temp;
            const icon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

            document.getElementById('temperature').textContent = temperature;
            document.getElementById('weather-image').src = iconUrl;
        })
        .catch((error) => {
            console.error('Error al obtener datos del clima:', error);
        });
}

getWeather();


