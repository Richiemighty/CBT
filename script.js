/********************************************
 * ENSURE DOM IS READY
 ********************************************/
document.addEventListener("DOMContentLoaded", function () {
    console.log("CBT engine loaded…");

    /********************************************
     * LOAD QUESTIONS FROM questions.js
     ********************************************/
    if (!window.questions) {
        alert("ERROR: questions.js not loaded!");
        return;
    }

    let questions = [];
    let passages = window.passages || [];


    /********************************************
     * DOM ELEMENTS
     ********************************************/
    const welcomeScreen = document.getElementById("welcomeScreen");
    const testArea = document.getElementById("testArea");
    const resultScreen = document.getElementById("resultScreen");
    const reviewScreen = document.getElementById("reviewScreen");

    const startBtn = document.getElementById("startBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const submitBtn = document.getElementById("submitBtn");
    const restartBtn = document.getElementById("restartBtn");
    const reviewBtn = document.getElementById("reviewBtn");
    const backToResultBtn = document.getElementById("backToResultBtn");

    const timerElement = document.getElementById("timer");
    const timerDot = document.getElementById("timerDot");
    const questionCounter = document.getElementById("questionCounter");
    const answeredInfo = document.getElementById("answeredInfo");
    const questionText = document.getElementById("questionText");
    const optionsContainer = document.getElementById("optionsContainer");
    const progressBar = document.getElementById("progressBar");

    const studentNameInput = document.getElementById("studentName");
    const timeSelect = document.getElementById("timeSelect");
    const candidateNameTop = document.getElementById("candidateNameTop");

    const scoreDisplay = document.getElementById("scoreDisplay");
    const resultName = document.getElementById("resultName");
    const totalQuestions = document.getElementById("totalQuestions");
    const correctAnswers = document.getElementById("correctAnswers");
    const timeTaken = document.getElementById("timeTaken");
    const proficiencyTag = document.getElementById("proficiencyTag");

    const reviewList = document.getElementById("reviewList");


    /********************************************
     * STATE VARS
     ********************************************/
    let currentQuestion = 0;
    let userAnswers = [];
    let timer;
    let timeLeft;
    let startTime;
    let endTime;


    /********************************************
     * START TEST
     ********************************************/
    startBtn.addEventListener("click", startTest);

    function startTest() {
        const fullName = studentNameInput.value.trim();
        if (!fullName) {
            alert("Please enter your full name.");
            return;
        }
        candidateNameTop.textContent = fullName;

        const duration = Number(timeSelect.value);
        const limit = duration === 30 ? 75 : 150;

        // Load EXACT questions from the file
        questions = window.questions.slice(0, limit);

        // Convert "answer":"A" → numeric index (0)
        questions = questions.map(q => {
            const map = { "A": 0, "B": 1, "C": 2, "D": 3, "E": 4 };
            return {
                ...q,
                correct: map[q.answer]
            };
        });

        userAnswers = new Array(questions.length).fill(null);

        timeLeft = duration * 60;
        startTime = new Date();

        welcomeScreen.style.display = "none";
        testArea.style.display = "block";

        startTimer();
        displayQuestion();
        updateAnsweredInfo();
    }


    /********************************************
     * TIMER
     ********************************************/
    function startTimer() {
        updateTimerDisplay();

        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();

            if (timeLeft <= 0) {
                clearInterval(timer);
                alert("Time is up!");
                submitTest();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        timerElement.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

        if (timeLeft <= 300) {
            timerElement.style.color = "#e53935";
            timerDot.style.background = "#e53935";
        } else {
            timerElement.style.color = "#003366";
            timerDot.style.background = "#22c55e";
        }
    }


    /********************************************
     * RENDER QUESTION
     ********************************************/
    function displayQuestion() {
        const q = questions[currentQuestion];

        // Show passage (if exists)
        if (q.passageRef) {
            const passage = passages.find(p => p.id === q.passageRef);
            questionText.innerHTML =
                `<strong>Passage:</strong><br><pre style="white-space:pre-wrap;font-size:14px;background:#eef2ff;padding:10px;border-radius:6px;">${passage.text}</pre><br>${q.question}`;
        } else {
            questionText.textContent = q.question;
        }

        questionCounter.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
        progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

        optionsContainer.innerHTML = "";
        q.options.forEach((text, idx) => {
            const box = document.createElement("div");
            box.className = "option-item";
            if (userAnswers[currentQuestion] === idx) box.classList.add("selected");

            box.innerHTML = `
                <input type="radio" class="option-input">
                <div class="option-badge">${String.fromCharCode(65 + idx)}</div>
                <div>${text}</div>
            `;

            box.addEventListener("click", () => selectOption(idx));
            optionsContainer.appendChild(box);
        });

        prevBtn.disabled = currentQuestion === 0;
        nextBtn.disabled = currentQuestion === questions.length - 1;
    }

    function selectOption(index) {
        userAnswers[currentQuestion] = index;

        const all = document.querySelectorAll(".option-item");
        all.forEach(o => o.classList.remove("selected"));
        all[index].classList.add("selected");

        updateAnsweredInfo();
    }

    function updateAnsweredInfo() {
        const answered = userAnswers.filter(a => a !== null).length;
        answeredInfo.textContent = `${answered} / ${questions.length} answered`;
    }


    /********************************************
     * NAVIGATION
     ********************************************/
    prevBtn.addEventListener("click", () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            displayQuestion();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            displayQuestion();
        }
    });

    submitBtn.addEventListener("click", () => {
        if (confirm("Submit test now?")) {
            submitTest();
        }
    });


    /********************************************
     * SCORING + RESULT
     ********************************************/
    function submitTest() {
        clearInterval(timer);
        endTime = new Date();

        let correctCount = 0;
        userAnswers.forEach((ans, idx) => {
            if (ans === questions[idx].correct) correctCount++;
        });

        const scorePercent = Math.round((correctCount / questions.length) * 100);

        testArea.style.display = "none";
        resultScreen.style.display = "block";

        resultName.textContent = studentNameInput.value;
        totalQuestions.textContent = questions.length;
        correctAnswers.textContent = correctCount;

        const totalSec = (endTime - startTime) / 1000;
        timeTaken.textContent = `${Math.floor(totalSec / 60)}m ${Math.floor(totalSec % 60)}s`;

        animateScore(scorePercent);
        showProficiency(scorePercent);
    }


    /********************************************
     * SCORE ANIMATION
     ********************************************/
    function animateScore(target) {
        let current = 0;
        const interval = setInterval(() => {
            current++;
            scoreDisplay.textContent = current + "%";
            if (current >= target) clearInterval(interval);
        }, 15);
    }


    /********************************************
     * PROFICIENCY LABEL
     ********************************************/
    function showProficiency(score) {
        let text, bg, color;

        if (score >= 85) {
            text = "Highly Proficient"; bg = "#dcfce7"; color = "#166534";
        } else if (score >= 70) {
            text = "Proficient"; bg = "#e0f2fe"; color = "#0369a1";
        } else if (score >= 60) {
            text = "Fairly Proficient"; bg = "#fef9c3"; color = "#854d0e";
        } else if (score >= 50) {
            text = "Scarcely Proficient"; bg = "#fee2e2"; color = "#b91c1c";
        } else {
            text = "Not Proficient"; bg = "#fee2e2"; color = "#b91c1c";
        }

        proficiencyTag.innerHTML =
            `<span class="tag" style="background:${bg};color:${color}">${text}</span>`;
    }


    /********************************************
     * REVIEW MISSED QUESTIONS
     ********************************************/
    reviewBtn.addEventListener("click", () => {
        resultScreen.style.display = "none";
        reviewScreen.style.display = "block";
        generateReview();
    });

    backToResultBtn.addEventListener("click", () => {
        reviewScreen.style.display = "none";
        resultScreen.style.display = "block";
    });

    function generateReview() {
        reviewList.innerHTML = "";
        let wrongCount = 0;

        questions.forEach((q, i) => {
            if (userAnswers[i] !== q.correct) {
                wrongCount++;

                const card = document.createElement("div");
                card.style.cssText = `
                    margin-bottom:20px;
                    padding:15px;
                    border:1px solid #ddd;
                    border-radius:8px;
                    background:#f9fafb;
                `;

                card.innerHTML = `
                    <p><strong>Q${q.number}:</strong> ${q.question}</p>
                    <p><strong>Your Answer:</strong> <span style="color:red">
                        ${q.options[userAnswers[i]] || "No answer"}
                    </span></p>
                    <p><strong>Correct Answer:</strong> <span style="color:green">
                        ${q.options[q.correct]}
                    </span></p>
                `;

                reviewList.appendChild(card);
            }
        });

        if (wrongCount === 0) {
            reviewList.innerHTML = "<p style='text-align:center;'>Perfect score 🎉</p>";
        }
    }

    /********************************************
     * RESTART TEST
     ********************************************/
    restartBtn.addEventListener("click", () => {
        currentQuestion = 0;
        userAnswers = [];

        timerElement.textContent = "00:00";
        candidateNameTop.textContent = "—";

        resultScreen.style.display = "none";
        reviewScreen.style.display = "none";
        welcomeScreen.style.display = "block";
    });

});
