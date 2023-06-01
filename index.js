function centrarTextoBotonEncriptar() {
    const botonEncriptar = document.querySelector('.botonEncriptar');
    botonEncriptar.style.textAlign = 'center';
}

function centrarTextoBotonDesencriptar() {
    const botonDesencriptar = document.querySelector('.botonDesencriptar');
    botonDesencriptar.style.textAlign = 'center';
}

window.addEventListener('DOMContentLoaded', (event) => {
    centrarTextoBotonEncriptar();
    centrarTextoBotonDesencriptar();
});







