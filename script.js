const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultados = document.querySelector(".texto-resultado");

const pergunta1 =
{
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as duvidas que uma pessoa pode ter,ele também gera imagens e áudios"
        alternativas: [
            {
                texto:"isso é assustador!",
                afirmacao: "No inicio ficou com medo de que essas tecnologia pode fazer"
            },
            {
               texto:"isso é maravilhoso!",
               afirmacao: "quis saber como usar IA no seu dia a dia."
            }
           
            
    ]
},
{
        enunciado: "Com a descoberta desta tecnologia, chamada inteligência artificiaçl (IA), uma professora de tecnologia da escola decidiu fazer uma Sequência de aulas sobre ela IA.
        alternativas: [
            {
                texto:"utilizar uma ferramente de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho.",
                afirmacao:
            },
            {
              texto:"Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimento próprios sobre o tema."
              afirmacao
              
              

            
        
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizado a pesquisa.",
        alternativas: [
            {
                texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao:
            },
            {
                texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defedem a imporância de proteger os trabalhadores."
                afirmacao:
            }
            

        ]
    }
    enunciado: "Ao final  da discussão, você precisou criar uma imagem no computador que representasse o que você pensa sobre a IA.",
    alternativas: [
        {
            texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
            afirmacao:
        },
        { 
            texto:"Criar uma imagem utilizando um gerador de imagem de IA."
            afirmacao:
        }
        
    ]
}
    enunciado: " você tem um trabalho em grupo de biologia para entregar na semana seguinte."
    alternativas: [
        {
            texto:"Escrever comandos para o chat é uma forma de contribuir com o trabalho."
            afirmacao:
        },
        {
            texto:"O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois todo máquina erra."
            afirmacao:
        }
                 
       ]
    },
];
let atual = o;
let perguntaAtual
let historiaFinal = "";

function mostraAlternativas() {
    if(atual >= perguntas.length)
        mostraResultado();
        return;
    }
     perguntaAtua1 = perguntas[atual]
     caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
       const botaAlternativas = document. createElement("button")
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)){;
       caixaAlternativas.appendChild(botaoAlternativas);
    }



function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultados.textContent = historiaFinal;
    caixaAlternativas.textContent = "";S
}
    
function mostraResultado(){
    
}

mostraPergunta();