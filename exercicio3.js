process.stdout.write("Qual o nome do aluno? \n");
let resposta = [];
let aluno = {
  nome: "",
  idade: "",
  curso: "",
};

process.stdin.on("data", function (data) {
  const entrada = data.toString().trim().toLowerCase();
  if (entrada === "sair" || entrada === "exit") {
    console.log(resposta);
    process.exit();
  }
  if (!aluno.nome) {
    aluno.nome = data.toString().trim();
    process.stdout.write("Quantos anos ele tem? \n");
  } else if (!aluno.idade) {
    aluno.idade = data.toString().trim();
    process.stdout.write("Qual o curso do aluno? \n");
  } else if (!aluno.curso) {
    aluno.curso = data.toString().trim();
    resposta.push(aluno);
    aluno = {
      nome: "",
      idade: "",
      curso: "",
    };
    process.stdout.write("Digite Exit para sair, senão, Qual o nome proximo aluno? \n");
  }
});
