// let numeros =[];
// let maior;
// console.log('Digites os numeros')
// process.stdin.on("data", function (data) {
//     let entrada = data.toString().trim().toLowerCase();
//     if (entrada === "sair" || entrada === "exit") {
//         console.log(resposta);
//         process.exit();
//       } if(!numeros){
//         for (let i = 0; i < numeros.length; i++) {
//             console.log(numeros[i]);
//         }

//       }


// })

// Exemplo 1 - Iterar sobre um array com forEach
let frutas = ["Maçã", "Pêra", "Uva"];

frutas.forEach(function (fruta) {
  console.log(fruta);
});

// Exemplo 2 - Iterar sobre um array de objetos com forEach
let pessoas = [
  { nome: "Lionel", idade: 30 },
  { nome: "Cristiano", idade: 33 },
  { nome: "Neymar", idade: 25 }
];

pessoas.forEach(function (pessoa) {
  console.log(pessoa.nome + " tem " + pessoa.idade + " anos.");
});

