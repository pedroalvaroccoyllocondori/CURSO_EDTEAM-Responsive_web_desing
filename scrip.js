

// escritura de variables css desde javascript para

document.documentElement.style.setProperty('--nombre','pedro_alvaro')




// lectura de variables css desde javascript


console.log(getComputedStyle(document.documentElement).getPropertyValue('--nombre'))