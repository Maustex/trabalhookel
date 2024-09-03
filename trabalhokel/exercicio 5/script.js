let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 0;

document.getElementById('verificar').addEventListener('click', function() {
    const palpite = parseInt(document.getElementById('palpite').value);
    const resultado = document.getElementById('resultado');
    const reiniciar = document.getElementById('reiniciar');

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        resultado.textContent = 'Digite um número válido entre 1 e 100.';
        return;
    }

    tentativas++;
    
    if (palpite < numeroAleatorio) {
        resultado.textContent = 'Seu palpite está muito baixo. Tente novamente!';
    } else if (palpite > numeroAleatorio) {
        resultado.textContent = 'Seu palpite está muito alto. Tente novamente!';
    } else {
        resultado.textContent = `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`;
        reiniciar.style.display = 'block';
    }
});

document.getElementById('reiniciar').addEventListener('click', function() {
    numeroAleatorio = gerarNumeroAleatorio();
    tentativas = 0;
    document.getElementById('palpite').value = '';
    document.getElementById('resultado').textContent = '';
    this.style.display = 'none';
});

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}
