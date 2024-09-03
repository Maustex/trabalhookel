const campoTexto = document.getElementById('campo-texto');  
const botao = document.getElementById('botao');  
const mensagem = document.getElementById('mensagem');  
  
botao.addEventListener('click', () => {  
  const texto = campoTexto.value;  
  mensagem.textContent = `Você digitou: ${texto}`;  
});
