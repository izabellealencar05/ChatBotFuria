# 🤖 Bot da FURIA

Um chatbot interativo feito em HTML, CSS e JavaScript para os fãs da FURIA e amantes de Counter-Strike! Acompanhe o próximo jogo, veja a escalação atual, curiosidades sobre o time e muito mais.

## 💬 Funcionalidades

- 📅 Exibe o próximo jogo da FURIA
- 🧑‍🤝‍🧑 Mostra a line-up atual do time
- 🤯 Traz curiosidades aleatórias sobre a FURIA
- 🛍️ Acesso direto à [Loja da FURIA](https://acesse.one/LojaDaFuria)
- 🔄 Botão para resetar a conversa

## 🖼️ Preview

![image](https://github.com/user-attachments/assets/3a18167f-27cc-4f19-8203-72ff75478c77)

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- JSON (para simular dados)

## 📁 Estrutura de Arquivos

```
📦 ChatBotFuria
├── index.html        # Estrutura da página e botões de interação
├── style.css         # Estilos visuais e layout
├── script.js         # Lógica do chatbot
├── dados.json        # Dados utilizados nas respostas
└── assets/
    └── logoFuria.png # Logo da FURIA exibida no cabeçalho
```

## 📜 Documentação do Código

### `index.html`

- Contém a interface do usuário com os botões interativos que chamam a função `responder()`.
- Cada botão representa uma opção de interação com o bot.
- O conteúdo do chat é exibido na `div` com id `chat-box`.

### `script.js`

Responsável pela lógica de funcionamento do bot:

- Obtém os dados de `dados.json` com `fetch`.
- Responde a diferentes opções com um `switch` baseado na `opcao` escolhida.
- `opcao === 'loja'`: abre a loja da FURIA em uma nova aba.
- `opcao === 'resetar'`: limpa o conteúdo do chat e exibe uma nova mensagem de boas-vindas.
- Para as demais opções:
  - `jogo`: exibe informações sobre o próximo confronto.
  - `elenco`: lista os jogadores atuais.
  - `curiosidade`: mostra uma curiosidade aleatória.

```js
chatBox.innerHTML += `<div class="user-msg">${opcoesTexto[opcao]}</div>`;
chatBox.innerHTML += `<div class="bot-msg">${resposta}</div>`;
chatBox.scrollTop = chatBox.scrollHeight;
```

### `style.css`

- Estilo com tema escuro, inspirado nas cores da FURIA.
- Scroll personalizado na área do chat.
- Mensagens com estilos diferentes para usuário e bot.
- Design responsivo e moderno com `flex`, `box-shadow`, `border-radius`.

### `dados.json`

Arquivo de simulação de dados contendo:

```json
{
  "jogo": { "oponente": "Team Liquid", "data": "25/04/2025", "horario": "18:00" },
  "elenco": { "jogadores": ["arT", "KSCERATO", "yuurih", "chelo", "FalleN"] },
  "clipes": [
    { "titulo": "Highlight 1", "url": "https://youtube.com" },
    { "titulo": "Highlight 2", "url": "https://youtube.com" }
  ]
}
```

Você pode editar esses dados para atualizar as informações exibidas no bot.

## 🚀 Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/izabellealencar05/ChatBotFuria
```

2. Abra o arquivo `index.html` em um navegador moderno.

> 💡 Não é necessário nenhum servidor ou instalação — funciona 100% localmente!

---

Feito com Fúria por Izabelle Alencar 💜

