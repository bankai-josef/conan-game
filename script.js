const questions = [
    {
        question: "What's the identity of The little sister from outside the domain?",
        options: [
            "A. An FBI agent and relative of Akai Shuichi",
            "B. MI6 Agent Mary Sera (Masumi's mother)",
            "C. Masumi's younger sister",
            "D. Black Organization member Asaca/Rum"
        ],
        answer: "B",
        image: "Ran_and_Unknown_Child.jpg" // Chemin de l'image pour cette question
    },
    {
        question: "Who is Amuro Tooru's subordinate in the PSB?",
        options: [
            "A. Azusa Enomoto",
            "B. Hiromitsu Morofushi",
            "C. Hyoue Kuroda",
            "D. Yuya Kazami",
            "E. Wataru Takagi"
        ],
        answer: "D",
        image: "https://cdn.popsww.com/blog/sites/2/2023/03/furuya-rei.jpg"
    },
    {
        question: "Who are the 5 main characters of +Wild Police Story+?",
        options: [
            "A. Rei Furuya, Hiromitsu Morofushi, Jinpei Matsuda, Wataru Date, Kenji Hagiwara",
            "B. Jinpei Matsuda, Ninzaburou Shiratori, Naeko Miike, Kenji Hagiwara, Wataru Date",
            "C. Rei Furuya, Miwako Sato, Wataru Takagi, Jinpei Matsuda, Kazunobu Chiba",
            "D. Rei Furuya, Hiromitsu Morofushi, Miwako Sato, Jinpei Matsuda, Wataru Takagi"
        ],
        answer: "A",
        image: "https://www.nautiljon.com/images/breves/00/57/un_premier_visuel_pour_l_anime_detective_conan_wild_police_story_15075.webp"
    },
    {
        question: "Where was Yukiko's maiden name from?",
        options: [
            "A. Yuki (snow in Japanese)",
            "B. Yukiko Amagi (Megami Tensei)",
            "C. Fujiko Mine (Lupin III)"
        ],
        answer: "C",
        image: "Infobox_-_Yukiko_Kudo.jpg"
    },
    {
        question: "What does Gin like to call Detectives?",
        options: [
            "A. Snakes",
            "B. Foxes",
            "C. Sheep",
            "D. Rats"
        ],
        answer: "B",
        image: "gin.jpg"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let guesses = [];

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const imageElement = document.getElementById("question-image");

    // Afficher la question et les options
    questionElement.innerText = questions[currentQuestionIndex].question;
    optionsContainer.innerHTML = "";

    // Afficher l'image de la question
    const imageSrc = questions[currentQuestionIndex].image;
    if (imageSrc) {
        imageElement.src = imageSrc;
        imageElement.classList.remove("hidden");
    } else {
        imageElement.classList.add("hidden");
    }

    // Afficher les options
    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => selectAnswer(option.charAt(0));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(guess) {
    guesses.push(guess);
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (guess === correctAnswer) {
        score++;
        alert("GG CORRECT");
    } else {
        alert(`Duuh!! INCORRECT. The correct answer is: ${correctAnswer}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("next-button").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");

    document.getElementById("score-text").innerText = `Your score is ${(score / questions.length) * 100}%`;
    document.getElementById("answers").innerText = questions.map(q => q.answer).join(" ");
    document.getElementById("guesses").innerText = guesses.join(" ");
}

function nextQuestion() {
    if (currentQuestionIndex === 0) {
        showQuestion();
        document.getElementById("next-button").innerText = "Next";
    } else {
        selectAnswer();
    }
}

document.addEventListener("DOMContentLoaded", showQuestion);
