let boton_top = document.querySelector("#boton_top")

document.addEventListener("scroll", ()=>{
    let posicionBtnTop = boton_top.offsetTop
    console.log(posicionBtnTop)

    let posicionScrolling = document.documentElement.scrollTop;
    console.log(posicionScrolling)

    if(posicionScrolling > posicionBtnTop - 1500){
        btnTop.classList.add("boton_topJS")
    }else{
        btnTop.classList.remove("boton_topJS")
    }
})