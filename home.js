
let nav=document.querySelector('ul')
let open=document.querySelector('#open')
let close=document.querySelector('#close')

function clickon(){
    nav.style.display='block'
    open.style.display='none'
    close.style.display='block'
}

function clickoff(){
    nav.style.display='none'
    close.style.display='none'
    open.style.display='block'
}

