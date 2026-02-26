// candado.js
const claveGuardada = localStorage.getItem('clave_guardada');

// Si no hay clave correcta...
if (claveGuardada !== CLAVE_ACTUAL) {
    // Detectamos idioma
    let idioma = navigator.language || navigator.userLanguage;
    
    // IMPORTANTE: Los dos puntos (..) significan "subir a la carpeta principal"
    // donde están los ficheros login_es.html, etc.
    if (idioma.startsWith('ca')) {
        window.location.href = "../login_ca.html";
    } else if (idioma.startsWith('en')) {
        window.location.href = "../login_en.html";
    } else {
        window.location.href = "../login_es.html";
    }
}