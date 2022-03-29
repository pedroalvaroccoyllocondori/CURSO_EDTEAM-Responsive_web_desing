const obtenerAnchoScroll=()=>innerWidth - document.documentElement.clientWidth

console.log(obtenerAnchoScroll());

document.documentElement.style.setProperty('--scroll-size',obtenerAnchoScroll());

