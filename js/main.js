let contBanner__blocks = document.querySelector("contBanner__blocks")


document.addEventListener("DOMContentLoaded", ()=>{
    dataFech()
})


const dataFech = async() =>{
    try{
        const res = await fetch("image.json")
        const data = await res.json()
        pintarImagenes(data)
        
    }catch(error){
        console.log(" FALLA DE CARHA JSON ")
    }
}


const pintarImagenes = (data) =>{
    console.log(data.banner_1)
    //contBanner__blocks.setAttribute("src", )
}



/*
document.addEventListener("click", (e) =>{
    if(e.target.id === "arrowCursor1"){
        console.log("cursor1")
        contBanner__blocks.contBanner__blocks.setAttribute("src", "./source/BANNER1.jpg")
    }else if(e.target.id === "arrowCursor2"){
        console.log("cursor2")
        contBanner__blocks.contBanner__blocks.setAttribute("src", "./source/BANNER2.jpg")
    }else if(e.target.id === "arrowCursor3"){
        console.log("cursor3")
        contBanner__blocks.contBanner__blocks.setAttribute("src", "./source/BANNER3.jpg")
    }else{
        console.log("Ninguno")
    }
})*/

