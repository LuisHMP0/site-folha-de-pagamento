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
    if (num.value > 31 || num.value < 0) {
        window.alert('[ERRO] Número inválido. O número não pode ser maior que 31 ou menor que 0, digite novamente.')
    } else {
    dias.push(Number(num.value))
    num.value = ''
    num.focus()

    if (dias.length === 3){
        let diasNaoUteis = dias[1] - dias[2]
        let dsrPorcentagem = diasNaoUteis/dias[2]
        let horasTrabalhadas = dias[0]*6
        let salSemDsr = horasTrabalhadas*6
        let dsr = salSemDsr*dsrPorcentagem

        let salarioBruto = salSemDsr+dsr
        
        let divh1 = document.getElementById('header')
        let h1 = document.getElementById('h1')
        h1.remove()
        divh1.innerHTML = ` <h1> Contracheque </h1> <br>`
        
        document.getElementById('div1').remove()
        res.innerHTML += `<strong>Salário</strong> <br><br>`
        res.innerHTML += `<p id="p01"> Salário bruto -----------------------------------------<strong> R$ ${salarioBruto.toFixed(2)} </strong> </p>`
        res.innerHTML += `<p id="p01"> Salário líquido ---------------------------------------<strong> R$ ${descontos(salarioBruto).toFixed(2)} </strong> </p>`
        res.innerHTML += `<p> <strong> Descontos e Adicionais </strong> <br><br></p>`
        res.innerHTML += `<p id="p02"> INSS -------------------------------------------------<strong> R$ ${inss(salarioBruto).toFixed(2)} </strong> </p>`
        res.innerHTML += `<p id="p02"> Vale Transporte 6% --------------------------------<strong> R$ ${vt6(salarioBruto).toFixed(2)} </strong> </p>`
        res.innerHTML += `<p id="p03"> DSR --------------------------------------------------<strong> R$ ${dsr.toFixed(2)} </strong> </p>`

    }}

}

function descontos(salBruto){
    let inss = salBruto*0.08
    let VT = salBruto*0.06
    let VTParcial = salBruto*0.03

    let desconto = inss+VT
    let salarioLiquido = salBruto-desconto

    return salarioLiquido
}

function inss(salBruto){
    let inss = salBruto*0.08
    return inss
}

function vt6(salBruto){
    let VT = salBruto*0.06
    return VT
}





