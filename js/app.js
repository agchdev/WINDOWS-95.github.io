// UTILITIES
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// VARIABLES
let moviendo1 = false;
let moviendo2 = false;
let moviendo3 = false;
let ajuste = false;
let activo = false;

// ELEMENTS
const $ventana1 = $('#ventana'); //La ventana general PRODUCTO
const $ventana2 = $('#ventana2'); //La ventana general CONÓCENOS
const $ventana3 = $('#ventana3'); //La ventana general BUSCAMINAS
const $main = $('#main');
const $canva = $('#canva'); //Herramienta auxiliar para poder mover las ventanas con facilidad
// La zona que deben seleccionar para poder mover las ventanas
const $seleccionable1 = $('#seleccionable1'); 
const $seleccionable2 = $('#seleccionable2');
const $seleccionable3 = $('#seleccionable3');

const $inicioFooter = $('#inicioFooter');
const $productoFooter = $('#productoFooter');
const $conocenosFooter = $('#conocenosFooter');
const $contactoFooter = $('#contactoFooter');

const $minCo = $('#minCo');
const $fullCo = $('#fullCo');
const $closeCo = $('#closeCo');

const $minPro = $('#minPro');
const $fullPro = $('#fullPro');
const $closePro = $('#closePro');

const $productoIcon = $('#productoIcon');
const $conocenosIcon = $('#conocenosIcon');
const $buscaminasIcon = $('#buscaminasIcon');

//EVENTS
$seleccionable1.addEventListener('mousedown', activarVentana);
$seleccionable2.addEventListener('mousedown', activarVentana2);
$seleccionable3.addEventListener('mousedown', activarVentana3);
$seleccionable1.addEventListener('mousedown', startMove1);
$seleccionable2.addEventListener('mousedown', startMove2);
$seleccionable3.addEventListener('mousedown', startMove3);

$inicioFooter.addEventListener('click', mostrarInicio);
$productoFooter.addEventListener('click', mostrarProducto);
$conocenosFooter.addEventListener('click', mostrarConocenos);
$contactoFooter.addEventListener('click', mostrarContacto);

$productoIcon.addEventListener('click', mostrarContacto);
$conocenosIcon.addEventListener('click', mostrarConocenos);
$buscaminasIcon.addEventListener('click', mostrarBuscaminas);

$minCo.addEventListener('click', cerrarConcocenos);
$fullCo.addEventListener('click', fullConcocenos);
$closeCo.addEventListener('click', cerrarConcocenos);

$minPro.addEventListener('click', cerrarProductos);
$fullPro.addEventListener('click', fullProductos);
$closePro.addEventListener('click', cerrarProductos);

//ajustes
$ventana1.addEventListener('mousemove', moveAjuste);
$ventana2.addEventListener('mousemove', moveAjuste);
$ventana3.addEventListener('mousemove', moveAjuste);

$ventana1.addEventListener('mouseup', stopAjuste);
$ventana2.addEventListener('mouseup', stopAjuste);
$ventana3.addEventListener('mouseup', stopAjuste);

window.addEventListener('mousemove', move);
window.addEventListener('mousemove', move);

//para
window.addEventListener('mouseup', stopMove1);
window.addEventListener('mouseup', stopMove2);
window.addEventListener('mouseup', stopMove3);



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
    }
    if(moviendo2){
        const { offsetX, offsetY } = event;
        $ventana2.style.top = offsetY+"px";
        $ventana2.style.left = -200+offsetX+"px";
    }
    if(moviendo3){
        const { offsetX, offsetY } = event;
        $ventana3.style.top = offsetY+"px";
        $ventana3.style.left = -200+offsetX+"px";
        console.log($ventana3.style.top);
    }
}

function moveAjuste(){
    ajuste = true;
}
function stopAjuste(){
    ajuste = false;
}
function startMove2(){
    moviendo2 = true;
}
function startMove3(){
    moviendo3 = true;
    $canva.classList.add('visible');
}
function stopMove2(){
    moviendo2 = false;
    $canva.classList.remove('visible');
}
function stopMove3(){
    moviendo3 = false;
    $canva.classList.remove('visible');
}

function activarVentana(){
    $ventana1.classList.add('activeVen');
    $ventana2.classList.remove('activeVen');
    $ventana3.classList.remove('activeVen');
    $canva.classList.add('visible');
}

function activarVentana2(){
    $ventana2.classList.add('activeVen');
    $ventana1.classList.remove('activeVen');
    $ventana3.classList.remove('activeVen');
    $canva.classList.add('visible');
}

function activarVentana3(){
    $ventana3.classList.add('activeVen');
    $ventana1.classList.remove('activeVen');
    $ventana2.classList.remove('activeVen');
    $canva.classList.add('visible');
}

// FOOTER FUNCIONES

function mostrarProducto(){
    if($ventana1.style.display == "none"){
        activo = false;
    }
    if(!activo){
        $ventana1.style.display = "inline";
        activo = true;
        activarVentana();
    }else{
        $ventana1.style.display = "none";
        activo = false;
    }
}

function mostrarConocenos(){
    if($ventana2.style.display == "none"){
        activo = false;
    }
    if(!activo){
        $ventana2.style.display = "inline";
        activo = true;
        activarVentana2();
    }else{
        $ventana2.style.display = "none";
        activo = false;
    }
}

function mostrarBuscaminas(){
    $ventana3.style.display = "inline";
}

function mostrarContacto(){
    if($ventana1.style.display == "inline"){
        activarVentana();
        $canva.classList.remove('visible');
        activo = true;
    }
    if(!activo){
        $ventana1.style.display = "inline";
        activo = true;
        console.log("holaaaaa");
    }else{
        $ventana1.style.display = "none";
        activo = false;
    }
}

function mostrarInicio(){
    $ventana1.style.display = "none";
    $ventana2.style.display = "none";
    console.log("hola");
}

function cerrarProductos(){
    $ventana1.style.display = "none";
    console.log("hola!");
}

function fullProductos(){

}

function cerrarConcocenos(){
    $ventana2.style.display = "none";
}

function fullConcocenos(){

}