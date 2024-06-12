console.log('insira um numero')
let numero;
let resposta;
process.stdin.on('data', function (data) {
 numero = Number(data.toString().trim())
 for (let i = numero; i > 0; i--) {
    resposta = numero * i;
}

})