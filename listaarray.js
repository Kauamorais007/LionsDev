{
  let numeros = [];
  let media;
  let soma;

  process.stdout.write("Quais numeros voce quer calcular\n");

  process.stdin.on("data", function (data) {
    let resposta = Number(data.toString().trim());
    numeros.push(resposta);
    let soma = 0;
    for (let i = 0; i < numeros.length ; i++) {
     soma = soma + numeros[i]
    }
     media = soma / numeros.length;
        console.log(media)
        console.log(numeros)
      
    
    
   
  });
}
