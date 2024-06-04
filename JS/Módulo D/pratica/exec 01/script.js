function carregar() {
    var msg = document.getElementById('msg')
    //var img = document.getElementById('foto') onde eu colocaria a fto
    var data = new Date()
    var hora = data.getHours()
    var hora = 22
    msg.innerHTML = (`Agora sao ${hora} horas`)
    if (hora >= 0 && hora < 12){
        //bom dia
        //img.src = '...'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        //img.src = '...'
        document.body.style.background = '#b9846f'
    }else{
        //Boa noite
        //img.src = '...'
        document.body.style.background = '#515154'
    }
}