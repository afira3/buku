let currentIndex = 0;
let answer = ["", "", "", "", ""];

const keyboard = document.getElementById("keyboard");

for (let i = 65; i <= 90; i++) {
  const btn = document.createElement("button");
  btn.textContent = String.fromCharCode(i);
  btn.onclick = () => addLetter(btn.textContent);
  keyboard.appendChild(btn);
}

function addLetter(letter) {
  if (currentIndex < 5) {
    answer[currentIndex] = letter;
    document.getElementById("b" + currentIndex).textContent = letter;
    currentIndex++;
  }
}

function checkAnswer() {
  const result = document.getElementById("result");
  const word = answer.join("");

  if (word === "DEATH") {
    result.textContent = "✔️ JAWABAN BENAR";
    document.getElementById("bookOverlay").style.display = "flex";
  } else {
    result.textContent = "❌ JAWABAN SALAH";
  }
}

function openBook() {
  document.getElementById("bookOverlay").style.display = "none";
  document.getElementById("storyOverlay").style.display = "block";
}
