// UTILITIES
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// VARIABLES
let moviendo1 = false;
let moviendo2 = false;
let moviendo3 = false;
let moviendo4 = false;
let moviendo5 = false;
let ajuste = false;
let activo = false;

let fullProductosBtn = false;
let fullBuscaminasBtn = false;
let fullConocenosBtn = false;
let fullContactoBtn = false;
let fullPaintBtn = false;

// ELEMENTS
const $ventana1 = $('#ventana'); //La ventana general PRODUCTO
const $ventana2 = $('#ventana2'); //La ventana general CONÓCENOS
const $ventana3 = $('#ventana3'); //La ventana general BUSCAMINAS
const $ventana4 = $('#ventana4'); //La ventana general PAINT
const $ventana5 = $('#ventana5'); //La ventana de CONTACTO
const $main = $('#main');
const $canva = $('#canva'); //Herramienta auxiliar para poder mover las ventanas con facilidad
// La zona que deben seleccionar para poder mover las ventanas

const $ventana1supven = $('#ventana1supven');
const $ventana2supven = $('#ventana2supven');
const $ventana3supven = $('#ventana3supven');
const $ventana4supven = $('#ventana4supven');
const $ventana5supven = $('#ventana5supven');

const $seleccionable1 = $('#seleccionable1'); 
const $seleccionable2 = $('#seleccionable2');
const $seleccionable3 = $('#seleccionable3');
const $seleccionable4 = $('#seleccionable4');
const $seleccionable5 = $('#seleccionable5');

const $inicioFooter = $('#inicioFooter');
const $productoFooter = $('#productoFooter');
const $conocenosFooter = $('#conocenosFooter');
const $contactoFooter = $('#contactoFooter');
const $paintFooter = $('#paintFooter');
const $buscaminasFooter = $('#buscaminasFooter');

const $minCo = $('#minCo');
const $fullCo = $('#fullCo');
const $closeCo = $('#closeCo');

const $minCont = $('#minCont');
const $fullCont = $('#fullCont');
const $closeCont = $('#closeCont');

const $minPro = $('#minPro');
const $fullPro = $('#fullPro');
const $closePro = $('#closePro');

const $minPa = $('#minPa');
const $fullPa = $('#fullPa');
const $closePa = $('#closePa');

const $minBus = $('#minBus');
const $fullBus = $('#fullBus');
const $closeBus = $('#closeBus');

const $productoIcon = $('#productoIcon');
const $contactoIcon = $('#contactoIcon')
const $conocenosIcon = $('#conocenosIcon');
const $buscaminasIcon = $('#buscaminasIcon');
const $paintIcon = $('#paintIcon');

//EVENTS
$seleccionable1.addEventListener('mousedown', activarVentana);
$seleccionable2.addEventListener('mousedown', activarVentana2);
$seleccionable3.addEventListener('mousedown', activarVentana3);
$seleccionable4.addEventListener('mousedown', activarVentana4);
$seleccionable5.addEventListener('mousedown', activarVentana5);
$seleccionable1.addEventListener('mousedown', startMove1);
$seleccionable2.addEventListener('mousedown', startMove2);
$seleccionable3.addEventListener('mousedown', startMove3);
$seleccionable4.addEventListener('mousedown', startMove4);
$seleccionable5.addEventListener('mousedown', startMove5);

$inicioFooter.addEventListener('click', mostrarInicio);
$productoFooter.addEventListener('click', mostrarProducto);
$conocenosFooter.addEventListener('click', mostrarConocenos);
$contactoFooter.addEventListener('click', mostrarContacto);
$paintFooter.addEventListener('click', mostrarPaint);
$buscaminasFooter.addEventListener('click', mostrarBuscaminas);

$productoIcon.addEventListener('click', mostrarProducto);
$contactoIcon.addEventListener('click', mostrarContacto);
$conocenosIcon.addEventListener('click', mostrarConocenos);
$buscaminasIcon.addEventListener('click', mostrarBuscaminas);
$paintIcon.addEventListener('click', mostrarPaint);

$minCo.addEventListener('click', cerrarConcocenos);
$fullCo.addEventListener('click', fullConcocenos);
$closeCo.addEventListener('click', cerrarConcocenos);

$minCont.addEventListener('click', cerrarContactos);
$fullCont.addEventListener('click', fullContactos);
$closeCont.addEventListener('click', cerrarContactos);

$minPro.addEventListener('click', cerrarProductos);
$fullPro.addEventListener('click', fullProductos);
$closePro.addEventListener('click', cerrarProductos);

$minPa.addEventListener('click', cerrarPaint);
$fullPa.addEventListener('click', fullPaint);
$closePa.addEventListener('click', cerrarPaint);

$minBus.addEventListener('click', cerrarBuscaminas);
$fullBus.addEventListener('click', fullBuscaminas);
$closeBus.addEventListener('click', cerrarBuscaminas);

//ajustes
$ventana1.addEventListener('mousemove', moveAjuste);
$ventana2.addEventListener('mousemove', moveAjuste);
$ventana3.addEventListener('mousemove', moveAjuste);
$ventana4.addEventListener('mousemove', moveAjuste);
$ventana5.addEventListener('mousemove', moveAjuste);

$ventana1.addEventListener('mouseup', stopAjuste);
$ventana2.addEventListener('mouseup', stopAjuste);
$ventana3.addEventListener('mouseup', stopAjuste);
$ventana4.addEventListener('mouseup', stopAjuste);
$ventana5.addEventListener('mouseup', stopAjuste);

window.addEventListener('mousemove', move);
window.addEventListener('mousemove', move);

//para
window.addEventListener('mouseup', stopMove1);
window.addEventListener('mouseup', stopMove2);
window.addEventListener('mouseup', stopMove3);
window.addEventListener('mouseup', stopMove4);
window.addEventListener('mouseup', stopMove5);



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
    if(moviendo4){
        const { offsetX, offsetY } = event;
        $ventana4.style.top = offsetY+"px";
        $ventana4.style.left = -200+offsetX+"px";
        console.log($ventana4.style.top);
    }
    if(moviendo5){
        const { offsetX, offsetY } = event;
        $ventana5.style.top = offsetY+"px";
        $ventana5.style.left = -200+offsetX+"px";
        console.log($ventana5.style.top);
    }
}

function moveAjuste(){
    ajuste = true;
}
function startMove2(){
    moviendo2 = true;
}
function startMove3(){
    moviendo3 = true;
    $canva.classList.add('visible');
}
function startMove4(){
    moviendo4 = true;
    $canva.classList.add('visible');
}
function startMove5(){
    moviendo5 = true;
    $canva.classList.add('visible');
}

function stopAjuste(){
    ajuste = false;
}
function stopMove2(){
    moviendo2 = false;
    $canva.classList.remove('visible');
}
function stopMove3(){
    moviendo3 = false;
    $canva.classList.remove('visible');
}
function stopMove4(){
    moviendo4 = false;
    $canva.classList.remove('visible');
}
function stopMove5(){
    moviendo5 = false;
    $canva.classList.remove('visible');
}

function activarVentana(){
    $ventana1.classList.add('activeVen');
    $ventana2.classList.remove('activeVen');
    $ventana3.classList.remove('activeVen');
    $ventana4.classList.remove('activeVen');
    $ventana5.classList.remove('activeVen');
    $canva.classList.add('visible');
}

function activarVentana2(){
    $ventana2.classList.add('activeVen');
    $ventana1.classList.remove('activeVen');
    $ventana3.classList.remove('activeVen');
    $ventana4.classList.remove('activeVen');
    $ventana5.classList.remove('activeVen');
    $canva.classList.add('visible');
}

function activarVentana3(){
    $ventana3.classList.add('activeVen');
    $ventana1.classList.remove('activeVen');
    $ventana2.classList.remove('activeVen');
    $ventana4.classList.remove('activeVen');
    $ventana5.classList.remove('activeVen');
    $canva.classList.add('visible');
}

function activarVentana4(){
    $ventana4.classList.add('activeVen');
    $ventana1.classList.remove('activeVen');
    $ventana2.classList.remove('activeVen');
    $ventana3.classList.remove('activeVen');
    $ventana5.classList.remove('activeVen');
    $canva.classList.add('visible');
}

function activarVentana5(){
    $ventana5.classList.add('activeVen');
    $ventana1.classList.remove('activeVen');
    $ventana2.classList.remove('activeVen');
    $ventana3.classList.remove('activeVen');
    $ventana4.classList.remove('activeVen');
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

function mostrarContacto(){
    if($ventana5.style.display == "none"){
        activo = false;
    }
    if(!activo){
        $ventana5.style.display = "inline";
        activo = true;
        activarVentana2();
    }else{
        $ventana5.style.display = "none";
        activo = false;
    }
}

function mostrarBuscaminas(){
    $ventana3.style.display = "inline";
}


function mostrarPaint(){
    $ventana4.style.display = "inline";
}

function mostrarProducto(){
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
    $ventana3.style.display = "none";
    $ventana4.style.display = "none";
    console.log("hola");
}

function cerrarProductos(){
    $ventana1.style.display = "none";
    console.log("hola!");
}

function fullProductos(){
    if(!fullProductosBtn){
        $ventana1.classList.remove('ventanaGeneral');
        $ventana1.style.top = "0px";
        $ventana1.style.left = "0px";
        $ventana1.classList.add('fullScreen');
        fullProductosBtn = true;
    }else{
        $ventana1.classList.remove('fullScreen');
        $ventana1.classList.add('ventanaGeneral');
        fullProductosBtn = false;
    }
    
}


function cerrarPaint(){
    $ventana4.style.display = "none";
}

function fullPaint(){
    if(!fullProductosBtn){
        $ventana4.classList.remove('ventanaGeneral');
        $ventana4.style.top = "0px";
        $ventana4.style.left = "0px";
        $ventana4.classList.add('fullScreen');
        fullProductosBtn = true;
    }else{
        $ventana4.classList.remove('fullScreen');
        $ventana4.classList.add('ventanaGeneral');
        fullProductosBtn = false;
    }
    
}

function cerrarConcocenos(){
    $ventana2.style.display = "none";
}

function fullConcocenos(){
    if(!fullProductosBtn){
        $ventana2.classList.remove('ventanaGeneral');
        $ventana2.style.top = "0px";
        $ventana2.style.left = "0px";
        $ventana2.classList.add('fullScreen');
        $ventana2supven.classList.add('width');
        fullProductosBtn = true;
    }else{
        $ventana2.classList.remove('fullScreen');
        $ventana2.classList.add('ventanaGeneral');
        $ventana2supven.classList.remove('width');
        fullProductosBtn = false;
    }
    
}

function cerrarBuscaminas(){
    $ventana3.style.display = "none";
}

function fullBuscaminas(){
    if(!fullProductosBtn){
        $ventana3.classList.remove('ventanaGeneral');
        $ventana3.style.top = "0px";
        $ventana3.style.left = "0px";
        $ventana3.classList.add('fullScreen');
        fullProductosBtn = true;
    }else{
        $ventana3.classList.remove('fullScreen');
        $ventana3.classList.add('ventanaGeneral');
        fullProductosBtn = false;
    }
    
}

function cerrarContactos(){
    $ventana5.style.display = "none";
}

function fullContactos(){
    if(!fullProductosBtn){
        $ventana5.classList.remove('ventanaGeneral');
        $ventana5.style.top = "0px";
        $ventana5.style.left = "0px";
        $ventana5.classList.add('fullScreen');
        $ventana5supven.classList.add('width');
        fullProductosBtn = true;
    }else{
        $ventana5.classList.remove('fullScreen');
        $ventana5.classList.add('ventanaGeneral');
        $ventana5supven.classList.remove('width');
        fullProductosBtn = false;
    }
    
}