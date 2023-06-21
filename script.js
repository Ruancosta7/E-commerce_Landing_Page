// let a_remove = document.body.querySelector('a')
// a_remove.addEventListener('click', (e)=>{
//     e.preventDefault()
// })

// let b_remove = document.body.querySelector('button')
// b_remove.addEventListener('click', (e)=>{
//     e.preventDefault()
// })


// let c_remove = document.body.querySelector('#menu')
// c_remove.addEventListener('click', (e)=>{
//     document.querySelector('#menu').classList.toggle('menu-rotate')
//     e.preventDefault()
// })

// let menu = document.querySelector('#menu')
// menu.addEventListener('click', (e)=>{
//     document.querySelector('nav').classList.toggle('visibility')
//     document.querySelector('.logo').classList.toggle('visibility2')
//     document.querySelector('main').classList.toggle('visibility3')
//     document.querySelector('.products-img').classList.toggle('visibility3')
//     document.querySelector('.arrivals').classList.toggle('visibility3')
//     document.querySelector('.sale').classList.toggle('visibility3')
//     document.querySelector('.best-seller').classList.toggle('visibility3')
//     document.querySelector('.img-work').classList.toggle('visibility3')
//     document.querySelector('.special-product').classList.toggle('visibility3')
//     document.querySelector('.blogs').classList.toggle('visibility3')
//     document.querySelector('.end-page').classList.toggle('visibility3')
//     document.querySelector('.footer').classList.toggle('visibility3')
// })

document.addEventListener('readystatechange', (event)=>{
    if(event.target.readyState === 'complete'){
        let a_remove = document.body.querySelector('a')
a_remove.addEventListener('click', (e)=>{
    e.preventDefault()
})

let b_remove = document.body.querySelector('button')
b_remove.addEventListener('click', (e)=>{
    e.preventDefault()
})


let c_remove = document.body.querySelector('#menu')
c_remove.addEventListener('click', (e)=>{
    document.querySelector('#menu').classList.toggle('menu-rotate')
    e.preventDefault()
})

let menu = document.querySelector('#menu')
menu.addEventListener('click', (e)=>{
    document.querySelector('nav').classList.toggle('visibility')
    document.querySelector('.logo').classList.toggle('visibility2')
    document.querySelector('main').classList.toggle('visibility3')
    document.querySelector('.products-img').classList.toggle('visibility3')
    document.querySelector('.arrivals').classList.toggle('visibility3')
    document.querySelector('.sale').classList.toggle('visibility3')
    document.querySelector('.best-seller').classList.toggle('visibility3')
    document.querySelector('.img-work').classList.toggle('visibility3')
    document.querySelector('.special-product').classList.toggle('visibility3')
    document.querySelector('.blogs').classList.toggle('visibility3')
    document.querySelector('.end-page').classList.toggle('visibility3')
    document.querySelector('.footer').classList.toggle('visibility3')
})
let nav = document.getElementById('nav')
nav.addEventListener('click', (e)=>{
    document.querySelector('nav').classList.toggle('visibility')
    document.querySelector('.logo').classList.toggle('visibility2')
    document.querySelector('main').classList.toggle('visibility3')
    document.querySelector('.products-img').classList.toggle('visibility3')
    document.querySelector('.arrivals').classList.toggle('visibility3')
    document.querySelector('.sale').classList.toggle('visibility3')
    document.querySelector('.best-seller').classList.toggle('visibility3')
    document.querySelector('.img-work').classList.toggle('visibility3')
    document.querySelector('.special-product').classList.toggle('visibility3')
    document.querySelector('.blogs').classList.toggle('visibility3')
    document.querySelector('.end-page').classList.toggle('visibility3')
    document.querySelector('.footer').classList.toggle('visibility3')
    document.querySelector('#menu').classList.toggle('menu-rotate')

})

    }
})
    

