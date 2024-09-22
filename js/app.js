// UTILITIES
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// VARIABLES
let moviendo1 = false;
let moviendo2 = false;
let ajuste = false;

// ELEMENTS
const $ventana1 = $('#ventana'); //La ventana general 1
const $ventana2 = $('#ventana2'); //La ventana general 2
const $main = $('#main');
const $canva = $('#canva'); //Herramienta auxiliar para poder mover las ventanas con facilidad
// La zona que deben seleccionar para poder mover las ventanas
const $seleccionable1 = $('#seleccionable1'); 
const $seleccionable2 = $('#seleccionable2');

//EVENTS
$seleccionable1.addEventListener('mousedown', activarVentana);
$seleccionable2.addEventListener('mousedown', activarVentana2);
$seleccionable1.addEventListener('mousedown', startMove1);
$seleccionable2.addEventListener('mousedown', startMove2);

//ajustes
$ventana1.addEventListener('mousemove', moveAjuste);
$ventana2.addEventListener('mousemove', moveAjuste);
$ventana1.addEventListener('mouseup', stopAjuste);
$ventana2.addEventListener('mouseup', stopAjuste);
window.addEventListener('mousemove', move);
window.addEventListener('mousemove', move);

//para
window.addEventListener('mouseup', stopMove1);
window.addEventListener('mouseup', stopMove2);

function activarVentana(){
    $ventana1.classList.add('activeVen');
    $ventana2.classList.remove('activeVen');
    $canva.classList.add('visible');
}

function startMove1(){
    moviendo1 = true;
    
}
function stopMove1(){
    moviendo1 = false;
    $canva.classList.remove('visible');
}
function move(event){
    if(moviendo1){
        const { offsetX, offsetY } = event;
        $ventana1.style.top = offsetY+"px";
        $ventana1.style.left = -200+offsetX+"px";
        console.log($ventana1.style.top);
    }
    if(moviendo2){
        const { offsetX, offsetY } = event;
        $ventana2.style.top = 10+offsetY+"px";
        $ventana2.style.left = -200+offsetX+"px";
        console.log($ventana2.style.top);
    }
}

function moveAjuste(){
    ajuste = true;
}
function stopAjuste(){
    ajuste = false;
}


function startMove2(event){
    moviendo2 = true;
}
function stopMove2(event){
    moviendo2 = false;
    $canva.classList.remove('visible');
}

function activarVentana2(){
    $ventana2.classList.add('activeVen');
    $ventana1.classList.remove('activeVen');
    $canva.classList.add('visible');
}