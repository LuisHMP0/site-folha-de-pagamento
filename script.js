let num = document.getElementById('num0').value
let res = document.getElementById('res')
let elementosAdicionados = 0

dias = []

function colocar(){
    if (elementosAdicionados < 3){
    dias.push(Number(num.value))
    num.value = ''
    num.focus()
    elementosAdicionados++
    let diasNaoUteis = (Number(dias[1]))-(Number(dias[2]))
    let dsr = diasNaoUteis/(Number(dias[2]))
    calculoFolha(Number(dias[0]))
    let total = totalSemDSR*dsr
    
    res.innerHTML = `${total}`
    } else {
        window.alert('Voce ja adicionou os 3 elementos')
    }
}

function calculoFolha(diasTrabalhados){
    let horasTrabalhadas = diasTrabalhados*6
    let totalSemDSR = horasTrabalhadas*6
    return totalSemDSR
}

