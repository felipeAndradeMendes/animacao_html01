//chamando elementos do HTML
let jogador = document.querySelector("#jogador")
let vel = document.querySelector("#vel")
let iniciar = document.querySelector("#comecar")

iniciar.addEventListener("click", ()=>{iniciar.disabled = true})                // Desabilita o btn "iniciar" apos primeiro click
function reload(){document.location.reload(true)}                               // Refresh na pagina ao clicar em "refresh"


let setMoverUp;                     // Declara a variavel de clearInterval no contexto geral
let setMoverDown;                   // Declara a variavel de clearInterval no contexto geral

let posX = 0                        // Posições iniciais absolutas de left e top
let posY = 0

let posX02 = 580                    // Posições finais absolutas de left e top
let posY02 = 580



function moverJogadorDown(x, y){    // Atribui valores ao top e left do elemento, de acordo com setInterval crescente

    jogador.style.top = `${y}px`
    jogador.style.left = `${x}px`
    console.log("descendo")   
    
    if(x >= 580 && y >= 580){       // Quando o elemento chega no limite absoluto de baixo do elemento pai... 
        clearInterval(setMoverDown) // ...pára o intervalo que faz descer...
        posX02 = 580                // ...atribui os valores maximos de top e left...
        posY02 = 580       
        moverUp()                   // ... e ativa a função para subir.
    }    
}

function moverJogadorUp(x, y){      // Atribui valores ao top e left do elemento, de acordo com setInterval decrescente
    
    jogador.style.top = `${y}px`
    jogador.style.left = `${x}px`
    console.log("subindo")  
    
    if(x<=0 && y<=0){               // Quando o elemento chega no limite absoluto de cima do elemento pai
        clearInterval(setMoverUp)   // ...pára o intervalo que faz subir...
        posX = 0                    // ...atribui os valores mínimos de top e left...
        posY = 0       
        moverDown()                 // ... e ativa a função para descer.
    }
    
}

function moverDown(){                       // Função que contém o setInterval para descer o elemento.
     setMoverDown = setInterval(()=>{          
            moverJogadorDown(posX++, posY++)    
    }, vel.value)                           // usa como tempo o valor inserido na caixa de numero da página
}


function moverUp(){                         // Função que contém o setInterval para subir o elemento.
     setMoverUp = setInterval(()=>{
        moverJogadorUp(posX02--, posY02--)
    }, vel.value)                           // usa como tempo o valor inserido na caixa de numero da página
}


/* README
Por falta de tempo, o desenvolvimento desse pequeno projeto de treino, não avançou a ponto de aperfeiçoar vários detalhes.
Por exemplo, o valor numerico inserido na caixa de numeros pode ser alterado a qualquer momento, porém só terá efeito quando o elemento
atingir a margem extrema do elemento pai. Essa parte não foi trabalhada. */
