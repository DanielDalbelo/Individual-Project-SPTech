const questions = [
    {
        question: "Quem desenvolveu Counter-Strike?",
        options: ["Valve", "Riot Games", "Epic Games", "Ubisoft"],
        answer: 0
    },
    {
        question: "Qual é o objetivo principal em Counter-Strike?",
        options: ["Capturar a bandeira", "Plantar/Desarmar a bomba", "Matar todos os inimigos", "Sobreviver"],
        answer: 1
    },
    {
        question: "Qual arma é a mais cara em Counter-Strike?",
        options: ["AWP", "AK-47", "M4A4", "M249"],
        answer: 3
    },
    {
        question: "Qual é o nome do mapa mais famoso de Counter-Strike?",
        options: ["Dust II", "Inferno", "Nuke", "Mirage"],
        answer: 0
    },
    {
        question: "Em qual modo de jogo a recompença por matar um inimigo com a AWP é $100?",
        options: ["Competitivo", "Casual", "Zona de Perigo", "Corrida Armada"],
        answer: 0
    },
    {
        question: "Quem é o desenvolvedor de Dead by Daylight?",
        options: ["Behaviour Interactive", "Blizzard", "Capcom", "Konami"],
        answer: 0
    },
    {
        question: "Qual é o principal objetivo dos sobreviventes em Dead by Daylight?",
        options: ["Escapar", "Lutar contra o assassino", "Completar objetivos", "Coletar itens"],
        answer: 0
    },
    {
        question: "Quantos sobreviventes podem haver em uma partida?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "Qual assassino tem a habilidade de se teletransportar através de paredes, teto e armários?",
        options: ["O Caçador", "O Espreitador", "A Enfermeira", "O Demogorgon"],
        answer: 2
    },
    {
        question: "Qual é a função dos geradores no jogo?",
        options: ["Destruir obstáculos", "Ajudar o assassino", "Permitir a fuga dos sobreviventes", "Aumentar a visibilidade"],
        answer: 2
    },
    {
        question: "Quem criou Undertale?",
        options: ["Toby Fox", "Hidetaka Miyazaki", "Shigeru Miyamoto", "Hideo Kojima"],
        answer: 0
    },
    {
        question: "Qual é o nome do personagem principal em Undertale?",
        options: ["Frisk", "Chara", "Você que escolhe o nome", "Flowey"],
        answer: 0
    },
    {
        question: "Qual é o nome do esqueleto engraçado em Undertale?",
        options: ["Papyrus", "Toriel", "Alphys", "Asgore"],
        answer: 0
    },
    {
        question: "Qual é o nome da flor que age como vilão em Undertale?",
        options: ["Flowey", "Undyne", "Mettaton", "Napstablook"],
        answer: 0
    },
    {
        question: "Qual final é alcançado ao poupar todos os inimigos?",
        options: ["Final Pacifista", "Final Neutro", "Final Genocida", "Final Verdadeiro"],
        answer: 0
    },
    {
        question: "Quem é o criador de Minecraft?",
        options: ["Markus Persson", "Tim Sweeney", "Gabe Newell", "John Carmack"],
        answer: 0
    },
    {
        question: "Qual é o material primário usado para crafting em Minecraft?",
        options: ["Madeira", "Pedra", "Ferro", "Diamante"],
        answer: 0
    },
    {
        question: "Qual mob explode quando se aproxima?",
        options: ["Creeper", "Zombie", "Enderman", "Skeleton"],
        answer: 0
    },
    {
        question: "Qual é o nome da dimensão escura em Minecraft?",
        options: ["Nether", "Overworld", "The End", "Aether"],
        answer: 2
    },
    {
        question: "Qual item é necessário para ativar um portal para o Nether?",
        options: ["Isqueiro", "Redstone", "Balde de água", "Diamante"],
        answer: 0
    },
];

// Randomize questions
questions.sort(() => Math.random() - 0.5);

let currentQuestionIndex = 0;
let points = 0;

function startQuiz() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showQuestion();
}

function goBack() {
    window.location.assign("dashboard.html");
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;

    // Randomize options
    const shuffledOptions = [...question.options].map((option, index) => ({ option, index }));
    shuffledOptions.sort(() => Math.random() - 0.5);

    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = shuffledOptions[index].option;
        option.onclick = () => selectOption(shuffledOptions[index].index);
    });

    document.getElementById('next-btn').style.display = 'none';
}

function selectOption(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        currentQuestionIndex++;
        points += 10;
        if (currentQuestionIndex < questions.length) {
            document.getElementById('next-btn').style.display = 'block';
        } else {
            alert(`Você venceu! Sua pontuação: ${points}`);
            currentQuestionIndex = 0;
            body.innerHTML = `<span style=""><img src="img/win.gif" alt"Fogos de artifício"></span>`
            setTimeout(() => {
                body.innerHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Quiz - Jogos</title>
                <link rel="stylesheet" href="css/quiz.css">
            </head>
            <body id="body">
                <div id="start-screen">
                    <h1 style="color:white">Bem-vindo ao Quiz de jogos</h1>
                    <button onclick="startQuiz()">Começar</button>
                    <button onclick="goBack()">Voltar</button>
                </div>
                <div id="quiz-container" style="display: none;">
                    <h1 style="color:white">Quiz sobre jogos</h1>
                    <div id="question-container">
                        <div id="question" style="color:white">Question Text</div>
                        <div class="option" onclick="selectOption(0)">Option 1</div>
                        <div class="option" onclick="selectOption(1)">Option 2</div>
                        <div class="option" onclick="selectOption(2)">Option 3</div>
                        <div class="option" onclick="selectOption(3)">Option 4</div>
                    </div>
                    <button id="next-btn" onclick="nextQuestion()" style="display: none;">Próxima</button>
                </div>
                <script src="js/quiz.js"></script>
            </body>
            </html>
            `
                document.getElementById('start-screen').style.display = 'block';
                document.getElementById('quiz-container').style.display = 'none';
            }, 2000);
        }
    } else {
        alert(`Resposta errada! Tente novamente. Sua pontuação: ${points}`);
        currentQuestionIndex = 0;
        points = 0;
        document.getElementById('start-screen').style.display = 'block';
        document.getElementById('quiz-container').style.display = 'none';
    }
}

function nextQuestion() {
    showQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-screen').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
});
