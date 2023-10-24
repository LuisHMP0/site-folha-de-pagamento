let num = document.getElementById('num0')
let res = document.getElementById('res')
let elementosAdicionados = 0

dias = []
num.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        colocar();
    }
})

function colocar(){
    
    if (elementosAdicionados < 3){
    dias.push(Number(num.value))
    num.value = ''
    num.focus()
    elementosAdicionados++
    res.innerHTML = `Lista: ${dias}`
    } else {
        window.alert('Voce ja adicionou três elementos')
    }

    if (dias.length === 3){
        let diasTrabalhados = dias[0]
        let diasTotais = dias[1]
        let diasUteis = dias[2]
        let diasNaoUteis = diasTotais - diasUteis

        let dsrPorcentagem = diasNaoUteis/diasUteis
        let horasTrabalhadas = diasTrabalhados*6
        let salSemDsr = horasTrabalhadas*6
        let dsr = salSemDsr*dsrPorcentagem

        let salarioBruto = salSemDsr+dsr
        
        window.alert(salarioBruto)
    }
}



