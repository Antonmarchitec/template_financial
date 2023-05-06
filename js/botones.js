

// SCRIPT BOTON SUBIR

let botonTop = document.querySelector("#botonTop")

document.addEventListener("scroll", ()=>{
    let positionElementBtnTop = botonTop.offsetTop    //815
    let posElement = positionElementBtnTop - 815
    console.log(posElement)

    let positionScrolling = document.documentElement.scrollTop
    console.log(positionScrolling)

    if(positionScrolling > posElement + 500){
        botonTop.classList.add("boton_top_JS")
    }else if(positionScrolling < posElement + 500){
        botonTop.classList.remove("boton_top_JS")
    }
})

// SCRIPT BOTON SUBIR




// SCRIPT BOTON HAMBURGUER
let btnHamburguer = document.querySelector("#btnHamburguer")
let contHeaderMenu__menu = document.getElementById("contHeaderMenu__menu")

btnHamburguer.addEventListener("click", ()=>{
    console.log("presionaste el botn ")
    //contHeaderMenu__menu.classList.add("contHeaderMenu__menu__JS")

})

// SCRIPT BOTON HAMBURGUER
