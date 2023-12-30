
function marcar(posicao){
    if(posicao.innerHTML == ""){
        posicao.innerHTML = "X"
        posicao.style.color = "red"
    }
    setTimeout(() => {
        casa = document.getElementById('casa' + Math.floor(Math.random() * 9))
        for(let i = 0; i < 9; i++){
            if(casa.innerHTML != ""){
                casa = document.getElementById('casa' + Math.floor(Math.random() * 9))
            }
        }
        casa.innerHTML = "O"
        casa.style.color = "blue"
        verificarVitoria()
    }, 1000);
    
}

function verificarVitoria(){
    let casa1 = document.getElementById('casa1').innerHTML
    let casa2 = document.getElementById('casa2').innerHTML
    let casa3 = document.getElementById('casa3').innerHTML
    let casa4 = document.getElementById('casa4').innerHTML
    let casa5 = document.getElementById('casa5').innerHTML
    let casa6 = document.getElementById('casa6').innerHTML
    let casa7 = document.getElementById('casa7').innerHTML
    let casa8 = document.getElementById('casa8').innerHTML
    let casa9 = document.getElementById('casa9').innerHTML

    if(casa1 == casa2 && casa2 == casa3 && casa1 != ""){
        alert("Vitoria")
        resetar()
    }else if(casa4 == casa5 && casa5 == casa6 && casa4 != ""){
        alert("Vitoria")
        resetar()
    }else if(casa7 == casa8 && casa8 == casa9 && casa7 != ""){
        alert("Vitoria")
        resetar()
    }else if(casa1 == casa4 && casa4 == casa7 && casa1 != ""){
        alert("Vitoria")
        resetar()
    }else if(casa2 == casa5 && casa5 == casa8 && casa2 != ""){
        alert("Vitoria")
        resetar()
    }else if(casa3 == casa6 && casa6 == casa9 && casa3 != ""){
        alert("Vitoria")
        resetar()
    }else if(casa1 == casa5 && casa5 == casa9 && casa1 != ""){
        alert("Vitoria")
        resetar()
    }else if(casa3 == casa5 && casa5 == casa7 && casa3 != ""){
        alert("Vitoria")
        resetar()
    }else if(casa1 != "" && casa2 != "" && casa3 != "" && casa4 != "" && casa5 != "" && casa6 != "" && casa7 != "" && casa8 != "" && casa9 != ""){
        alert("Deu velha")
        resetar()
    }
}
function resetar(){
    for(let i = 1; i < 10; i++){
        document.getElementById('casa' + i).innerHTML = ""
    }
}