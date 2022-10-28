//Boton que cambia a tema oscuro
function darkMode() {
    var element = document.body.getElementsByTagName('div')[0];
    element.classList.toggle("dark-mode");
}

function enviar(pagina) {
    document.nombreDelFormulario.action = pagina;
    document.nombreDelFormulario.submit();

}