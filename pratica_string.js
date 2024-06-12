
process.stdout.write("Qual seu nome? \n");

 let pessoa = {
  nome : '',
  idade : '',
  habilitacao : ''
};

process.stdin.on("data", function (data) {
  if (!pessoa.nome) {
    pessoa.nome = data.toString().trim();

    process.stdout.write("Quantos anos você tem? \n");
  } else if (!pessoa.idade) {
    pessoa.idade = data.toString().trim();
    process.stdout.write(
      "Seu nome é " + pessoa.nome + ", e você possui " + pessoa.idade + " anos. "
    );
    process.stdout.write("Você possui Habilitação? \n");
  } else {
    pessoa.habilitacao = data.toString().trim().toLowerCase();
    if (pessoa.habilitacao == "sim" || pessoa.habilitacao == "s") {
      process.stdout.write("Você pode dirigir. \n");
    } else if (pessoa.habilitacao == "não" || pessoa.habilitacao == "nao" || pessoa.habilitacao == "n"){
      process.stdout.write("Você não pode dirigir. \n");
    } else {
      process.stdout.write('Resposta invalida, responda com Sim ou Não!\n');
    }

    process.exit();
  }
});
