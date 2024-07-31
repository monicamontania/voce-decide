const caixaPricipal = document.querySelector('.caixa-pricipal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativa');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResultados = document.querySelector('.texto-resultados');
const perguntas = [
    {
        enunciando: "Enunciado 01",
        alternativas: [
            {
            texto:"alternativa 01",
            afirmacao:"resulatdo 01"
            },
            {
            texto: "alternativa 2",
            afirmacao: "resultado 2"
            }
        ]
    },
    {
        enunciando:"Enunciado 02",
        alternativas: [
            {
                texto:"alternativa 03",
                afirmacao:"resulatdo 03"
            },
            {
                texto:"alternativa 04",
                afirmacao:"resulatdo 04"
            }
            
        
        ]
    
    },
    {
        enunciando:"Enunciado 03",
        alternativas: [
            {
                texto:"alternativa 04",
                afirmacao:"resultado 04"
            },
            {
                texto:"alternativa 05",
                afirmacao:"resultado 05"
            }
        ]

    },
    {
        enunciando:"Enunciado 04",
        alternativas: [
          {
            texto:"alternativa 06",
            afirmacao:"resultado 06"
          },
          {
            texto:"alternativa 07",
            afirmacao:"resultado 07"
          }
        ]
    },
    {
        enunciando:"Enunciado 05",
        alternativas: [
            {
                texto:"alternativa 08",
                afirmacao:"resultado 08"
            },
            {
                texto:"alternativa 09",
                afirmacao:"resultado 09"
            }
        ]
    },
]

  let atual = 0;
  let perguntaAtual;
  let historiaFinal = "";

  function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciando;
  }

 function mostraPerguntas(){
    if(atual >= perguntaAtual.length){
      mostraResultado();
      return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciando;
    caixaAlternativas.textContent = ""
    mostraAlternativas();
  }

  function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
  }

  function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " " 
    atual++;
    mostraPergunta();
  }

  function mostraResultado(){
    caixaPerguntas. textContent = "Inicio do texto..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

  }
  
