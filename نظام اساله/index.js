let questions = [
  {
    question: "What is the capital of France?",
    answers: [
      {
        text: "London",
        correct: false
      },
      {
        text: "Paris",
        correct: true
      },
      {
        text: "Berlin",
        correct: false
      },
      {
        text: "Madrid",
        correct: false
      }
    ]
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      {
        text: "Earth",
        correct: false
      },
      {
        text: "Mars",
        correct: false
      },
      {
        text: "Jupiter",
        correct: true
      },
      {
        text: "Saturn",
        correct: false
      }
    ]
  },
  {
    question: "Who was the first president of the United States?",
    answers: [
      {
        text: "George Washington",
        correct: true
      },
      {
        text: "Thomas Jefferson",
        correct: false
      },
      {
        text: "Abraham Lincoln",
        correct: false
      },
      {
        text: "John F. Kennedy",
        correct: false
      }
    ]
  }
];
let currentQuestion = 0;
let score = 0;
let answered = false; // Added to prevent multiple clicks
function startQuiz() {
  document.getElementById("start").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    // Avoid redefining the function
    showResults();
    return;
  }
  let q = questions[currentQuestion];
  document.getElementById("question").innerHTML = q.question;
  let answers = document.getElementById("answers");
  answers.innerHTML = "";
  for (let i = 0; i < q.answers.length; i++) {
    let a = q.answers[i];
    let button = document.createElement("button");
    button.innerHTML = a.text;
    button.onclick = function () {
      if (answered) {
        // Ignore clicks until question is done
        return;
      }
      answered = true;
      if (a.correct) {
        score++;
        button.classList.add("correct");
      } else {
        button.classList.add("incorrect");
      }
      setTimeout(function () {
        currentQuestion++;
        answered = false;
        showQuestion();
      }, 200);
    };
    answers.appendChild(button);
  }
} 

function showResults() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("results").style.display = "block";
  document.getElementById("score").innerHTML =
    score + " out of " + questions.length;
}
