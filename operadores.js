/*
//Soma
console.log ( 50 + 10)

//Divisão
console.log ( 50 / 10)

//Multiplicação
console.log ( 50 * 10)

//Subitração
console.log ( 50 - 10)

//Sobra da Divisão
console.log ( 50 % 11)

//Exponenciação 
console.log ( 5 ** 2)*/

let n;

process.stdout.write("Digite em numero\n");

process.stdin.on("data", function (data) {
  n = Number(data.toString().trim());

  let ehpar = n % 2 == 0;
  if (ehpar){
    process.stdout.write(n + ' É Par!\n');
  } else {
    process.stdout.write(n + ' É Impar!\n');
  }
    process.exit();
  
});


