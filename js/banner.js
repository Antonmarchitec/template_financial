let container = document.querySelector("#container")
let cajas = document.querySelectorAll("#cajas")
let arrowLeft = document.querySelector(".arrowLeft")
let arrowRight = document.querySelector(".arrowRight")


        let ultimoEle = cajas[cajas.length - 1]
        container.insertAdjacentElement("afterbegin", ultimoEle)


        document.addEventListener("click", e =>{
        if(e.target.classList.contains("arrowRight")){
            let cajasB = document.querySelectorAll("#cajas")
            let primerEle = cajasB[cajasB.length - 3 ]
            container.style.marginLeft = "-300%"
            container.style.transition = "1s linear"
            setTimeout(() =>{
                container.style.transition = "none"
                container.insertAdjacentElement("beforeend", primerEle)
                container.style.marginLeft = "-100%"
            },300)
            
        }else if(e.target.classList.contains("arrowLeft")){
            let elementos = document.querySelectorAll("#cajas")
            let ultimoBloque = elementos[elementos.length - 1]
            container.style.marginLeft = "0"
            container.style.transition = "1s all"
            setTimeout(()=>{
                container.style.transition = "none"
                container.insertAdjacentElement("afterbegin", ultimoBloque)
                container.style.marginLeft = "-100%"
            },300)  
          }
        })
        