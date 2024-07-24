const caixaPricipal = document.querySelector('.caixa-pricipal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativa');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResultados = document.querySelector('.texto-resultados');
const perguntas = [
    {
        enunciando: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciando:"Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    

    },
    {
        enunciando:"Pergunta 3",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]

    },
    {
        enunciando:"Pergunta 4",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciando:"Pergunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
]

  let atual = 0;
  let perguntaAtual;

  function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciando;
  }

  mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciando;
    mostraAlternativas();
  }

  function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas)
    }
  }
  
