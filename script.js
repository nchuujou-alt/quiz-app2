// 一般常識クイズ問題データ(オリジナル作成)
const quizData = [
  {
    question: "1年は何日ですか？(平年の場合)",
    choices: ["364日", "365日", "366日", "360日"],
    answer: 1
  },
  {
    question: "日本の首都はどこですか？",
    choices: ["大阪府", "京都府", "東京都", "神奈川県"],
    answer: 2
  },
  {
    question: "水が凍る温度(セ氏)は何度ですか？",
    choices: ["0度", "10度", "-10度", "100度"],
    answer: 0
  },
  {
    question: "1週間は何日ですか？",
    choices: ["5日", "6日", "7日", "8日"],
    answer: 2
  },
  {
    question: "次のうち、都道府県ではないものはどれですか？",
    choices: ["奈良県", "大阪市", "沖縄県", "北海道"],
    answer: 1
  }
];

const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const retryBtn = document.getElementById("retry-btn");

const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const scoreTextEl = document.getElementById("score-text");
const scoreCommentEl = document.getElementById("score-comment");

let currentIndex = 0;
let score = 0;
let answered = false;

function startQuiz() {
  currentIndex = 0;
  score = 0;
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  answered = false;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  nextBtn.disabled = true;
  nextBtn.textContent = currentIndex === quizData.length - 1 ? "結果を見る" : "次へ";

  const current = quizData[currentIndex];
  questionNumberEl.textContent = `第${currentIndex + 1}問`;
  questionTextEl.textContent = current.question;

  choicesEl.innerHTML = "";
  current.choices.forEach((choiceText, index) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choiceText;
    btn.addEventListener("click", () => selectAnswer(index, btn));
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(selectedIndex, selectedBtn) {
  if (answered) return;
  answered = true;

  const current = quizData[currentIndex];
  const isCorrect = selectedIndex === current.answer;

  const allButtons = choicesEl.querySelectorAll(".choice-btn");
  allButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === current.answer) {
      btn.classList.add("correct");
    } else if (index === selectedIndex) {
      btn.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    feedbackEl.textContent = "正解です！";
    feedbackEl.classList.add("correct");
  } else {
    feedbackEl.textContent = `不正解です。正解は「${current.choices[current.answer]}」です。`;
    feedbackEl.classList.add("incorrect");
  }

  nextBtn.disabled = false;
}

function goNext() {
  currentIndex++;
  if (currentIndex < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  scoreTextEl.textContent = `${quizData.length}問中 ${score}問正解！`;

  let comment;
  if (score === quizData.length) {
    comment = "満点です！素晴らしい常識力ですね。";
  } else if (score >= quizData.length * 0.6) {
    comment = "なかなかの常識力です！";
  } else {
    comment = "もう一度挑戦して知識を深めましょう。";
  }
  scoreCommentEl.textContent = comment;
}

nextBtn.addEventListener("click", goNext);
retryBtn.addEventListener("click", startQuiz);

startQuiz();
