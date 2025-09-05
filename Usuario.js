function atualizarTimer() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    document.getElementById('timer').textContent = `${horas}:${minutos}:${segundos}`;
  }

  setInterval(atualizarTimer, 1000);
  atualizarTimer(); // Chama na inicialização

  function registro(){
      const agora = new Date();
      const hora = agora.toLocaleTimeString('pt-BR');
      const data = agora.toLocaleDateString('pt-BR');
      document.getElementById("hora-registrada").innerText = `Ponto registrado às ${hora} de ${data}`;
  
}