function verificar(){ //função verificar
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) { //se fano estiver null ou acima do ano atual mandar um alerta
        alert('[ERROR] Por favor, verifique os dados e tente novamente')
    } else { //guardando variaveis de nome e genero
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (fsex[0].checked) { //caso o primeiro seletor estiver selecionado genero = homem
            genero = 'Homem'
        } else if (fsex[1].checked) { //senão genero = mulher
            genero = 'Mulher'
        } else {
            alert('[ERROR] Por favor, selecione o sexo e tente novamente')
            return
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos` //mensagem final mostrando genero dependendo da resposta e idade atual
    }
}
