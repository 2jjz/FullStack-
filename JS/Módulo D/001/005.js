var idade = 68 //idade definida
console.log(`voce tem ${idade} anos!`)
if(idade < 16){//se idade for menor que 16 ela nao vota
    console.log('Não vota!')
} else if(idade < 18 || idade > 67){// se idade for menos que 18(lembrando que no codigo acima, ja tirou os menores de 16 entao nessa linha, seria entre 16 e 18) = voto Opcinal
    console.log('Voto Opcional')// ||(ou), idade acima de 67 tambem e opcional
} else {// como no primeiro codigo ja tiramos os menores de 16, no segundo os menores de 18, agora so resta os maiores de 18 entao por isso que nao tem if(...)
    console.log('Voto Obrigatório')
}