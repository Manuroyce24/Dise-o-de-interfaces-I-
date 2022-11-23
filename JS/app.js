let navbar = document.querySelector('.navbar');

let searchForm = document.querySelector('.search-form');

let cartItem = document.querySelector('.cart-items-container');

let loginForm = document.querySelector('.login-form');

//Menu responsive

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    loginForm.classList.remove('active');
}

//Boton busqueda

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//Boton carro

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//Boton login

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
}

//Barra lateral

window.onscroll = () => {
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//Acceso admin

var x = document.body.querySelector(".eMail");
console.log(x);
var x1 = document.body.querySelector(".eVacio");
console.log(x1);
var x2 = document.body.querySelector(".eMal");
console.log(x2);
var y = document.body.querySelector(".cLave");
console.log(y);
var y1 = document.body.querySelector(".cVacia");
console.log(y1);
var y2 = document.body.querySelector(".cMal");
console.log(y2);

x.addEventListener("focusout", eMail, true);
y.addEventListener("focusout", eMail, true);

function eMail() {
    //Correo vacio
    if (x.value == "") {
        x1.style.display = 'block';
        x2.style.display = 'none';
        y1.style.display = 'none';
        y2.style.display = 'none';
        document.body.querySelector(".admin").style.display = 'none';

        //Clave vacia    
    } else if (y.value == "") {
        y1.style.display = 'block';
        y2.style.display = 'none';
        x1.style.display = 'none';
        x2.style.display = 'none';
        document.body.querySelector(".admin").style.display = 'none';

        // Email y clave correctas alumno1    
    } else if (x.value == "francisco@admin.com" && y.value == "admin") {
        x1.style.display = 'none';
        x2.style.display = 'none';
        y1.style.display = 'none';
        y2.style.display = 'none';
        document.body.querySelector(".admin").style.display = 'block';
        //Solo clave incorrecta
    } else if (x.value == "francisco@admin.com" && y.value != "admin") {
        x1.style.display = 'none';
        x2.style.display = 'none';
        y1.style.display = 'none';
        y2.style.display = 'block';
        document.body.querySelector(".admin").style.display = 'none';
        //Correos incorrectos  
    } else {
        x1.style.display = 'none';
        x2.style.display = 'block';
        y1.style.display = 'none';
        y2.style.display = 'none';
        document.body.querySelector(".admin").style.display = 'none';
    }
}

