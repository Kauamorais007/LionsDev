let resposta = '';

process.stdout.write("Você gosta de café? (Sim ou Não)\n");

process.stdin.on("data", function (data) {
  resposta = data.toString().trim().toLowerCase();
  if (resposta == 'sim' || 's') {
    process.stdout.write('Você tem meu respeito');
  } else {
      process.stdout.write("Duvidoso \n");
    }

    process.exit();
  });
