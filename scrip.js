

// CSSOM css object model
// window.getComputedStyle(document.getElementById('imagen'))   --->obtener el elemento
// window.getComputedStyle(document.getElementById('imagen')).getPropertyValue('height')---->obtener el atributo del elemento

// METODO1 ACCEDIENDO A EL ELEEMTO
document.body.style.backgroundColor='gray'

//METODO 2---> AÑADIR CLASES A UN ELEMENTO
document.body.classList.add('red')
//MEDOTO 3--> CREACION DE UNA LISTA DE ESTILOS

const color='yellow'
const size=15
const styles=`
    background:${color};
    color:white;
    margin:${size}rem;

`
document.getElementById('example').setAttribute('style',styles) 
// METODO 4-->FUNCIONE DE ESTILOS

const estilos=(elemento,stiloss)=>{
    elemento.setAttribute('style',stiloss)
}

const h2=document.getElementById('h2')
const stilosh2=`
    background:green;
    color:white;
    margin:10rem;
`
estilos(h2,stilosh2)