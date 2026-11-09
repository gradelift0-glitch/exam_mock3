let currentQuestionIndex = 0;
let userAnswers = {}; 
let timeRemaining = 50 * 60; 
let timerInterval = null;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const optionsContainer = document.getElementById('options');

startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', () => navigate(-1));
nextBtn.addEventListener('click', () => navigate(1));
submitBtn.addEventListener('click', submitQuiz);

function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion(0);
    startTimer();
}

function loadQuestion(index) {
    const q = questionsData[index];
    document.getElementById('question-number').innerText = `Question ${index + 1} of ${questionsData.length}`;
    document.getElementById('question-tag').innerText = q.tag ? q.tag.split(':')[0] : 'General';
    document.getElementById('question-text').innerText = q.question;
    
    const progress = ((index) / questionsData.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    optionsContainer.innerHTML = '';
    const optionsObj = q.options;
    
    for (const [key, val] of Object.entries(optionsObj)) {
        if (!val) continue; 
        const optDiv = document.createElement('div');
        optDiv.className = 'option';
        if (userAnswers[q.id] === key) {
            optDiv.classList.add('selected');
        }
        
        optDiv.innerHTML = `<span class="option-label">${key}</span> <span>${val}</span>`;
        optDiv.addEventListener('click', () => selectOption(q.id, key, optDiv));
        optionsContainer.appendChild(optDiv);
    }
    
    prevBtn.disabled = index === 0;
    
    if (index === questionsData.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

function selectOption(questionId, selectedKey, optionElement) {
    userAnswers[questionId] = selectedKey;
    const allOptions = optionsContainer.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    optionElement.classList.add('selected');
}

function navigate(direction) {
    currentQuestionIndex += direction;
    if (currentQuestionIndex >= 0 && currentQuestionIndex < questionsData.length) {
        loadQuestion(currentQuestionIndex);
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    document.getElementById('timer').innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    if (timeRemaining < 300) { 
        document.getElementById('timer').style.background = '#dc2626';
        document.getElementById('timer').style.color = '#fff';
    }
}

function submitQuiz() {
    clearInterval(timerInterval);
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    calculateResults();
}

function calculateResults() {
    let score = 0;
    let failedTags = {}; 
    
    questionsData.forEach(q => {
        const userAnswer = userAnswers[q.id];
        if (userAnswer === q.correct) {
            score++;
        } else {
            if (q.tag) {
                failedTags[q.tag] = (failedTags[q.tag] || 0) + 1;
            }
        }
    });
    
    document.getElementById('score').innerText = score;
    const percentage = Math.round((score / questionsData.length) * 100);
    document.getElementById('percentage').innerText = `${percentage}%`;
    
    const tagsList = document.getElementById('weak-tags');
    tagsList.innerHTML = '';
    
    if (Object.keys(failedTags).length === 0) {
        tagsList.innerHTML = '<li>Perfect score! You have mastered all topics.</li>';
    } else {
        const sortedTags = Object.entries(failedTags).sort((a, b) => b[1] - a[1]);
        
        sortedTags.slice(0, 5).forEach(([tag, count]) => {
            const li = document.createElement('li');
            li.innerText = `${tag} (Missed ${count} questions)`;
            tagsList.appendChild(li);
        });
    }
}
