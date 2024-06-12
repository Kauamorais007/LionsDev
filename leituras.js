let usuario = {};


console.log("digite seu nome");

process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();

  if (!usuario.nome) {
    if (entrada_usuario.length > 3) {
      usuario.nome = entrada_usuario;
      console.log("Insira agora a idade");
    } else {
      console.log("nome invalido");
    }
  } else if (!usuario.idade) {
    if (entrada_usuario >= 0 && entrada_usuario <= 150) {
      usuario.idade = entrada_usuario;
      console.log("Insira agora o seu salario");
    } else {
      console.log("idade invalida");
    }
  } else if (!usuario.salario) {
    if (entrada_usuario > 0) {
      usuario.salario = entrada_usuario;
      console.log("Insira seu sexo");
    } else {
      console.log("salario invalido");
    }
  } else if (!usuario.sexo) {
    if (entrada_usuario == "m" || entrada_usuario == "f") {
      usuario.sexo = entrada_usuario;

      switch (usuario.sexo) {
        case "m":
          console.log("masculino");
          break;
        case "f":
          console.log("feminino");
          break;
      }

      console.log("insira seu estado civil");
    } else {
      console.log("sexo invalido");
    }
  } else if (!usuario.estado_civil) {
    if (
      entrada_usuario == "s" ||
      entrada_usuario == "c" ||
      entrada_usuario == "v" ||
      entrada_usuario == "d"
    ) {
      usuario.estado_civil = entrada_usuario;

      switch (usuario.estado_civil) {
        case "s":
          console.log("solteiro");
          break;
        case "c":
          console.log("casado");
          break;
        case "v":
          console.log("viuvo");
          break;
        case "d":
          console.log("divorciado");
          break;

      }

      console.log(usuario)
    } else {
        console.log("estado civil invalido");
    }
  }
});
