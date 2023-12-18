const permitidos = ["1","2","3","4","5","6","7","8","9","0"]
const operadores = ["+","-","/","*"]
const tela = document.getElementById("tela")
const pegar_numeros = document.querySelectorAll(".botoes")

let nmrs = ""

pegar_numeros.forEach((evt) => {
    evt.addEventListener("click", (el) => {
         const valorClicado = el.target.value;

         if (operadores.includes(nmrs.slice(-1)) && operadores.includes(valorClicado)) {
             return;
         }
         nmrs += valorClicado;
         tela.innerText = nmrs
    });
 });

function limpar(){
    tela.innerText = ""
    nmrs = ""
}

function resultado(){
    nmrs = eval(nmrs)
    tela.innerText = nmrs
}

function fatorial(){
    resultado_fatorial = 1
    if(nmrs == 1 || nmrs == 0){
        resultado_fatorial = 1
    }else{
        for(let i = nmrs;i > 0;i--){
            resultado_fatorial = resultado_fatorial * i
        }
    }
    nmrs = resultado_fatorial
    tela.innerText = nmrs
}

var parenteses = 0
function selecionar_parenteses(){
    if(parenteses % 2 == 0 ){
        parenteses++
        nmrs += "("
    }else{
        parenteses++
        nmrs += ")"
    }
}

function verificar_operador() {
    for (let i = 0; i < operadores.length; i++) {
        if (nmrs.endsWith(operadores[i]) && isNaN(Number(nmrs[nmrs.length - operadores[i].length - 1]))) {
            return true;
        }
    }
    return false;
}