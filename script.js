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
        
        document.getElementById('div1').remove()
        res.innerHTML += `<strong>Informações</strong> <br><br>`
        res.innerHTML += `<p> Salário bruto -----------------------------------------<strong> $ ${salarioBruto} </strong> </p>`
        res.innerHTML += `<p> Salário líquido ---------------------------------------<strong> $ ${descontos(salarioBruto)} </strong> </p>`
        res.innerHTML += `<p> <strong> Descontos </strong> <br><br></p>`
        res.innerHTML += `<p> INSS --------------------------------------------------<strong> $ ${descontos.inss(salarioBruto)} </strong> </p>`

    }
}

function descontos(salBruto){
    let inss = salBruto*0.08
    let VT = salBruto*0.06
    let VTParcial = salBruto*0.03

    let desconto = inss+VT
    let salarioLiquido = salBruto-desconto

    return salarioLiquido
}





