var agora = new Date() //pega informações da data atual
var horas = agora.getHours() //comando especificando que quero apenas as horas
console.log(`Agora sao exatamente ${horas}, `) //mensagem
if(horas < 12){ //caso hora seja menor que 12 dar bom dia
    console.log(`Bom dia!`)
} else if (horas < 16){ //caso hora seja menor que 16 dar boa tarde
    console.log(`Boa tarde! `)
}else{ // de resto dar boa noite
    console.log(`Boa noite`)
}