// --- ALTERNÂNCIA DE TEMA (CLARO / ESCURO) ---
const themeBtn = document.getElementById('theme-btn');
let isDarkMode = false;

themeBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
        themeBtn.textContent = '☀️ Modo Claro';
    } else {
        document.body.removeAttribute('data-theme');
        themeBtn.textContent = '🌙 Modo Escuro';
    }
});

// --- LÓGICA DO JOGO (QUIZ) ---
function checkAnswer(isCorrect) {
    const resultDiv = document.getElementById('quiz-result');
    if (isCorrect) {
        resultDiv.style.color = '#27ae60';
        resultDiv.textContent = ' Acertou! O olfato dos cães é até 100.000 vezes mais potente que o dos humanos!';
    } else {
        resultDiv.style.color = '#e74c3c';
        resultDiv.textContent = '❌ Tente novamente! Dica: eles adoram cheirar tudo por onde passam.';
    }
}
