// candado.js
// Este script protege el acceso al juego
const claveGuardada = localStorage.getItem('clave_guardada');

//Comprobamos si existe la variable clave_guardada y ademas es distinta a la clave actual
if (claveGuardada !== CLAVE_ACTUAL) {
    // Redirigimos al login correspondiente
    let url = "../login_es.html"; //Por defecto español
    let idioma = navigator.language || navigator.userLanguage;
    if (idioma.startsWith('ca')) {
        url = "../login_ca.html";
    } else if (idioma.startsWith('en')) {
        url = "../login_en.html";
    }
    window.location.href = url;
}