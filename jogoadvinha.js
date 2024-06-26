const min = 1;
const max = 200;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
let tentativas = 0;
const maxtentativas = 5;

process.stdout.write('Adivinhe o número entre 1 e 100: ');

process.stdin.on('data', (input) => {
  const entrada = parseInt(input.toString().trim());

  if (isNaN(entrada) || entrada < min || entrada > max) {
    process.stdout.write('Por favor, insira um número válido entre 1 e 100: ');
  } else {
    tentativas++;

    if (entrada === randomNum) {
      process.stdout.write(`Parabéns! Você acertou o número ${randomNum} em ${tentativas} tentativas.\n`);
      process.exit();
    } else {
      process.stdout.write('Você errou! Tente novamente.\n');
      if (tentativas === maxtentativas) {
        process.stdout.write(`Você atingiu o número máximo de tentativas (${maxtentativas}). O número era ${randomNum}.\n`);
        process.exit();
      } else {
        process.stdout.write(`Tentativa ${tentativas} de ${maxtentativas}.\n`);
        process.stdout.write('Adivinhe o número entre 1 e 100: ');
      }
    }
  }
});
