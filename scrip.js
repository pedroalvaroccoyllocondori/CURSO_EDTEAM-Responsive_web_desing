const obtenerAnchoScroll=()=>innerWidth - document.documentElement.clientWidth

console.log(obtenerAnchoScroll());

document.documentElement.style.setProperty('--scroll-size',obtenerAnchoScroll());


// CSSOM css object model
// window.getComputedStyle(document.getElementById('imagen'))   --->obtener el elemento
// window.getComputedStyle(document.getElementById('imagen')).getPropertyValue('height')---->obtener el atributo del elemento

document.body.style.backgroundColor='black'

// AÑADIR CLASES A UN ELEMENTO
document.body.classList.add('red')
// creacion de un objeto style del

const color='yellow'
const size=15
const styles=`
    background:${color};
    color:white;
    margin:${size}rem;

`

document.getElementById('example').setAttribute('style',styles) 