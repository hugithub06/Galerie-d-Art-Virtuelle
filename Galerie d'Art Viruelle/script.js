let currentQuestion = 0;
let score = 0;
const questions = [
    { text: "Qui a créé 'Les Demoiselles d'Avignon' et en quelle année ?", options: ["Pablo Picasso, 1907", "Henri Matisse, 1903", "Vincent Van Gogh, 1889"], answer: "Pablo Picasso, 1907" },
    { text: "Quelle œuvre a introduit les montres molles symbolisant la fluidité du temps ?", options: ["La Persistance de la Mémoire, Salvador Dalí", "Guernica, Pablo Picasso", "Starry Night, Vincent Van Gogh"], answer: "La Persistance de la Mémoire, Salvador Dalí" },
    { text: "Quel artiste a peint 'Composition II en Rouge, Bleu et Jaune' et quel mouvement artistique cela représente-t-il ?", options: ["Piet Mondrian, Néo-plasticisme", "Pablo Picasso, Cubisme", "Claude Monet, Impressionnisme"], answer: "Piet Mondrian, Néo-plasticisme" },
    { text: "Où peut-on voir 'Guernica' et que symbolise cette œuvre ?", options: ["Musée Reina Sofia, la douleur de la guerre", "Le Louvre, la liberté", "Tate Modern, la révolution industrielle"], answer: "Musée Reina Sofia, la douleur de la guerre" },
    { text: "Qui a peint 'Les Nymphéas' et quel style caractérise ces œuvres ?", options: ["Claude Monet, Impressionnisme", "Edgar Degas, Réalisme", "Pablo Picasso, Cubisme"], answer: "Claude Monet, Impressionnisme" }
];

document.addEventListener('DOMContentLoaded', function() {
    displayQuestion();
});

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const question = questions[currentQuestion];

    questionElement.innerText = question.text;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const optionElement = document.createElement('li');
        optionElement.innerText = option;
        optionElement.onclick = function() { selectOption(option); };
        optionsElement.appendChild(optionElement);
    });
}

function selectOption(selected) {
    const question = questions[currentQuestion];
    if (selected === question.answer) {
        score++;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const resultElement = document.getElementById('result');
    resultElement.innerText = `Quiz terminé ! Vous avez obtenu ${score} sur ${questions.length}.`;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResults();
    }
}
