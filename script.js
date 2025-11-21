let currentQuestion = 0;
let score = 0;
let userAnswers = {};
let timerInterval;

function startTest() {
  document.getElementById("testArea").style.display = "block";

  let selectedTime = document.getElementById("timeSelect").value;
  startTimer(selectedTime * 60);

  loadQuestion();
}

function loadQuestion() {
  let q = questions[currentQuestion];

  document.getElementById("questionBox").innerHTML = `
    <h3>Question ${q.number}</h3>
    <p>${q.question}</p>
    <div class="options">
      ${q.options.map((opt, i) => `
        <label>
          <input type="radio" name="q${q.number}" 
            value="${String.fromCharCode(65+i)}"
            ${userAnswers[q.number] === String.fromCharCode(65+i) ? "checked" : ""}>
          ${opt}
        </label>
      `).join("")}
    </div>
  `;
}

function nextQuestion() {
  saveAnswer();
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function saveAnswer() {
  let q = questions[currentQuestion];
  let selected = document.querySelector(`input[name="q${q.number}"]:checked`);
  if (selected) {
    userAnswers[q.number] = selected.value;
  }
}

function submitTest() {
  saveAnswer();
  score = 0;

  questions.forEach(q => {
    if (userAnswers[q.number] === q.answer) score++;
  });

  let percentage = (score / questions.length) * 100;

  document.getElementById("result").innerHTML =
    `<h2>Your Score: ${score}/${questions.length} (${percentage.toFixed(2)}%)</h2>`;

  clearInterval(timerInterval);
}

function startTimer(seconds) {
  timerInterval = setInterval(() => {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    document.getElementById("timer").innerHTML =
      `Time Left: ${min}:${sec < 10 ? "0" + sec : sec}`;

    if (seconds <= 0) {
      clearInterval(timerInterval);
      submitTest();
      alert("Time is up!");
    }

    seconds--;
  }, 1000);
}

