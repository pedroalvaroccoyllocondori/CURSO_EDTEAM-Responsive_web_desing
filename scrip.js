// MEDIA QUERY CON JAVASCRIPT

// metodo1--->por evento

addEventListener('DOMContentLoader', ()=>{
    const puntoQuiebreMedio=matchMedia('(max-width:840px)')
    if (puntoQuiebreMedio.matches) {
        document.body.style.background='orange'
    }else{
        document.body.style.background='pink'
    }
})
addEventListener('resize', ()=>{
    const puntoQuiebreMedio=matchMedia('(max-width:840px)')
    if (puntoQuiebreMedio.matches) {
        document.body.style.background='orange'
    }else{
        document.body.style.background='pink'
    }
})

// evento con funciones 

const puntoQuiebreMediano=matchMedia('(max-width:540px)')

const cambioColor=mediaQuery=>{
    mediaQuery.matches
    ?document.body.style.background='black'
    :document.body.style.background='gray'

}
cambioColor(puntoQuiebreMediano)
puntoQuiebreMediano.addListener(cambioColor)