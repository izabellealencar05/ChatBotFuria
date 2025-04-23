const chatBox = document.getElementById('chat-box');

async function responder(opcao) {
  const opcoesTexto = {
    jogo: 'Próximo Jogo',
    elenco: 'Escalação Atual',
    clipes: 'Clipes Recentes',
    curiosidade: 'Curiosidade',
    loja: 'Loja da FURIA'
  };

  chatBox.innerHTML += `<div class="user-msg">${opcoesTexto[opcao]}</div>`;

  if (opcao === 'loja') {
    window.open('https://acesse.one/LojaDaFuria', '_blank');
    return;
  }
  if (opcao === 'resetar') {
    chatBox.innerHTML = `<div class="bot-msg">Oi! Sou o bot da FURIA. Bora acompanhar o time de CS?</div>`;
    return;
  }
  

  const response = await fetch('dados.json');
  const data = await response.json();

  let resposta = '';

  switch (opcao) {
    case 'jogo':
      const jogo = data.jogo;
      resposta = `FURIA vs ${jogo.oponente} - ${jogo.data} às ${jogo.horario}`;
      break;
    case 'elenco':
      resposta = `Line-up atual: ${data.elenco.jogadores.join(', ')}`;
      break;
    case 'clipes':
      resposta = data.clipes
        .map(c => `<a href="${c.url}" target="_blank">${c.titulo}</a>`)
        .join('<br>');
      break;
    case 'curiosidade':
      const curiosidades = [
        'A FURIA começou como um time de CS:GO em 2017!',
        'O arT é conhecido por seu estilo de jogo super agressivo.',
        'A torcida da FURIA é considerada uma das mais engajadas do mundo!',
        'A FURIA já representou o Brasil em Majors internacionais!'
      ];
      resposta = curiosidades[Math.floor(Math.random() * curiosidades.length)];
      break;
  }

  chatBox.innerHTML += `<div class="bot-msg">${resposta}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}
