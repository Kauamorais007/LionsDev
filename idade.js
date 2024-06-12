var anonasc;
var idade;
var resp;

console.log("Qual seu ano de nascimento?\n");

process.stdin.on("data", function (data) {
  if (!anonasc) {
    anonasc = Number(data.toString().trim());

    console.log("Você já fez aniversário este ano? (Sim ou Não)");
  } else if (!resp) {
    resp = data.toString().trim().toLowerCase();

    if (resp === "sim" || resp === "s") {
      idade = 2024 - anonasc;
      process.stdout.write("Você possui " + idade + " anos de idade!");
    } else {
      idade = 2023 - anonasc;
      process.stdout.write("Você possui " + idade + " anos de idade!");
    }
    process.exit();
  }
});
