/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multiplos3 = [];

for (let i = 0; i < numeros.length; i++) {
  aux = numeros[i] % 3 == 0;
  if(aux){
    multiplos3.push(numeros[i])
  }
} 
console.log(multiplos3);

let pessoa = {
  nome: 'Kaua',
  idade: 19,
  cidade: 'Ponta Grossa'
}
if (pessoa.idade > 17) {
  console.log(pessoa.nome, 'é maior de idade!')
} else {
  console.log(pessoa.nome, 'é menor de idade!')
}
*/
/* 
let cesta = ["maça", "banana", "pessego", "maça", "banana"];
let contador = {};

for (let i = 0; i < cesta.length; i++) {
  let fruta = cesta[i];

  if (contador[fruta]) {
    contador[fruta]++;
  } else {
    contador[fruta] = 1;
  }
}
for (let fruta in contador) {
  console.log(fruta + ": " + contador[fruta]);
}
 */
const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Carlos", nota: 4.2 },
  { nome: "Beatriz", nota: 6.8 },
  { nome: "Daniel", nota: 7.0 },
  { nome: "Ester", nota: 5.5 },
];

for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 7 && alunos[i].nota <= 10) {
    console.log(alunos[i].nome, "Aprovado/a");
  } else if (alunos[i].nota < 7 && alunos[i].nota >= 5) {
    console.log(alunos[i].nome, "Recuperação");
  } else if (alunos[i].nota < 5) {
    console.log(alunos[i].nome, "Reprovado/a");
  } else {
    console.log(alunos[i].nome, "Nota invalida");
  }
}
