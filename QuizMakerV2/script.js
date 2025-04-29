const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  }
];

function loadQuiz() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";
  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
    q.options.forEach(opt => {
      div.innerHTML += `
        <label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`;
    });
    quiz.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  document.getElementById("result").innerText = `You scored ${score} out of ${quizData.length}`;
}

loadQuiz();

