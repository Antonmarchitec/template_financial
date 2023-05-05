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