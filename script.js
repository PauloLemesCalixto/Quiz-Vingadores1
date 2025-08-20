const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o real nome do Homem de Ferro?",
        alternativas: [
            {
                texto: "Tony  Stark",
                afirmacao: "Parabéns você acertou "
            },
            {
                texto: "Bruce Wayne",
                afirmacao: "mais sorte da proxima!"
            },
            {
                texto: "Peter Parker",
                afirmacao: "Não foi dessa vez "
            },
            {
                texto: "Steve Rogers",
                afirmacao: "Não foi dessa vez, tente da proxima"
            }
        ]
    },
    {
        enunciado: "Qual é o pais originário do Capitão América?",
        alternativas: [
            {
                texto: "Canadá",
                afirmacao: "Não deu dessa vez, mas não desiste não!"
            },
            {
                texto: "Reino Unido",
                afirmacao: "Eita! Não rolou agora, tenta de novo!"
            },
            {
                texto: "Estados Unidos",
                afirmacao: "Você acertou! "
            },
            {
                texto: "França",
                afirmacao: "Dessa vez não deu, tente novamente"
            },
        ]
    },
    {
        enunciado: "Qual o nome do martelo do Thor?",
        alternativas: [
            {
                texto: "Stormbreaker",
                afirmacao: "Cada tentativa te deixa mais perto do sucesso!"
            },
            {
                texto: "Guingnir",
                afirmacao: "Não desanime, você está quase lá."
            },
            {
                texto: "Mjonir",
                afirmacao: "Parabéns você acertou!"
            },
            {
                texto: "Hofund",
                afirmacao: "Persistência é o caminho! Vai dar certo."
            },
        ]
    },
    {
        enunciado: "Qual o nome real do Hulk?",
        alternativas: [
            {
                texto: "Bruce Banner",
                afirmacao: "Parabéns você acertou!"
            },
            {
                texto: "Bruce Wayne",
                afirmacao: "Não deu dessa vez, mas não desiste não!"
            },
            {
                texto: "Barry Allen",
                afirmacao: "Cada tentativa te deixa mais perto do sucesso! "
            },
            {
                texto: "Ben Parker",
                afirmacao: "Errar faz parte. Levanta e tenta de novo!"
            },
        ]
    },
    {
        enunciado: "Qual é a especialidade da Viúva Negra?",
        alternativas: [
            {
                texto: "Magia",
                afirmacao: "Ops! Essa não foi. Tente novamente!"
            },
            {
                texto: "Tecnologia",
                afirmacao: "Não foi dessa vez, tente na próxima! "
            },
            {
                texto: "Espionagem",
                afirmacao: "Parabéns você acertou!"
            },
            {
                texto: "Força",
                afirmacao: "Resposta incorreta. Bora tentar de novo? "
            },
            
        ]
    },
        {
        enunciado: "Em que filme os Vingadores se unem pela primeira vez?",
        alternativas: [
            {
                texto: "Iron Man",
                afirmacao: "Detetive distraído! Tenta de novo aí!"
            },
            {
                texto: "Thor",
                afirmacao: "Essa doeu, hein? Bora pra próxima!"
            },
             {
                texto: "The Avengers",
                afirmacao: "Parabéns você acertou"
            },
            {
                texto: "Captain America",
                afirmacao: "Errou rude! Mas calma, ainda dá tempo."
            },
        ]
    },
        {
        enunciado: "Qual é a fonte de poder do reator arc de Tony Stark?",
        alternativas: [
            {
                texto: "Tesseract",
                afirmacao: "Essa doeu, hein? Bora pra próxima!"
            },
            {
                texto: "Vibranium",
                afirmacao: "Errou rude! Mas calma, ainda dá tempo. "
            },
             {
                texto: "Palladium",
                afirmacao: "Parabéns você acertou"
            },
            {
                texto: "Uridium",
                afirmacao: "Essa passou longe! Tenta outra vez! "
            },
        ]
    },
        {
        enunciado: "Quantas Joias do Infinito existem?",
        alternativas: [
            [
    {
        texto: "5",
        afirmacao: "Infelizmente, passou a utilizar a IA para fazer todas as suas tarefas e agora se sente dependente da IA para tudo."
    },
    {
        texto: "6",
        afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que a programou e que muito do que o chat escrevia não refletia o que pensava; por isso, sabe que os textos gerados pela IA devem servir como auxílio e não como resultado final."
    },
    {
        texto: "7",
        afirmacao: "Infelizmente, passou a utilizar a IA para fazer todas as suas tarefas e agora se sente dependente da IA para tudo."
    },
    {
        texto: "8",
        afirmacao: "Errou rude! Mas calma, ainda dá tempo."
    }
]

           
        ]
    },
        {
        enunciado: "Qual Herói não tem superpoderes naturais?",
        alternativas: [
            {
                texto: "Thor",
                afirmacao: "Errou rude! Mas calma, ainda dá tempo."
            },
            {
                texto: "Hulk",
                afirmacao: "Não foi dessa vez! Esse aqui virou um monstro por acidente."
            },
            {
                texto: "Homem de Ferro",
                afirmacao: "Acertou! Ele depende da armadura e da inteligência — nada de superpoderes naturais aqui."
            },
            {
                texto: "Capitão América",
                afirmacao: "Quase! Ele foi aprimorado com soro, então é tecnicamente um super-humano "
            },
        ]
    },
        {
        enunciado: "Qual é o metal do escudo do Capitão América?",
        alternativas: 
        [
    {
        texto: "Adamantium",
        afirmacao: "Errou! Esse é o metal das garras do Wolverine."
    },
    {
        texto: "Vibranium",
        afirmacao: "Acertou! O escudo é feito de Vibranium, um metal raro de Wakanda."
    },
    {
        texto: "Ferro",
        afirmacao: "Não foi dessa vez! Ferro não resistiria a tantos impactos assim."
    },
    {
        texto: "Titânio",
        afirmacao: "Quase! Titânio é forte, mas o escudo do Capitão é ainda mais especial."
    }
]

    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
