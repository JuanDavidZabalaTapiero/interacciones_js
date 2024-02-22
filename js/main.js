function circulo() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
    
    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Circulo";
}

function rectangulo() {
    let figura = document.querySelector("#figura");
    figura.classList.toggle("rectangulo");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Rectangulo";
}

function degradado() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("degradado");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Degradado";
}

function gif() {
    // Obtengo el div
    let figura = document.getElementById("figura");
    figura.classList.toggle("gif");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "GIF";
}

function luna() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("luna");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Luna";
}

function estrella() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("estrella");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Estrella";
}

function triangulo() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("triangulo");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Triangulo";
}

function moveTop() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("top");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Top";
}

function moveBottom() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("bottom");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Bottom";
}

function moveLeft() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("left");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Left";
}

function moveRight() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("right");

    alert("Se va a mover la figura a la derecha");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Right";
}

function moveDiagonal() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("diagonal");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Diagonal";
}
// Panel lateral y superior
function panelLateral() {
    let panel = document.getElementById("panel-lateral");
    panel.classList.toggle("active");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Panel Lateral";
}

function panelSuperior() {
    let panel = document.getElementById("panel-superior");
    panel.classList.toggle("active");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Panel Superior";
}

function bgGeneral() {
    let figura = document.getElementById("section");

    // Agrega y quita una clase
    figura.classList.toggle("bgGeneral");

    const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Background General";
}

function ingresarBg() {
    let figura = document.getElementById("section");
    figura.classList.toggle("noImg");
    
    let color = prompt("Por favor, ingresa un color en inglés: ");    

    //  Le cambio el bg
     document.body.style.backgroundColor = color;

     const txtFigura = document.getElementById("txt-figura");
    txtFigura.innerText = "Background ingresado: " + color;
}